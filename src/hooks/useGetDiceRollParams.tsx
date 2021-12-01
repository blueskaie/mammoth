import { useContext, useEffect, useState } from "react";
import { DiceRollContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";

const useGetDiceRollParams = () => {
  const [params, setParams] = useState<any>({
    edge: 1,
    maxBet: 5000,
    _MinNumber: 0,
    _MaxNumber: 100,
    maxPayout: 100,
    minBet: 1,
    minNumber: 5,
    maxNumber: 100,
  });
  const DiceRoll = useContext(DiceRollContext);

  const mat = ethers.utils.parseEther("1");
  const getData = async () => {
    try {
      if (!DiceRoll.instance) {
        return params;
      }
      const rangeMin = await DiceRoll?.instance?.rangeMin();
      const rangeMax = await DiceRoll?.instance?.rangeMax();
      const maxPayout = (await DiceRoll?.instance?.maxPayout()).div(mat);
      const minBet = (await DiceRoll?.instance?.minBet()).div(mat);
      const maxBet = (await DiceRoll?.instance?.maxBet()).div(mat);
      const padding = await DiceRoll?.instance?.padding();
      const edge = await DiceRoll?.instance?.edge();
      return {
        maxPayout: maxPayout.toString(),
        minNumber: rangeMin.add(padding).toNumber(),
        maxNumber: rangeMax.sub(padding).toNumber(),
        _MinNumber: rangeMin.toNumber(),
        _MaxNumber: rangeMax.toNumber(),
        minBet: minBet.toNumber(),
        maxBet: maxBet.toNumber(),
        edge: edge,
      };
    } catch (e) {
      console.error(e);
      return {
        edge: 1,
        maxBet: 5000,
        maxNumber: 9500,
        _MinNumber: 0,
        _MaxNumber: 10000,
        maxPayout: 10000,
        minBet: 1,
        minNumber: 500,
      };
    }
  };

  useEffect(() => {
    getData().then((r) => {
      r && setParams({ ...r });
    });
  }, [DiceRoll]);

  return params;
};
export default useGetDiceRollParams;
