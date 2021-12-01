import { useContext, useState } from "react";
import { EthersContext } from "../context/ethersContext";
// import { ProviderContext } from "hardhat/SymfoniContext";

export const useChainId = (supportedChain = "1") => {
  // const allowance = useAllowance(gameContract);
  const { chainId } = useContext(EthersContext);
  const [isSwitching, setIsSwitching] = useState(false);
  // const [provider] = useContext(ProviderContext);
  async function switchChain() {
    setIsSwitching(true);
    try {
      await window.ethereum?.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: `0x${Number(process.env.REACT_APP_CHAIN_ID).toString(16)}`,
          },
        ],
      });
    } catch (switchError: any) {
      if (switchError?.code === 4902) {
        try {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${Number(process.env.REACT_APP_CHAIN_ID).toString(16)}`,
                chainName: `${process.env.REACT_APP_CHAIN_NAME}`,
                rpcUrls: [`${process.env.REACT_APP_NETWORK_URL}`],
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: [process.env.REACT_APP_BLOCK_EXPLORER_URL || "https://bscscan.com"],
              },
            ],
          });
        } catch (e) {
          console.error("Error adding chain", e);
        }
      } else {
        console.error("Error switching chain", switchError);
      }
    } finally {
      setIsSwitching(false);
    }
  }

  return {
    isSupportedChain: chainId === Number(supportedChain),
    isSwitching,
    switchChain,
  };
};
