import { ethers } from "ethers";

function sleep(n = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

//@ts-ignore
export async function pollGame(contract: any, seed: any) {
  const game = await contract.games(ethers.utils.formatBytes32String(seed)).call();
  if (game.state === 0) {
    await sleep(1000);
    return pollGame(contract, seed);
  }
  return game;
}
