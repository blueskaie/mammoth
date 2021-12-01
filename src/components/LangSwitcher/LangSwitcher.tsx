import React, { useRef, useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/images/arrowDown.svg";
import * as LangStyled from "./LangSwitcherStyled/langSwitcherStyled";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { IOptions } from "../../interface/IComponents/ILangSwitcher";

const options: Array<IOptions> = [
  { name: "English", value: "EN" },
  { name: "Hindi", value: "HI" },
  { name: "Persian", value: "FA" },
  { name: "Filipino", value: "FIL" },
  { name: "Russian", value: "RU" },
];

const LangSwitcher = () => {
  const ref = useRef<null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);

  const onOptionClicked =
    (value: string | null): Function =>
    (): void => {
      setSelectedOption(value);
      setOpen(false);
    };

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <LangStyled.StyledLanguagesDiv onClick={() => setOpen(!open)} toggleMenu={open} ref={ref}>
      <LangStyled.StyledDropDownHeader>{selectedOption || "EN"}</LangStyled.StyledDropDownHeader>
      <LangStyled.StyledDropDownList toggleMenu={open}>
        {options.map(({ name, value }: IOptions) => (
          <LangStyled.StyledItem onClick={() => onOptionClicked(value)} key={Math.random()}>
            {name}
          </LangStyled.StyledItem>
        ))}
      </LangStyled.StyledDropDownList>
      <ArrowDown />
    </LangStyled.StyledLanguagesDiv>
  );
};

export default LangSwitcher;
