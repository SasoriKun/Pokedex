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
  width: 100%;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const SearchSection = styled.section`
  background-color: white;
  border-radius: 12px;
  display: grid;
  grid-gap: 40px;
  padding: 32px;
`;

export const Title = styled.h1`
  font-size: 30px;
  padding-top: 200px;
  color: #595959;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
