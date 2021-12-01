import { useContext, useEffect, useState } from "react";
import { EthersContext } from "context/ethersContext";
import useEthersConnection from "hooks/useEthersConnection";
import {
  CoinFlipContext,
  CurrentAddressContext,
  DiceRollContext,
  ProviderContext,
  SymfoniContext,
  WheelOfFortuneContext,
} from "hardhat/SymfoniContext";
import useGetDiceRollParams from "hooks/useGetDiceRollParams";
import useGetFlipParams from "hooks/useGetFlipParams";
import useGetWheelOParams from "hooks/useGetWheelOParams";
import { isMobile } from "utils/isMobile";
// import storage from "utils/storage";

const EthersProvider = ({ children }: any) => {
  const DiceRoll = useContext(DiceRollContext);
  const CoinFlip = useContext(CoinFlipContext);
  const WheelO = useContext(WheelOfFortuneContext);
  const { init } = useContext(SymfoniContext);
  const [provider] = useContext(ProviderContext);
  const [account, setCurrentAddress] = useContext(CurrentAddressContext);
  const [balance, setBalance] = useState<number>(0);
  const [block, setBlock] = useState<number>(0);
  const diceRollData = useGetDiceRollParams();
  const coinFlipData = useGetFlipParams();
  const wheelOData = useGetWheelOParams();
  const data = useEthersConnection();
  // const walletconnect = storage.get("walletconnect");

  useEffect(() => {
    if (!isMobile()) {
      window.ethereum?.on("accountsChanged", (accounts: string[]) => {
        setCurrentAddress(accounts[0]);
      });
    }
  }, [provider, setCurrentAddress]);

  useEffect(() => {
    init("hardhat");
  }, []);

  useEffect(() => {
    account &&
      provider
        ?.getBalance(account)
        .then((r) => {
          setBalance(+r.toString() / 10 ** 18);
        })
        .catch(console.error);
  }, [account, provider, setBalance]);

  useEffect(() => {
    const int = setInterval(async () => {
      const block = await provider?.getBlockNumber();
      if (block) {
        setBlock(block);
      }
    }, 10000);
    return () => clearInterval(int);
  }, [provider]);

  return (
    <EthersContext.Provider
      value={{
        ...data,
        contract: {},
        diceRoll: DiceRoll,
        coinFlip: CoinFlip,
        wheelO: WheelO,
        balance,
        diceRollData,
        coinFlipData,
        wheelOData,
        account,
        block,
      }}
    >
      {children}
    </EthersContext.Provider>
  );
};

export default EthersProvider;
