import styled from "styled-components";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 4rem;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  margin-top: 3rem;
  font-weight: bold;
  padding: 1rem;
  width: 10rem;
  margin-left: auto;
`;
