import { useContext, useEffect, useState } from "react";
import { WheelOfFortuneContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";

export const useGetWheelOParams = () => {
  const [params, setParams] = useState<any>({
    maxBet: 10,
    minBet: 0,
  });
  const WheelO = useContext(WheelOfFortuneContext);

  const mat = ethers.utils.parseEther("1");
  const getWheelOData = async () => {
    try {
      if (!WheelO.instance) {
        return params;
      }
      const inst = await WheelO.instance;

      const maxBet = (await inst.maxBet()).div(mat);
      const minBet = (await inst.minBet()).div(mat);
      const pColor = await inst.colors(0);
      const rColor = await inst.colors(1);
      const gColor = await inst.colors(2);
      const yColor = await inst.colors(3);
      setParams({
        maxBet: maxBet.toNumber(),
        minBet: minBet.toNumber(),
        colors: { pColor, rColor, gColor, yColor },
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getWheelOData().then((r) => {
      r && setParams({ ...r });
    });
  }, [WheelO]);

  return params;
};
export default useGetWheelOParams;
