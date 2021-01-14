import React from "react";
// Components
import { ErrorMessage, Loader } from "../../../Components";

const Display = ({ status, error, dish }) => {
  switch (status) {
    case "LOADING":
      return <Loader />;

    case "SUCCESS":
      return <ContentGrid dish={dish} />;

    case "ERROR":
      return <ErrorMessage message={error} />;

    default:
      return "";
  }
};

export default Display;