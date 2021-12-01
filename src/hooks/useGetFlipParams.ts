import { useContext, useEffect, useState } from "react";
import { CoinFlipContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";

const useGetFlipParams = () => {
  const [params, setParams] = useState<any>({
    maxBet: 100,
    minBet: 0.1,
    winCoefficient: 1.95,
  });
  const CoinFlip = useContext(CoinFlipContext);
  const mat = ethers.utils.parseEther("0.1");
  const getCoinFlipData = async () => {
    try {
      if (!CoinFlip.instance) {
        return params;
      }
      const maxBet = (await CoinFlip?.instance?.maxBet()).div(mat);
      const minBet = (await CoinFlip?.instance?.minBet()).div(mat);

      const edge = await CoinFlip?.instance?.edge();

      setParams({
        maxBet: maxBet.toNumber() / 10,
        minBet: minBet.toNumber() / 10,
        winCoefficient: (200 - edge) / 100,
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCoinFlipData().then((r) => {
      r && setParams({ ...r });
    });
  }, [CoinFlip]);

  return params;
};
export default useGetFlipParams;
