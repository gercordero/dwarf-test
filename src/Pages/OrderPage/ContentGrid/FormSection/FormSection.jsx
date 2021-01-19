import React, { useState } from "react";
// React router
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  setOrderEmailAction,
  addToOrdersAction,
} from "../../../../actions/order-actions";
// Components
import SelectPeople from "./SelectPeople/SelectPeople";
import { EmailField } from "../../../../Components";
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
  const [submiting, setSubmitting] = useState(false);

  // Redux state
  const { dish } = useSelector((state) => state.dishGet); // We need dish to add it to orders array when submit successfully.
  const { drinks } = useSelector((state) => state.drinksStore); // We need drinks to add them to orders array when submit successfully.
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  // Use history
  let history = useHistory();

  // Form submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formError) {
      dispatch(setOrderEmailAction(formEmail));
      setSubmitting(true);
    }
  };

  // On change email handler
  const onEmailChange = (email) => {
    setFormEmail(email);
  };

  // Check if submiting and order email has changed,
  // then dispatch add order to store and go to next page.
  if (submiting && order.email !== "") {
    dispatch(addToOrdersAction(order, dish, drinks));
    history.push("/receipt");
  }

  // Disable confirm button if error
  const disabled = order.date == null || formError ? true : false;

  // An easy way to pass props to child component
  const propsForEmailField = {
    onEmailChange,
    setFormError,
    headingStyle: { marginTop: "3rem" },
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
