import React, { useState } from "react";
// React router
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import { setOrderEmail } from "../../../../actions/order-actions";
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
  // Form state
  const [formEmail, setFormEmail] = useState("");
  const [formError, setFormError] = useState(true);

  // Redux state
  const { date } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  // Use history
  let history = useHistory();

  // Form submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formError) {
      dispatch(setOrderEmail(formEmail));
      history.push("/receipt");
    }
  };

  // On change email handler
  const onEmailChange = (email) => {
    setFormEmail(email);
  };

  // Disable confirm button
  const disabled = date == null || formError ? true : false;

  // An easy way to pass props to child component
  const propsForEmailField = {
    onEmailChange,
    setFormError,
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Typography variant="h2">Get your order ready!</Typography>
      <StyledFormControl>
        {/* Select amount of people Field */}
        <SelectPeople maxPeople={10} />
        {/* Email Field */}
        <EmailField {...propsForEmailField} />
        {/* Submit Button */}
        <StyledButton
          color="primary"
          variant="contained"
          type="submit"
          disabled={disabled}
        >
          Order
        </StyledButton>
      </StyledFormControl>
    </StyledForm>
  );
};

export default FormSection;
