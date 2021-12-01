type IToolBarProps = {
  isRolling: boolean;
  isRealMode: boolean;
  isAudioEnabled: boolean;
  onAudioToggle: Function;
  onModeChange: Function;
  currencyValue: string;
  minBet?: number;
  maxPayout?: number;
};

export type { IToolBarProps };
