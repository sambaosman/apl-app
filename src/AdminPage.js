import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <Link to="/registration-form">
        <div>Go To Form</div>
      </Link>
    </div>
  );
};
export default AdminPage;
