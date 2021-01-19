import React, { useState } from "react";
// React router
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
import { findOrderAction } from "../../../../actions/order-actions";
// Components
import { EmailField } from "../../../../Components";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Styled components
import {
  StyledCard,
  StyledForm,
  StyledButton,
} from "./styles/FindOrderSection";

const FindOrderSection = () => {
  // Redux state
  const dispatch = useDispatch();

  // FindOrderSection state
  const [formEmail, setFormEmail] = useState("");
  const [formError, setFormError] = useState(true);

  // Use history
  let history = useHistory();

  // Submit handler
  const submitHandler = (event) => {
    // Prevent page reload
    event.preventDefault();

    // if no error dispatch find order
    if (!formError) {
      dispatch(findOrderAction(formEmail));
      history.push("/pick-dish");
    }
  };

  // On change email handler
  const onEmailChange = (email) => {
    setFormEmail(email);
  };

  // An easy way to pass props to child component
  const propsForEmailField = {
    onEmailChange,
    setFormError,
  };

  return (
    <Grid item xs={12} sm={12} md={6}>
      <StyledCard raised>
        {/* Heading */}
        <CardContent>
          <Typography variant="h4" component="h2">
            Find Your Order
          </Typography>
        </CardContent>
        {/* Form */}
        <CardContent>
          <StyledForm onSubmit={submitHandler}>
            {/* Email Field */}
            <EmailField {...propsForEmailField} />
            {/* Submit Button */}
            <StyledButton
              type="submit"
              color="primary"
              variant="contained"
              disabled={formError}
            >
              Find
            </StyledButton>
          </StyledForm>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default FindOrderSection;
