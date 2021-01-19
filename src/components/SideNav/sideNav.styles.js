import styled from "styled-components";

export const Section = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  height: 64px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Lobster", cursive;

  h1 {
    font-size: 1.5rem;
  }
`;

export const GlassyEffect2 = styled.div`
  &::before,
  &::after {
    z-index: -1;
    position: fixed;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: inset 0px 0px 20px 20px white;
    opacity: 0.3;
  }

  &::before {
    content: "";
    top: 10%;
    left: 10%;
  }

  &::after {
    content: "";
    top: 80%;
    left: 0;
  }
`;

export const MenuIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 6px 15px;
`;
