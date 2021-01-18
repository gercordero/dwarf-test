import React from "react";
// Components
import SelectPeople from "./SelectPeople/SelectPeople";
import EmailField from "./EmailField/EmailField";
// Material UI
import Typography from "@material-ui/core/Typography";
// Styled Components
import {
  StyledForm,
  StyledFormControl,
  StyledButton,
} from "./styles/FormSection.styles";

const FormSection = () => {
  return (
    <StyledForm>
      <Typography variant="h2">Get your order ready!</Typography>
      <StyledFormControl variant="outlined">
        {/* Select amount of people Field */}
        <SelectPeople maxPeople={10} />
        {/* Email Field */}
        <EmailField />
        {/* Submit Button */}
        <StyledButton color="primary" variant="contained">
          Order
        </StyledButton>
      </StyledFormControl>
    </StyledForm>
  );
};

export default FormSection;
