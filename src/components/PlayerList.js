import React from "react";
import Player from "./Player";
import { addWinsToPlayers, preparePlayerData } from "../helpers/playerHelpers";

function PlayerList(props) {
  
  const players = props.parsedPlayerData.map((player) => {
    return(
      <Player firstName={player.firstName} lastName={player.lastName} gamerTag={player.gamerTag} wins={player.wins} key={player.gamerTag} />
    )
  })

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;