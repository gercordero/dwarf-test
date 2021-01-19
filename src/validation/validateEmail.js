import isEmpty from "./isEmpty";

const emailRegExp = /^[-!#$%&'*+\0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const validateEmail = (email) => {
  let message = "";

  if (!emailRegExp.test(email)) {
    message = "Email is invalid";
  }

  if (isEmpty(email)) {
    message = "Email field is required";
  }

  return {
    message,
    isValid: isEmpty(message),
  };
};

export default validateEmail;
