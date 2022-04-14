import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const EditProfile: React.FC = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <h1>Edit Profile</h1>
      <p>Profile of patient with ID: {id}</p>
    </Fragment>
  );
};

export default EditProfile;
