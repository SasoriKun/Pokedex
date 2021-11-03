import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardProps } from "./Card";

export const LeftCornerCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: -20px;
`;

export const PokeContainer = styled.div`
  position: absolute;
  right: -20px;
  top: -35px;
  svg {
    width: 120px;
    height: 150px;
  }
`;

export const CardContent = styled.div`
  position: relative;
`;

export const CardContainer = styled(Link)<CardProps>`
  background-color: ${(props) => props.bgColor};
  box-shadow: rgb(0 0 0 / 48%) 0px 2px 1px -1px,
    rgb(0 0 0 / 35%) 0px 1px 1px 0px, rgb(0 0 0 / 46%) 0px 1px 3px 0px;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  min-height: 100px;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 25px;
  ${LeftCornerCircle} {
    background-color: ${(props) => props.shadow};
  }

  ${PokeContainer} {
    svg {
      path {
        fill: ${(props) => props.shadow};
      }
    }
  }
`;
