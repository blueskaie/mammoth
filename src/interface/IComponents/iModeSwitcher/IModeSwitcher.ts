type IModeSwitcherProps = {
  onChange: Function;
  disabled: boolean;
  isRealMode: boolean;
} & typeof defaultProps;

const defaultProps = {
  disabled: false,
};

export type { IModeSwitcherProps };
