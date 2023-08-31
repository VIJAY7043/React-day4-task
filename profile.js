import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Profile {id}</h2>
      {/* Display user's profile information */}
    </div>
  );
};

export default Profile;
