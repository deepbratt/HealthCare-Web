import React from "react";
import { useParams } from "react-router-dom";

const AddFile: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Add File</h1>
      <p>Patient ID: {id}</p>
    </>
  );
};

export default AddFile;