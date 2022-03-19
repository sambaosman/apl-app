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
import { Form, Field } from "react-final-form";
import { Row, Col } from "reactstrap";

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
  showAddTeam,
  closePanel,
}) => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const submit = async (
    setTeamName,
    setDivision,
    showAddTeam,
    setShowAddTeam
  ) => {
    let id = uuidv4();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", id);

    const result = await axios.post("/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    addTeam(teamName, division, setTeams, id, file.name.replace(" ", ""));
    closePanel(setTeamName, setDivision, setShowAddTeam, showAddTeam);
  };

  useEffect(() => {
    {
      file && setImage(URL.createObjectURL(file));
    }
  }, [file]);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Col className="edit-add-side-panel">
      <div className="page-container">
        <div className="admin-heading">
          <div className="page-title">Add Team</div>
          <i
            className={`fa-solid fa-xmark hover`}
            style={{ fontSize: "25px", color: "var(--primary)" }}
            onClick={() =>
              closePanel(setTeamName, setDivision, setShowAddTeam, showAddTeam)
            }
          />
        </div>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!teamName) {
              errors.teamName = "Required";
            }
            if (!division) {
              errors.division = "Required";
            }
            if (!file) {
              errors.file = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, values, submitting, validating, valid }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Field name="teamName">
                  {({ meta }) => (
                    <div>
                      <TextInput
                        name="teamName"
                        id="teamName"
                        placeholder="Enter Team Name"
                        onChange={(event) => setTeamName(event.target.value)}
                      />
                      {meta.error && meta.touched && (
                        <span className="form-error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name="division">
                  {({ meta }) => (
                    <div>
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
                          <DropdownItem
                            onClick={() => setDivision("Championship")}
                          >
                            Championship
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      {meta.error && meta.touched && (
                        <span className="form-error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Field name="file">
                  {({ meta }) => (
                    <div>
                      <UploadButton
                        filename={file}
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        accept="image/*"
                      />
                      {meta.error && meta.touched && (
                        <span className="form-error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <div className="review-text">Review:</div>
              <Card className="review-team-card">
                <Row style={{ width: "100%" }}>
                  <Col
                    className="center"
                    style={{ width: "10%", margin: "auto" }}
                  >
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
              <Row
                className="text-buttons"
                style={{ margin: "auto !important" }}
              >
                <Col
                  md="6"
                  className="center"
                  style={{ paddingRight: "5px", maxWidth: "50%" }}
                >
                  <CardButtonWithText
                    style={{ backgroundColor: "var(--danger-transparent)" }}
                    onClick={(event) => {
                      setShowAddTeam(false);
                    }}
                  >
                    <span className="center">
                      <i
                        className={`fa-solid fa-xmark`}
                        style={{ fontSize: "15px", color: "var(--danger)" }}
                      />
                    </span>
                    <span
                      className="button-title"
                      style={{ color: "var(--danger)" }}
                    >
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
                    style={{ backgroundColor: "var(--secondary-transparent)" }}
                    disabled={!valid}
                    onClick={(event) => {
                      event.stopPropagation();
                      submit(
                        setTeamName,
                        setDivision,
                        showAddTeam,
                        setShowAddTeam
                      );
                    }}
                  >
                    <span className="center">
                      <i
                        className={`fa-solid fa-plus`}
                        style={{ fontSize: "15px", color: "var(--secondary)" }}
                      />
                    </span>
                    <span className="button-title">Add Team</span>
                  </CardButtonWithText>{" "}
                </Col>
              </Row>
            </form>
          )}
        />
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
