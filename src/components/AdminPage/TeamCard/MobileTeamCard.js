import React from "react";
import { Row, Col, Card } from "reactstrap";
import { deleteTeam } from "../../../server/ApiFunctions";
import "./TeamCard.scss";
import {
  CardButtonWithText,
  IconButton,
} from "../../../../src/StyledComponents/StyledComponents";
import { Icon } from "@iconify/react";

const MobileTeamCard = ({
  setClickedTeam,
  updateTeam,
  setTeams,
  team,
  history,
}) => {
  return (
    <Card
      className="mobile-team-card"
      onClick={() => {
        setClickedTeam(team);
        history("/roster");
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col className="center" style={{ width: "10%", margin: "auto" }}>
          <div className="team-logo">
            <img src={team.imageURL} className="image-container" />
          </div>
        </Col>
        <Col className="flex-start" style={{ width: "70%", margin: "auto" }}>
          <div>
            <div className="team-card-title" style={{ paddingTop: "0px" }}>
              {" "}
              {team.teamName}
            </div>
            <div className="team-card-subtitle"> {team.division}</div>
          </div>
        </Col>
        <Col
          className="flex-end"
          style={{
            paddingRight: "5px",
            width: "20%",
          }}
        >
          <div>
            <IconButton
              style={{
                backgroundColor: "rgba(111, 88, 201, 0.15)",
                width: "30px",
                height: "30px",
              }}
              onClick={(event) => {
                event.stopPropagation();
                updateTeam(team.id, setTeams);
              }}
            >
              <span className="center">
                <Icon color="var(--secondary" icon="bxs:pencil" />
              </span>
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "rgba(211, 97, 53, 0.15)",
                width: "30px",
                height: "30px",
              }}
              onClick={(event) => {
                event.stopPropagation();
                deleteTeam(team.id, setTeams);
              }}
            >
              <span className="center">
                <Icon color="var(--danger)" icon="eva:trash-fill" />
              </span>
            </IconButton>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default MobileTeamCard;
