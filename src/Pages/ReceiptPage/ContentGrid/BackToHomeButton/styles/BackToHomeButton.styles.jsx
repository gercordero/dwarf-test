import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const StyledGrid = styled(Grid)`
  height: 10%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
  padding: 1rem;
`;
