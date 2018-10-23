import React from "react";
import PropTypes from "prop-types";

import { StyledNameComponent } from "./styles";

export class NameComponent extends React.Component {
  shouldComponentUpdate = nextProps => {
    if (nextProps.name !== this.props.name) {
      return true;
    } else return false;
  };
  render() {
    return <StyledNameComponent>{this.props.name}</StyledNameComponent>;
  }
}
NameComponent.displayName = "NameComponent";

export default NameComponent;

NameComponent.propTypes = {
  name: PropTypes.string.isRequired
};
