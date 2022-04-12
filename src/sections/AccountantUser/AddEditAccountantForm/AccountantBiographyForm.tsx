import React, { useContext } from "react";
import { UserFormContext } from "../../../context/UserFormContext";
import BiographyForm from "../../../components/Forms/BiographyForm";
//* Add data/utils import below this comment
import { ACCOUNTANT } from "../../../utils/langauge/en/buttonLabels";

const AccountantBiographyForm: React.FC = () => {
  const { values, errors, handleInputChange } = useContext(UserFormContext);
  return (
    <BiographyForm
      TITLE={ACCOUNTANT}
      values={values}
      errors={errors}
      handleInputChange={handleInputChange}
    />
  );
};

export default AccountantBiographyForm;