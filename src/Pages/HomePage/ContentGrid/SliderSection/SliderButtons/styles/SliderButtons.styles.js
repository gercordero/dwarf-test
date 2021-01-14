import styled from "styled-components";

export const StyledButton = styled.button`
  &::before {
    content: "";
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
