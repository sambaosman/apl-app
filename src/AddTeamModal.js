import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { TextInput } from "./StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label } from "reactstrap";
// import { addTeam } from "./TeamServices";
import { addTeam } from "./ApiFunctions";
import Modal from "./SharedComponents/Modal";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";
const AddTeamModal = ({
  addTeamModalOpen,
  setAddTeamModalOpen,
  dropdownOpen,
  setDropdownOpen,
  division,
  setDivision,
  setTeams,
  teamName,
  setTeamName,
}) => {
  return (
    <Modal
      isModalOpen={addTeamModalOpen}
      toggleModal={() => setAddTeamModalOpen(false)}
      title={"Add Team"}
      isButtonVisible={true}
      buttonFunction={(event) => {
        axios.post(`/teams`, {
          id: uuidv4(),
          teamName: teamName,
          division: division,
        });
        setAddTeamModalOpen(false);
      }}
      buttonTitle={"Add Team"}
      children={
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
      }
    />
  );
};

export default AddTeamModal;
