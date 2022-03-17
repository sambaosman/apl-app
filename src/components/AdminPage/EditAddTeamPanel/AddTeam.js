import React, { useState, useEffect } from "react";
import { Dropdown, DropdownMenu, DropdownItem, Card } from "reactstrap";
import {
  TextInput,
  StyledDropdownToggle,
  UploadButton,
  CardButtonWithText,
} from "../../../StyledComponents/StyledComponents";
import { Form as ReactForm, FormGroup, Label } from "reactstrap";
import { addTeam } from "../../../server/ApiFunctions";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import NavBar from "../../NavBar/NavBar";
import { Row, Col } from "reactstrap";
import { Icon } from "@iconify/react";

import "./EditAddTeam.scss";

const AddTeam = ({
  dropdownOpen,
  setDropdownOpen,
  division,
  setDivision,
  setTeams,
  teamName,
  setTeamName,
  setShowAddTeam,
}) => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const submit = async (event) => {
    let id = uuidv4();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", id);

    const result = await axios.post("/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    addTeam(teamName, division, setTeams, id, file.name.replace(" ", ""));
    setShowAddTeam(false);
  };

  useEffect(() => {
    {
      file && setImage(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <Col className="edit-add-side-panel">
      <div className="page-container">
        <div className="admin-heading">
          <div className="page-title">Add Team</div>
        </div>
        <FormGroup>
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
            <StyledDropdownToggle
              caret
              className="dropdown-toggle"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              {division ? division : "Division"}
            </StyledDropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setDivision("Premier")}>
                Premier
              </DropdownItem>
              <DropdownItem onClick={() => setDivision("Championship")}>
                Championship
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <UploadButton
            filename={file}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
          />
        </FormGroup>
        <div className="review-text">Review:</div>
        <Card className="review-team-card">
          <Row style={{ width: "100%" }}>
            <Col className="center" style={{ width: "10%", margin: "auto" }}>
              <div className="team-logo">
                {file ? (
                  <img src={image} className="image-container" />
                ) : (
                  <div
                    className="division-label "
                    style={{ textAlign: "center", padding: "10px" }}
                  >
                    Upload Logo
                  </div>
                )}
              </div>
            </Col>
            <Col
              className="flex-start"
              style={{ width: "70%", margin: "auto" }}
            >
              <div>
                <div
                  className="team-card-title"
                  style={{ paddingTop: "0px", textAlign: "left" }}
                >
                  {" "}
                  {teamName ? teamName : "Team Name"}{" "}
                </div>
                <div className="team-card-subtitle">
                  {division ? division : "Division"}
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <Row className="text-buttons">
          <Col
            md="6"
            className="center"
            style={{ paddingRight: "5px", maxWidth: "50%" }}
          >
            <CardButtonWithText
              style={{ backgroundColor: "rgba(211, 97, 53, 0.15)" }}
              onClick={(event) => {
                setShowAddTeam(false);
              }}
            >
              <span className="center">
                <Icon color="var(--danger)" icon="eva:trash-fill" />
              </span>
              <span className="button-title" style={{ color: "var(--danger)" }}>
                Cancel
              </span>
            </CardButtonWithText>
          </Col>
          <Col
            md="6"
            className="center"
            style={{ paddingLeft: "5px", maxWidth: "50%" }}
          >
            <CardButtonWithText
              style={{ backgroundColor: "rgba(111, 88, 201, 0.15)" }}
              onClick={(event) => {
                event.stopPropagation();
                submit();
              }}
            >
              <span className="center">
                <Icon color="var(--secondary" icon="akar-icons:plus" />
              </span>
              <span className="button-title">Add Team</span>
            </CardButtonWithText>{" "}
          </Col>
        </Row>
      </div>
    </Col>

    // <Modal
    //   isModalOpen={addTeamModalOpen}
    //   toggleModal={() => setAddTeamModalOpen(false)}
    //   title={"Add Team"}
    //   isButtonVisible={true}
    //   buttonFunction={(event) => {
    //     submit(event);
    //   }}
    //   buttonTitle={"Add Team"}
    //   children={
    //     <React.Fragment>
    //       <FormGroup>
    //         <Label for="firstName">Team Name</Label>
    //         <TextInput
    //           name="teamName"
    //           id="teamName"
    //           placeholder="Enter Team Name"
    //           onChange={(event) => setTeamName(event.target.value)}
    //         />
    //         <Dropdown
    //           isOpen={dropdownOpen}
    //           toggle={() => setDropdownOpen(!dropdownOpen)}
    //         >
    //           <DropdownToggle
    //             caret
    //             style={{
    //               backgroundColor: "white",
    //               color: "black",
    //               textTransform: "capitalize",
    //             }}
    //           >
    //             {division ? division : "Division"}
    //           </DropdownToggle>
    //           <DropdownMenu>
    //             <DropdownItem onClick={() => setDivision("premier")}>
    //               Premier
    //             </DropdownItem>
    //             <DropdownItem onClick={() => setDivision("championship")}>
    //               Championship
    //             </DropdownItem>
    //           </DropdownMenu>
    //         </Dropdown>
    //         <input
    //           filename={file}
    //           onChange={(e) => setFile(e.target.files[0])}
    //           type="file"
    //           accept="image/*"
    //         />
    //       </FormGroup>
    //     </React.Fragment>
    //   }
    // />
  );
};

export default AddTeam;
