interface ILangSwitcher {}

type IOptions = {
  name: string;
  value: string;
};

type ILangSwitcherParams = {};
export type { IOptions, ILangSwitcherParams };
export default ILangSwitcher;
