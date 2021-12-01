type IModalProp = {
  open?: boolean;
  children?: any;
  onClose?: Function;
  title?: string;
} & typeof defaultProps;

const defaultProps = {
  open: false,
  onClose: () => {},
};

export type { IModalProp };
