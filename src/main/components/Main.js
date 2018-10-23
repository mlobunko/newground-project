import React from "react";
import { connect } from "react-redux";

import Tables from "./Tables";

import { startChangeRandomDataTable } from "../actions";
import ErrorBoundary from "./ErrorBoundary";
import { StyledMain, StyledHeader, StyledContent } from "./styles";

export class Main extends React.Component {
  componentDidMount = () => {
    this.props.startChangeRandomDataTable();
  };
  render() {
    return (
      <ErrorBoundary>
        <StyledMain>
          <StyledHeader>Casino Monitoring</StyledHeader>
          <StyledContent>
            <Tables />
          </StyledContent>
        </StyledMain>
      </ErrorBoundary>
    );
  }
}

Main.displayName = "Main";

const mapDispatchToProps = {
  startChangeRandomDataTable
};

export default connect(
  undefined,
  mapDispatchToProps
)(Main);
