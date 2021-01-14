import React from "react";
// Components
import { ErrorMessage, Loader } from "../";

const Display = ({ status, error, render }) => {
  switch (status) {
    case "LOADING":
      return <Loader />;

    case "SUCCESS":
      return render();

    case "ERROR":
      return <ErrorMessage message={error} />;

    default:
      return "";
  }
};

export default Display;
