import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { PrimaryButton, TextInput } from "./StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label, Modal } from "reactstrap";
import { updateTeam } from "./TeamServices";

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
      isOpen={editTeamModalOpen}
      toggle={() => setEditTeamModalOpen(false)}
    >
      <ReactForm style={{ padding: "20px" }}>
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
        <PrimaryButton
          onClick={(event) => {
            updateTeam(event, editedTeam, teamName, setTeams, division);
            setEditTeamModalOpen(false);
          }}
        >
          Update Team
        </PrimaryButton>
      </ReactForm>
    </Modal>
  );
};

export default EditTeamModal;
