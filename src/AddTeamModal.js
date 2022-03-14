import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { TextInput } from "./StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label } from "reactstrap";
import { addTeam } from "./server/ApiFunctions";
import Modal from "./SharedComponents/Modal";
import axios from "axios";

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
  imageURL,
  setImageURL,
}) => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    const result = await axios.post("/api/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    addTeam(teamName, division, setTeams, result.data.imagePath);
    setAddTeamModalOpen(false);
  };

  return (
    <Modal
      isModalOpen={addTeamModalOpen}
      toggleModal={() => setAddTeamModalOpen(false)}
      title={"Add Team"}
      isButtonVisible={true}
      buttonFunction={(event) => {
        submit(event);
      }}
      buttonTitle={"Add Team"}
      children={
        <React.Fragment>
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
            <input
              filename={file}
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              accept="image/*"
            />
          </FormGroup>
        </React.Fragment>
      }
    />
  );
};

export default AddTeamModal;
