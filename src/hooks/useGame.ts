import { useContext, useState } from "react";
import ascii_to_hex from "../utils/asciiToHex";
import { ethers, BigNumber } from "ethers";
import { seed as generateSeed } from "../utils/generateSeed";
import { CoinFlipContext, DiceRollContext, WheelOfFortuneContext } from "../hardhat/SymfoniContext";
import { STATUS } from "constants/gameStatus";

const CONTEXTS: any = {
  DICE: DiceRollContext,
  FLIP: CoinFlipContext,
  WHEEL: WheelOfFortuneContext,
};

export const useGame = (name: string) => {
  const contract: any = useContext(CONTEXTS[name]);
  const [status, setStatus] = useState<STATUS>(STATUS.NONE);
  const [game, setGame] = useState<any | null>(null);

  const play = async (choice: number, betAmount: number) => {
    let game;
    try {
      setStatus(STATUS.PENDING_USER);
      const seed = generateSeed();
      await contract?.instance?.play(choice, ethers.utils.parseEther(betAmount.toString()), `0x${ascii_to_hex(seed)}`);
      setStatus(STATUS.PENDING_USER_TRANSACTION);
      while (!game || game.state === 0) {
        game = await contract?.instance?.games(`0x${ascii_to_hex(seed)}`);
        if (game && game.bet.div(BigNumber.from(10).pow(BigNumber.from(15))).toNumber() !== 0) {
          setStatus(STATUS.PENDING_CROUPIER_TRANSACTION);
        }
      }
      setStatus(STATUS.CONFIRMED);
      setGame(game);
    } catch (e) {
      console.error(e.message);
      setStatus(STATUS.ERROR);
      throw ({code: e.code});
    }
  };

  return { play, status, contract, game };
};
