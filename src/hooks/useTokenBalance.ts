import { BigNumber } from "ethers";
import { useContext, useEffect, useState, useCallback } from "react";
import { EthersContext } from "../context/ethersContext";
import { XBLZDTokenContext } from "../hardhat/SymfoniContext";

export const useTokenBalance = () => {
  const XBLZDToken = useContext(XBLZDTokenContext);
  const { account, block } = useContext(EthersContext);
  const [balance, setBalance] = useState<Number>(0);
  const fetchBalance = useCallback(async () => {
    if (!XBLZDToken.instance || !account) {
      return 0;
    }
    const balance = await XBLZDToken.instance.balanceOf(account);
    return balance.div(BigNumber.from(10).pow(16)).toNumber() / 100;
    // return balance.div(BigNumber.from(10).pow(21)).toNumber() * 1000;
  }, [XBLZDToken, account, block]);

  useEffect(() => {
    fetchBalance().then((r) => {
      setBalance(r);
    });
  }, [fetchBalance]);

  return balance;
};
