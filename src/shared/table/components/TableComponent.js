import React from "react";
import { StyledTable } from "./styles";

export class TableComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.players !== this.props.players ||
      nextProps.warning !== this.props.warning
    ) {
      return true;
    } else return false;
  }
  render() {
    return <StyledTable children={this.props.children} />;
  }
}

export default TableComponent;
