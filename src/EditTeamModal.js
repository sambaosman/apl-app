import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { TextInput } from "./StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label } from "reactstrap";
import Modal from "./SharedComponents/Modal";
import { updatedTeam } from "./server/ApiFunctions";

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
        updatedTeam(editedTeam, teamName, division);
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
