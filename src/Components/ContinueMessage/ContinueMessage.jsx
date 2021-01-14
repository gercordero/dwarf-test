import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";

const ContinueMessage = ({ heading, message }) => {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        {message}
      </Typography>
    </>
  );
};

export default ContinueMessage;
