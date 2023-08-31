// EditProfile.js
import React from "react";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Profile {id}</h2>
      {/* Form to edit the user's profile with the specified id */}
    </div>
  );
};

export default EditProfile;
