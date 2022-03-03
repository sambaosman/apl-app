import React, { useState } from "react";
import {
  TextInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";
import { Auth } from "aws-amplify";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.completeNewPassword(user, oldPassword, newPassword);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="app-title">Log in</div>
      <TextInput
        placeholder="Old Password"
        type="password"
        name="old password"
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <TextInput
        placeholder="New Password"
        type="password"
        name="new password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <div>
        <PrimaryButton onClick={handleFormSubmission}>
          Change Password
        </PrimaryButton>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
