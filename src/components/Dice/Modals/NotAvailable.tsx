import React, { useState } from "react";
import Modal from "./BaseModal";
import styled from "styled-components";

const NotAvailableModal = (accessAvailable: boolean) => {
  const [open, setOpen] = useState<boolean>(!accessAvailable);

  return (
    <Modal open={open} onClose={() => setOpen(!open)}>
      <StyledNoAccessTop> Sorry, Peergame isn’t available in your country</StyledNoAccessTop>
      <StyledNoAccessBottom>
        If you require further assistance, please contact us via contact@peergame.com.
      </StyledNoAccessBottom>
    </Modal>
  );
};

export default NotAvailableModal;

const StyledNoAccessTop = styled.div`
  max-width: 300px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 auto 24px;
  text-align: center;
`;
const StyledNoAccessBottom = styled.div`
  max-width: 300px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin: 0 auto;
`;
