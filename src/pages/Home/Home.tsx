import { SearchInput } from "../../components/SearchInput";
import { Content, Container, SearchSection, Title } from "../Home.styles";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title>What pokemon are you looking for?</Title>
          <SearchInput></SearchInput>
        </SearchSection>
      </Content>
    </Container>
  );
};
