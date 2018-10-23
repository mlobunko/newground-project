import React from "react";

import { StyledShadow } from "./styles";

export class ShadowComponent extends React.Component {
  shouldComponentUpdate = nextProps => {
    if (nextProps.warning !== this.props.warning) {
      return true;
    } else return false;
  };
  render() {
    return <React.Fragment>{this.props.warning && <StyledShadow />}</React.Fragment>;
  }
}

export default ShadowComponent;
