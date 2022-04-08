import React, { useContext } from "react";
import BiographyForm from "../../../components/Forms/BiographyForm";
import { UserFormContext } from "../../../context/UserFormContext";
//* Add data/utils import below this comment
import { ADMIN } from "../../../utils/langauge/en/buttonLabels";

const AdminBiographyForm: React.FC = () => {
  const { values, errors, handleInputChange } = useContext(UserFormContext);
  return (
    <BiographyForm
      TITLE={ADMIN}
      values={values}
      errors={errors}
      handleInputChange={handleInputChange}
    />
  );
};

export default AdminBiographyForm;
