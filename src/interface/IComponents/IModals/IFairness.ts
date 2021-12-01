type IFairnessProps = {
  btnClass: string | null;
} & typeof defaultProps;

const defaultProps = {
  btnClass: "",
};
type IFaoremssState = { open: boolean; activeTab: string };

export type { IFairnessProps, IFaoremssState };
