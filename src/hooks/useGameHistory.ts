import { useContext, useEffect, useState } from "react";
import { Multicall, ContractCallResults, ContractCallContext } from "ethereum-multicall-etl";
import { BigNumber, ethers } from "ethers";
import { EthersContext } from "context/ethersContext";
import { CoinFlipContext, DiceRollContext, ProviderContext, WheelOfFortuneContext } from "../hardhat/SymfoniContext";

export const useGameHistory = ({ ContractName }: any) => {
  const { block } = useContext(EthersContext);
  const [provider] = useContext(ProviderContext);
  const DiceRoll = useContext(DiceRollContext);
  const CoinFlip = useContext(CoinFlipContext);
  const Wheel = useContext(WheelOfFortuneContext);
  const [myGames, setMyGames] = useState<[] | any>([]);
  const [historyAll, setHistoryAll] = useState<[] | any>([]);
  const [highRollers, setHighRollers] = useState<[] | any>([]);

  const contracts: any = {
    DiceRoll,
    CoinFlip,
    Wheel,
  };

  const fetchMyGames = (): void => {
    setMyGames([]);
  };

  const fetchGetGames = async (): Promise<void> => {
    const Contract: typeof DiceRoll = await { ...contracts[ContractName] };
    const JSON_ABI = await import(`../hardhat/deployments/${process.env.REACT_APP_CHAIN_NAME}/${ContractName}.json`);

    if (provider && Contract?.instance) {
      const multicall = new Multicall({ ethersProvider: provider, tryAggregate: true });
      const lastGameId: BigNumber | undefined = await Contract.instance.totalGamesCount();
      if (lastGameId.toNumber() > 0) {
        const ids = Array.from({ length: lastGameId.toNumber() }, (v, i) => i).slice(-100);
        const listGamesCallContext: ContractCallContext<{}>[] = [
          {
            reference: "DiceContract",
            contractAddress: Contract.instance.address,
            abi: JSON_ABI.abi,
            calls: ids.map((ind) => {
              return { reference: ind.toString(), methodName: "listGames", methodParameters: [ind] };
            }),
          },
        ];
        const listResults: ContractCallResults = await multicall.call(listGamesCallContext);
        const seeds = (listResults.results.DiceContract?.callsReturnContext || []).map(
          ({ returnValues }) => returnValues[0]
        );

        const gamesCallContext: ContractCallContext<{}>[] = [
          {
            reference: "DiceContract",
            contractAddress: Contract.instance.address,
            abi: JSON_ABI.abi,
            calls: seeds.map((seed) => {
              return { reference: seed, methodName: "games", methodParameters: [seed] };
            }),
          },
        ];

        const gamesResults: ContractCallResults = await multicall.call(gamesCallContext);
        const games = (gamesResults.results.DiceContract?.callsReturnContext || []).map(({ returnValues }) => ({
          id: parseInt(returnValues[0].hex),
          player: returnValues[1],
          bet: Number(ethers.utils.formatEther(returnValues[2].hex)),
          prize: Number(ethers.utils.formatEther(returnValues[3].hex)),
          choice: parseInt(returnValues[4].hex),
          result: parseInt(returnValues[5].hex),
          over: returnValues[6],
        }));

        setHistoryAll(JSON.parse(JSON.stringify(games)).sort((a: any, b: any) => b.id - a.id));
        setHighRollers(JSON.parse(JSON.stringify(games)).sort((a: any, b: any) => b.bet - a.bet));
      }
    }
  };

  useEffect(() => {
    fetchGetGames();
    fetchMyGames();
  }, [DiceRoll || CoinFlip, block]);

  return {
    myGames,
    historyAll,
    highRollers,
  };
};
