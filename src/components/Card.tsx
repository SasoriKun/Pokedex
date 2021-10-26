import React from "react";
import { ReactComponent as PokeballSVG } from "../assets/svg/pokeball.svg";
import {
  CardContainer,
  LeftCornerCircle,
  PokeContainer,
  CardContent,
} from "./Card.styles";

export interface CardProps {
  shadow?: string;
  bgColor?: string;
  color?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <CardContainer
      shadow={props.shadow}
      bgColor={props.bgColor}
      color={props.color}
    >
      <LeftCornerCircle />
      <PokeContainer>
        <PokeballSVG />
        <CardContent>{props.children}</CardContent>
      </PokeContainer>
    </CardContainer>
  );
};
