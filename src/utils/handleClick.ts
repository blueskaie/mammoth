// import config from 'config';set

export function handleClickWindowOpen(url: string) {
  return () => {
    if (!url) {
      return;
    }
    window.open(url);
  };
}

export function handleClickTxId(txId: any) {
  if (!txId) {
    return;
  }

  // return handleClickWindowOpen(`${config.explorerTx}/${txId}`);
}

export function handleClickBlock(blockHash: any) {
  if (!blockHash) {
    return;
  }

  // return handleClickWindowOpen(`${config.explorerBlock}/${blockHash}`);
}
