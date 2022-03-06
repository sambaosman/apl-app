import React, { useState, useEffect } from "react";
import {
  PrimaryButton,
  IconButton,
  TextInput,
} from "../StyledComponents/StyledComponents";
import {
  Form as ReactForm,
  FormGroup,
  Label,
  Modal,
  Row,
  Col,
} from "reactstrap";

const LinkModal = ({ team, isLinkModalOpen, toggleLinkModal }) => {
  useEffect(() => {
    setPlayerCopied(false);
    setManagerCopied(false);
    setGuestPlayerCopied(false);
  }, [isLinkModalOpen]);

  const [playerCopied, setPlayerCopied] = useState(false);
  const [managerCopied, setManagerCopied] = useState(false);
  const [guestPlayerCopied, setGuestPlayerCopied] = useState(false);

  return (
    <Modal isOpen={isLinkModalOpen} toggle={toggleLinkModal}>
      {team && (
        <div style={{ padding: "20px" }}>
          <div className="app-title">Shareable Links</div>
          <div
            className="roster-user-label"
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            Manager Link
          </div>
          <Row>
            <Col style={{ minWidth: "280px" }}>
              {" "}
              <TextInput
                value={`${window.location.origin}/register/manager/${team.id}`}
                style={{ color: "var(--primary)" }}
              ></TextInput>
            </Col>
            <Col style={{ maxWidth: "50px" }}>
              {" "}
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register/manager/${team.id}`
                  );
                  setManagerCopied(true);
                }}
              >
                <i
                  className={
                    managerCopied ? `fa-solid fa-check` : `fa-solid fa-copy`
                  }
                  style={{ fontSize: "25px", color: "var(--secondary)" }}
                />
              </IconButton>
            </Col>
          </Row>

          <div
            className="roster-user-label"
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            Player Link
          </div>
          <Row>
            <Col style={{ minWidth: "280px" }}>
              {" "}
              <TextInput
                value={`${window.location.origin}/register/player/${team.id}`}
                style={{ color: "var(--primary)" }}
              ></TextInput>
            </Col>
            <Col style={{ maxWidth: "50px" }}>
              {" "}
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register/player/${team.id}`
                  );
                  setPlayerCopied(true);
                }}
              >
                <i
                  className={
                    playerCopied ? `fa-solid fa-check` : `fa-solid fa-copy`
                  }
                  style={{ fontSize: "25px", color: "var(--secondary)" }}
                />
              </IconButton>
            </Col>
          </Row>
          <div
            className="roster-user-label"
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            Guest Player Link
          </div>
          <Row>
            <Col style={{ minWidth: "280px" }}>
              {" "}
              <TextInput
                value={`${window.location.origin}/register/guestPlayer/${team.id}`}
                style={{ color: "var(--primary)" }}
              ></TextInput>
            </Col>
            <Col style={{ maxWidth: "50px" }}>
              {" "}
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register/guestPlayer/${team.id}`
                  );
                  setGuestPlayerCopied(true);
                }}
              >
                <i
                  className={
                    guestPlayerCopied ? `fa-solid fa-check` : `fa-solid fa-copy`
                  }
                  style={{ fontSize: "25px", color: "var(--secondary)" }}
                />
              </IconButton>
            </Col>
          </Row>
        </div>
      )}
    </Modal>
  );
};

export default LinkModal;
