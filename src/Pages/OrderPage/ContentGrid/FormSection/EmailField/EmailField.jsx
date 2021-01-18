import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const EmailField = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom style={{ marginTop: "3rem" }}>
        Enter your email:
      </Typography>
      <TextField
        variant="outlined"
        typ="email"
        label="Email"
        style={{ width: "100%" }}
      />
    </>
  );
};

export default EmailField;
