import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 2rem;
  display: flex;

  & > div {
    margin-right: 1rem;
  }

  & > div > span {
    text-transform: capitalize;
    font-weight: bold;
  }
`;
