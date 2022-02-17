import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { updateTeamMember, deleteTeamMember } from "./RegistrationServices";

const RegisteredList = ({
  teamMembers,
  setTeamMembers,
  deleteTeamMember,
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
  getTeamMembers,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedPlayer, setEditedPlayer] = useState(null);

  useEffect(() => {
    getTeamMembers(setTeamMembers);
  }, []);

  let guestPlayers = teamMembers.filter((teamMember) => teamMember.guestPlayer);

  return (
    <React.Fragment>
      {teamMembers &&
        teamMembers.length &&
        teamMembers
          .filter(
            (teamMember) =>
              teamMember.teamsID === window.location.pathname.split("/")[1] &&
              !teamMember.guestPlayer
          )
          .map((teamMember, index) => (
            <Row key={index}>
              <React.Fragment>
                <Col md="2">{teamMember.firstName}</Col>
                <Col md="2">{teamMember.lastName}</Col>
                <Col md="4">{teamMember.email}</Col>
                <Col md="2">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setEditedPlayer(teamMember.id);
                    }}
                  >
                    Edit
                  </button>
                </Col>
                <Col md="2">
                  {" "}
                  <button
                    onClick={() => deleteTeamMember(teamMember, setTeamMembers)}
                  >
                    Delete
                  </button>
                </Col>
              </React.Fragment>
            </Row>
          ))}
      <h1>GUESTS</h1>
      {guestPlayers &&
        guestPlayers.length &&
        guestPlayers
          .filter(
            (teamMember) =>
              teamMember.teamsID === window.location.pathname.split("/")[1]
          )
          .map((teamMember, index) => (
            <Row key={index}>
              <React.Fragment>
                <Col md="2">{teamMember.firstName}</Col>
                <Col md="2">{teamMember.lastName}</Col>
                <Col md="4">{teamMember.email}</Col>
                <Col md="2">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setEditedPlayer(teamMember.id);
                    }}
                  >
                    Edit
                  </button>
                </Col>
                <Col md="2">
                  {" "}
                  <button
                    onClick={() => deleteTeamMember(teamMember, setTeamMembers)}
                  >
                    Delete
                  </button>
                </Col>
              </React.Fragment>
            </Row>
          ))}
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
        <ReactForm>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <div
            onClick={() => {
              updateTeamMember(
                editedPlayer,
                firstName,
                lastName,
                email,
                getTeamMembers,
                setTeamMembers
              );
              setIsOpen(false);
            }}
          >
            Update
          </div>
        </ReactForm>
      </Modal>
    </React.Fragment>
  );
};

export default RegisteredList;
