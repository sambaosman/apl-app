import React from "react";
import { Row, Col, Card } from "reactstrap";
import { deleteTeam } from "../../../server/ApiFunctions";
import "./TeamCard.scss";
import { CardButtonWithText } from "../../../../src/StyledComponents/StyledComponents";
import { Icon } from "@iconify/react";

const TeamCard = ({
  team,
  setTeams,
  setEditTeamModalOpen,
  updateTeam,
  setClickedTeam,
  history,
}) => {
  return (
    <Card className="team-card">
      <div className="team-logo">
        <img src={team.imageURL} className="image-container" />
      </div>
      <div className="team-card-title"> {team.teamName}</div>
      <Row style={{ width: "100%" }}>
        <Col
          md="6"
          className="center"
          style={{ paddingRight: "5px", maxWidth: "50%" }}
        >
          <CardButtonWithText
            style={{ backgroundColor: "rgba(111, 88, 201, 0.15)" }}
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
          >
            <span className="center">
              <Icon color="var(--danger)" icon="eva:trash-fill" />
            </span>
            <span className="button-title" style={{ color: "var(--danger)" }}>
              Delete
            </span>
          </CardButtonWithText>
        </Col>
      </Row>
    </Card>
    // <div style={{ display: "flex", justifyContent: "flex-start" }}>
    //   <Row
    //     className="individual-team"
    //     onClick={() => {
    //       setClickedTeam(team);
    //       history("/roster");
    //     }}
    //   >
    //     <Col>
    //       <div className="user-icon-circle">
    //         <img
    //           src={team.imageURL}
    //           style={{ maxWidth: "100%", maxHeight: "100%" }}
    //         />
    //       </div>
    //     </Col>
    //     <Col style={{ textAlign: "left", fontWeight: "bold" }}>
    //       {team.teamName}
    //     </Col>
    //     <Col>
    //       <div
    //         className="delete-player-icon"
    //         onClick={(event) => {
    //           event.stopPropagation();
    //           updateTeam(team.id, setTeams);
    //         }}
    //       >
    //         <i className={`fa-solid fa-pencil`} style={{ fontSize: "15px" }} />
    //       </div>
    //       <div
    //         className="delete-player-icon"
    //         onClick={(event) => {
    //           event.stopPropagation();
    //           deleteTeam(team.id, setTeams);
    //         }}
    //       >
    //         <i
    //           className={`fa-solid fa-times`}
    //           style={{ fontSize: "15px", color: "#a24936" }}
    //         />
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default TeamCard;
