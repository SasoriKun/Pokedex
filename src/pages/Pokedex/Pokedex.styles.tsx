import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #f5f5db;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  height: 100vh;
  width: 100%;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 56px 0;
  svg {
    transform: scale(2);
    cursor: pointer;

    path {
      fill: #404040;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  color: #6e6e6e;
`;

export const PokemonesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
