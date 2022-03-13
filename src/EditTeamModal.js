import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { TextInput } from "./StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label } from "reactstrap";
import { updateTeam } from "./TeamServices";
import Modal from "./SharedComponents/Modal";
import axios from "axios";

const EditTeamModal = ({
  editTeamModalOpen,
  setEditTeamModalOpen,
  dropdownOpen,
  setDropdownOpen,
  division,
  setDivision,
  setTeams,
  teamName,
  setTeamName,
  editedTeam,
}) => {
  return (
    <Modal
      isModalOpen={editTeamModalOpen}
      toggleModal={() => setEditTeamModalOpen(false)}
      title={"Edit Team"}
      isButtonVisible={true}
      buttonFunction={(event) => {
        axios
          .put(`teams/${editedTeam}`, {
            teamName: teamName,
            division: division,
          })
          .then((response) => console.log("a", response));
        updateTeam(event, editedTeam, teamName, setTeams, division);
        setEditTeamModalOpen(false);
      }}
      buttonTitle={"Update Team"}
      children={
        <ReactForm>
          <FormGroup>
            <Label for="firstName">Team Name</Label>
            <TextInput
              name="teamName"
              id="teamName"
              placeholder="Enter Team Name"
              onChange={(event) => setTeamName(event.target.value)}
            />
            <Dropdown
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
            >
              <DropdownToggle
                caret
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "capitalize",
                }}
              >
                {division ? division : "Division"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setDivision("premier")}>
                  Premier
                </DropdownItem>
                <DropdownItem onClick={() => setDivision("championship")}>
                  Championship
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
        </ReactForm>
      }
    />
  );
};

export default EditTeamModal;
