import React from "react";
import { Row, Col, Card } from "reactstrap";
import { deleteTeam } from "../../../server/ApiFunctions";
import "./TeamCard.scss";
import {
  CardButtonWithText,
  IconButton,
} from "../../../../src/StyledComponents/StyledComponents";
import { Icon } from "@iconify/react";

const WebTeamCard = ({
  setClickedTeam,
  updateTeam,
  setTeams,
  team,
  history,
}) => {
  return (
    <Card
      className="web-team-card"
      onClick={() => {
        setClickedTeam(team);
        history("/roster");
      }}
    >
      <div className="team-logo">
        <img src={team.imageURL} className="image-container" />
      </div>
      <div className="team-card-title"> {team.teamName}</div>
      <Row className="text-buttons">
        <Col
          md="6"
          className="center"
          style={{ paddingRight: "5px", maxWidth: "50%" }}
        >
          <CardButtonWithText
            style={{ backgroundColor: "rgba(111, 88, 201, 0.15)" }}
            onClick={(event) => {
              event.stopPropagation();
              updateTeam(team.id, setTeams);
            }}
          >
            <span className="center">
              <Icon color="var(--secondary" icon="bxs:pencil" />
            </span>
            <span className="button-title">Edit</span>
          </CardButtonWithText>
        </Col>
        <Col
          md="6"
          className="center"
          style={{ paddingLeft: "5px", maxWidth: "50%" }}
        >
          {" "}
          <CardButtonWithText
            style={{ backgroundColor: "rgba(211, 97, 53, 0.15)" }}
            onClick={(event) => {
              event.stopPropagation();
              deleteTeam(team.id, setTeams);
            }}
          >
            <span className="center">
              <Icon color="var(--danger)" icon="eva:trash-fill" />
            </span>
            <span className="button-title" style={{ color: "var(--danger)" }}>
              Cancel
            </span>
          </CardButtonWithText>
        </Col>
      </Row>
    </Card>
  );
};

export default WebTeamCard;
