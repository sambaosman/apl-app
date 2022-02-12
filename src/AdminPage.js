import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <Link to="/registration-form">
        <button>Go To Form</button>
      </Link>
      <button>Add Team</button>
    </div>
  );
};
export default AdminPage;
