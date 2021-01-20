import styled from "styled-components";

const Button = styled.button`
  padding: 5px 20px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px 10px 10px 10px;
  outline: none;
  height: 50px;
  font-size: 1.3rem;
`;

export const OutlinedButton = styled(Button)`
  background: transparent;
  color: black;

  &:hover {
    background: black;
    color: white;
  }
`;
