import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";

export const ImgContainer = styled(Grid)`
  width: 5rem;
  height: 5rem;
`;

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: scale-down;
`;

export const TextContainer = styled(Grid)`
  display: flex;
  align-items: center;
`;
