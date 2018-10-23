import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import { getImageFromType } from "../libImages";

const shadowAnim = keyframes`
  0%, 100% {
    box-shadow: 0 0 0.5rem 0 rgb(254, 74, 73);
  }
  50% {
    box-shadow: 0 0 2rem 1rem rgb(254, 74, 73);
  }
`;

export const StyledTable = styled.div`
  position: relative;
  width: 10rem;
  height: 12rem;
  text-align: center;
`;
StyledTable.displayName = "StyledTable";

export const StyledImageComponent = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  border-radius: 50%;
  background: ${props =>
    `url(${getImageFromType(props.type)}) no-repeat center center / contain`};
`;
StyledImageComponent.displayName = "StyledImageComponent";

StyledImageComponent.propTypes = {
  type: PropTypes.string.isRequired
};

export const StyledNameComponent = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  font-size: 1.1rem;
  font-weight: 500;
`;
StyledNameComponent.displayName = "StyledNameComponent";

export const StyledPlayersComponent = styled.div`
  margin-top: 0.5rem;
`;
StyledPlayersComponent.displayName = "StyledPlayersComponent";

export const StyledShadow = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  z-index: -1;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgb(254, 74, 73);
  animation: ${shadowAnim} 2s linear infinite;
`;
StyledShadow.displayName = "StyledShadow";
