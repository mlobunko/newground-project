import React from "react";
import { connect } from "react-redux";

import ShadowComponent from "shared/table/components/ShadowComponent";
import TableComponent from "shared/table/components/TableComponent";
import ImageComponent from "shared/table/components/ImageComponent";
import NameComponent from "shared/table/components/NameComponent";
import PlayersComponent from "shared/table/components/PlayersComponent";

export const Tables = ({ state }) => (
  <React.Fragment>
    {Object.keys(state).map(id => (
      <TableComponent
        key={id}
        warning={state[id]["warning"]}
        players={state[id]["players"]}
      >
        <NameComponent name={state[id]["name"]} />
        <ShadowComponent warning={state[id]["warning"]} />
        <ImageComponent type={state[id]["type"]} />
        <PlayersComponent
          maxPlayers={state[id]["maxPlayers"]}
          players={state[id]["players"]}
        />
      </TableComponent>
    ))}
  </React.Fragment>
);
Tables.displayName = "Tables";

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Tables);
