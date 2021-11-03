import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";
import { Card } from "../../components/Card";
import {
  Content,
  Container,
  Header,
  Title,
  PokemonesList,
} from "./Pokedex.styles";

import { usePokemons } from "../../hooks/usePokemons";

export const Pokedex = () => {
  const pokemons = usePokemons();

  return (
    <Container>
      <Content>
        <div>
          <Header>
            <Link to="/">
              <IoIosArrowRoundBack />
            </Link>
            <IoIosMenu />
          </Header>
          <Title>Pokedex </Title>
        </div>
        <PokemonesList>
          <Card to="">Hola</Card>
          <Card to="">Hola</Card>
          <Card to="">Hola</Card>
          <Card to="">Hola</Card>
        </PokemonesList>
      </Content>
    </Container>
  );
};
