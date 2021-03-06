import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ReactComponent as PokeballSVG } from "../assets/svg/pokeball.svg";
import {
  CardContainer,
  LeftCornerCircle,
  PokeContainer,
  CardContent,
} from "./Card.styles";

export interface CardProps extends LinkProps {
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
      to={props.to}
    >
      <LeftCornerCircle />
      <PokeContainer>
        <PokeballSVG />
      </PokeContainer>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};
