
import React from "react";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit User {id}</h2>
      {/* Form to edit the user with the specified id */}
    </div>
  );
};

export default EditUser;
