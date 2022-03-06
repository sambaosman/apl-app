import React from "react";
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
              ></TextInput>
            </Col>
            <Col>
              {" "}
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register/manager/${team.id}`
                  );
                }}
              >
                <i
                  className={`fa-solid fa-copy`}
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
              ></TextInput>
            </Col>
            <Col>
              {" "}
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register/player/${team.id}`
                  );
                }}
              >
                <i
                  className={`fa-solid fa-copy`}
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
              ></TextInput>
            </Col>
            <Col>
              {" "}
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/register/guestPlayer/${team.id}`
                  );
                }}
              >
                <i
                  className={`fa-solid fa-copy`}
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
