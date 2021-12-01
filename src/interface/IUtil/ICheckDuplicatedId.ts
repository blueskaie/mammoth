interface ICheckDuplicatedId {
  area: string;
  bet: number;
  choice: number;
  currency: string;
  id: number;
  player: string;
  prize: number;
  result: number;
  state: number;
  txid: string;
}
export type IChekParam = Array<ICheckDuplicatedId>;
