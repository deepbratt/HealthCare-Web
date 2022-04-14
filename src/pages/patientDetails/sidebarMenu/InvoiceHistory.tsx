import React from "react";
import { useParams } from "react-router-dom";

const InvoiceHistory: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Invoice History</h1>
      <p>Patient ID: {id}</p>
    </>
  );
};

export default InvoiceHistory;