import React from "react";
import PropTypes from "prop-types";

import { StyledPlayersComponent } from "./styles";

export class PlayersComponent extends React.Component {
  shouldComponentUpdate = nextProps => {
    if (nextProps.players !== this.props.players) {
      return true;
    } else return false;
  };
  render() {
    return (
      <StyledPlayersComponent>{`${this.props.players}/${
        this.props.maxPlayers
      }`}</StyledPlayersComponent>
    );
  }
}
PlayersComponent.displayName = "PlayersComponent";

export default PlayersComponent;

PlayersComponent.propTypes = {
  maxPlayers: PropTypes.number.isRequired,
  players: PropTypes.number.isRequired
};
