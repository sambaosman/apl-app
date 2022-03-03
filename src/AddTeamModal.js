import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { PrimaryButton, TextInput } from "./StyledComponents/StyledComponents";
import {
  Form as ReactForm,
  FormGroup,
  Label,
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
  setTeamName,
}) => {
  return (
    <Modal isOpen={addTeamModalOpen} toggle={() => setAddTeamModalOpen(false)}>
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
          onClick={() => {
            addTeam(teamName, setTeams, division);
            setAddTeamModalOpen(false);
          }}
        >
          Add Team to APL
        </PrimaryButton>
      </ReactForm>
    </Modal>
  );
};

export default AddTeamModal;
