type IBetScrollProps = {
  number: number;
  minNumber: number;
  maxNumber: number;
  type: string;
  result?: number | null;
  disabled?: boolean;
  onNumberChange: Function;
  onTypeChange: Function;
  audioPlay: Function;
  loading: any;
};
export type { IBetScrollProps };
