import { SearchInput } from "../../components/SearchInput";
import { HOME_MENU } from "../../constants";
import { Content, Container, SearchSection, Title, Grid } from "../Home.styles";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title>What pokemon are you looking for?</Title>
          <SearchInput />
          <Grid>
            {HOME_MENU.map((menuOption) => (
              <Card key={menuOption.text} {...menuOption}>
                {menuOption.text}
              </Card>
            ))}
          </Grid>
        </SearchSection>
      </Content>
    </Container>
  );
};
