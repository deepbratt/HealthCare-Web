import React from "react";
import { useParams } from "react-router-dom";

const AddToken: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Add Token</h1>
      <p>Patient ID: {id}</p>
    </>
  );
};

export default AddToken;