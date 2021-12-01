import React, { useEffect } from "react";
import * as BaseStyled from "./modalStyled/basesModalStyled";
import { IModalProp } from "../../../interface/IComponents/IModals/IModal";

// function scrollingElement(): any {
//   return document.scrollingElement || document.documentElement;
// }

// function getScrollbarWidth(): any {
//   return window.innerWidth - document.documentElement.clientWidth;
// }

const Modal = ({ open, children, onClose, title }: IModalProp) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
    }
  }, [open]);

  return (
    <>
      <BaseStyled.StyledModal className={`${open && "open"}`} type={title}>
        <BaseStyled.StyledHead type={title}>
          <BaseStyled.StyledCloseContainer>
            {title}
            <BaseStyled.StyledClose type="button" onClick={onClose} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <defs />
                <path fill="#242424" d="M14.6 1.8L1.8 14.6a.3.3 0 01-.4-.4L14.2 1.4a.3.3 0 11.4.4z" />
                <path fill="#242424" d="M1.8 1.4l12.8 12.8a.3.3 0 01-.4.4L1.4 1.8a.3.3 0 11.4-.4z" />
              </svg>
            </BaseStyled.StyledClose>
          </BaseStyled.StyledCloseContainer>
        </BaseStyled.StyledHead>
        {children}
      </BaseStyled.StyledModal>
      <BaseStyled.StyledBackDrop type="button" className={`${open && "open"}`} onClick={onClose} aria-label="Close" />
    </>
  );
};

export default Modal;
