import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  ${(props) => props.theme.breakpoints.down("md")} {
    margin-bottom: 15rem;
  }

  & > div {
    margin-right: 1rem;
  }

  & > div > span {
    text-transform: capitalize;
    font-weight: bold;
  }
`;
