import { BigNumber } from "ethers";
import { useContext, useEffect, useState, useCallback } from "react";
import { EthersContext } from "../context/ethersContext";
import { XBLZDTokenContext, SymfoniCoinFlip, SymfoniWheelOfFortune, SymfoniDiceRoll } from "../hardhat/SymfoniContext";

export const useAllowance = (gameContract: SymfoniCoinFlip | SymfoniWheelOfFortune | SymfoniDiceRoll | null) => {
  const XBLZD = useContext(XBLZDTokenContext);
  const { account } = useContext(EthersContext);
  const [allowance, setAllowance] = useState<BigNumber>(BigNumber.from(0));
  const [approving, setApproving] = useState<Boolean>(false);

  const fetchAllowance = useCallback(async () => {
    if (!XBLZD.instance || !gameContract?.instance || !account || approving) {
      return BigNumber.from(0);
    }
    return XBLZD.instance.allowance(account, gameContract.instance.address);
  }, [XBLZD, account, gameContract, approving]);

  const approve = async () => {
    if (!XBLZD.instance || !gameContract?.instance) {
      return;
    }
    setApproving(true);
    try {
      const tx = await XBLZD.instance?.approve(
        gameContract.instance.address,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      await tx.wait();
      await fetchAllowance();
    } catch (e) {
      console.error(e);
    } finally {
      setApproving(false);
    }
  };

  useEffect(() => {
    setAllowance(BigNumber.from(0));
    fetchAllowance().then((r) => {
      setAllowance(r);
    });
  }, [fetchAllowance]);

  return { allowance, approve, approving };
};
