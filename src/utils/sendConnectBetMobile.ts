import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import storage from "./storage";
import web3 from "web3";

type ITX = {
  from: string;
  to: string;
  value: string;
};

// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

const connectToMMMobile = () => {
  if (!connector.connected) {
    // create new session
    connector.createSession();
  }
  connector.on("connect", (error) => {
    if (error) {
      throw error;
    }
  });

  connector.on("session_update", (error) => {
    if (error) {
      throw error;
    }
  });

  connector.on("disconnect", (error) => {
    if (error) {
      throw error;
    }

    // Delete connector
  });
};
const sendTransaction = (tx: ITX) => {
  connector
    .sendTransaction(tx)
    .then((result) => {
      pollGameMobile(result);
      storage.set("transactionId", result);
    })
    .catch((error) => {
      console.error(error);
    });
};

//@ts-ignore
const pollGameMobile = async (transactionHash: string) => {
  //@ts-ignore
  const data = await web3.eth.getTransactionReceipt(transactionHash);
  if (transactionHash === null) {
    return await pollGameMobile(transactionHash);
  }
  return data;
};
export { connectToMMMobile, sendTransaction };
