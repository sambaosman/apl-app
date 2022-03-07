import React from "react";
import { PrimaryButton } from "../StyledComponents/StyledComponents";
import { Modal as ReactModal } from "reactstrap";

const Modal = ({
  isModalOpen,
  toggleModal,
  title,
  isButtonVisible,
  buttonFunction,
  buttonTitle,
  children,
}) => {
  return (
    <ReactModal isOpen={isModalOpen} toggle={toggleModal}>
      <div style={{ padding: "20px" }}>
        <div className="app-title">{title}</div>
        {children}
        {isButtonVisible && (
          <PrimaryButton onClick={buttonFunction}>{buttonTitle}</PrimaryButton>
        )}
      </div>
    </ReactModal>
  );
};

export default Modal;
