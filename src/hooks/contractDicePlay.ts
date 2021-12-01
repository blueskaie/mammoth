import ascii_to_hex from "../utils/asciiToHex";
import { BigNumber } from "ethers";
import { seed } from "../utils/generateSeed";

export const contractDicePlay = async (
  { diceRoll }: any,
  betNumber: number,
  betType: string,
  betAmount: number,
  onSend = () => {}
) => {
  let game;
  try {
    const diceContract = diceRoll.instance;
    const seedGenerate = seed();
    await diceContract.play(
      betNumber,
      BigNumber.from(betAmount).mul(BigNumber.from(10).pow(BigNumber.from(18))).toString(),
      betType === "over",
      `0x${ascii_to_hex(seedGenerate)}`
    );
    onSend();
    game = await pollGame(diceContract, seedGenerate);
  } catch (e) {
    // alert(e.data?.message);
    // console.log(e.code);
    throw ({error: e});
  }

  return game;
};

//@ts-ignore
export const pollGame = async (contract: any, seed: string) => {
  const game = await contract.games(`0x${ascii_to_hex(seed)}`);
  if (game.state === 0) {
    return await pollGame(contract, seed);
  }
  return game;
};
