import { useContext, useEffect, useState } from "react";
import { SignerContext } from "../hardhat/SymfoniContext";
import { chainIdToNumber } from "../utils/chainIdToNumber";

function useEthersConnection() {
  const [account, setAccount] = useState({});
  const [signer] = useContext(SignerContext);
  const [chainId, setChainId] = useState<number>();

  useEffect(() => {
    const int = setInterval(async () => {
      if (window.ethereum) {
        setChainId(chainIdToNumber(await window.ethereum.request({ method: "eth_chainId" })));
        setAccount((prev) => ({ ...prev, ethereum: window.ethereum }));
      }
    }, 1000);
    return () => clearInterval(int);
  }, [signer]);

  return { ...account, loaded: true, chainId };
}

export default useEthersConnection;
