import React from "react";
import PropTypes from "prop-types";

import { StyledImageComponent } from "./styles";

export class ImageComponent extends React.Component {
  shouldComponentUpdate = nextProps => {
    if (this.props.type !== nextProps.type) {
      return true;
    } else return false;
  };
  render() {
    return <StyledImageComponent type={this.props.type} />;
  }
}
ImageComponent.displayName = "ImageComponent";

export default ImageComponent;

ImageComponent.propTypes = {
  type: PropTypes.string.isRequired
};
