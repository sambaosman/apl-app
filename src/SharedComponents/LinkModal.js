import React from "react";
import { PrimaryButton, TextInput } from "../StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label, Modal } from "reactstrap";

const LinkModal = ({ team, isLinkModalOpen, toggleLinkModal }) => {
  return (
    <Modal isOpen={isLinkModalOpen} toggle={toggleLinkModal}>
      <div style={{ padding: "20px" }}>
        <div className="app-title">Shareable Links</div>
        <div
          className="roster-user-label"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          Manager Link
        </div>
        <div className="shareable-link">
          <a
            href={`${window.location.origin}/register/manager/${team.id}`}
          >{`${window.location.origin}/register/manager/${team.id}`}</a>
        </div>
        <div
          className="roster-user-label"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          Player Link
        </div>
        <div className="shareable-link">
          <a
            href={`${window.location.origin}/register/player/${team.id}`}
          >{`${window.location.origin}/register/player/${team.id}`}</a>
        </div>
        <div
          className="roster-user-label"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          Guest Player Link
        </div>
        <div className="shareable-link">
          <a
            href={`${window.location.origin}/register/guestPlayer/${team.id}`}
          >{`${window.location.origin}/register/guestPlayer/${team.id}`}</a>
        </div>
      </div>
    </Modal>
  );
};

export default LinkModal;
