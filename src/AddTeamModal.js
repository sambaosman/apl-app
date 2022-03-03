import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { PrimaryButton } from "./StyledComponents/StyledComponents";
import {
  Form as ReactForm,
  FormGroup,
  Label,
  Input,
  Modal,
  Row,
  Col,
} from "reactstrap";
import { addTeam, deleteTeam, updateTeam } from "./TeamServices";

const AddTeamModal = ({
  addTeamModalOpen,
  setAddTeamModalOpen,
  dropdownOpen,
  setDropdownOpen,
  division,
  setDivision,
  setTeams,
  teamName,
  setTeamName
}) => {
  return (
    <Modal isOpen={addTeamModalOpen} toggle={() => setAddTeamModalOpen(false)}>
      <ReactForm>
        <FormGroup>
          <Label for="firstName">Team Name</Label>
          <Input
            name="teamName"
            id="teamName"
            placeholder="Enter Team Name"
            onChange={(event) => setTeamName(event.target.value)}
          />
          <Dropdown
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
          >
            <DropdownToggle caret>
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
        <button
          type="button"
          onClick={() => {
            addTeam(teamName, setTeams, division);
            setAddTeamModalOpen(false);
          }}
        >
          Add Team to APL
        </button>
      </ReactForm>
    </Modal>
  );
};

export default AddTeamModal;
