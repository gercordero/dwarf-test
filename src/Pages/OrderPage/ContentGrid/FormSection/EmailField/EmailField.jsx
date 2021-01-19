import React, { useState } from "react";
// Validation
import validateEmail from "../../../../../validation/validateEmail";
// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

const EmailField = ({ setFormError, onEmailChange }) => {
  // Error state
  const [error, setError] = useState("");

  // Error handler
  const handleError = (value) => {
    const { message, isValid } = validateEmail(value);
    if (isValid) {
      setError("");
      setFormError(false);
    } else {
      setError(message);
      setFormError(true);
    }
  };

  // Handle on change event
  const handleChange = (e) => {
    handleError(e.target.value);
    onEmailChange(e.target.value);
  };

  // Handle errors on blur
  const handleBlur = (e) => {
    handleError(e.target.value);
  };

  // Handle errors on focus
  const handleFocus = (e) => {
    if (e.target.value.length > 0) {
      handleError(e.target.value);
    }
  };
  return (
    <>
      <Typography variant="h5" gutterBottom style={{ marginTop: "3rem" }}>
        Enter your email:
      </Typography>
      <TextField
        color="secondary"
        variant="outlined"
        typ="email"
        label="Email"
        aria-describedby="email-helper-text"
        style={{ width: "100%" }}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        error={error.length > 0}
      />
      {error.length > 0 && (
        <FormHelperText error id="email-helper-text">
          {error}
        </FormHelperText>
      )}
    </>
  );
};

export default EmailField;
