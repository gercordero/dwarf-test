import styled from "styled-components";
// Material UI
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const StyledCard = styled(Card)`
  height: 100%;
  position: relative;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
  margin-top: 1rem;
  margin-left: auto;
  padding: 0.8rem;
  width: 25%;
`;
