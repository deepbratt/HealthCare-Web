import React from "react";
import { useParams } from "react-router-dom";

const AddInvoice: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Add Invoice</h1>
      <p>Patient ID: {id}</p>
    </>
  );
};

export default AddInvoice;