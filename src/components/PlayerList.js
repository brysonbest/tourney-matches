import React from "react";
import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { addWinsToPlayers, preparePlayerData } from "../helpers/playerHelpers";

function PlayerList(props) {
  
  const playerDataArray = preparePlayerData(playerData);
  // console.log('player!', playerDataArray);
  // eslint-disable-next-line
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  const onePlayer = parsedPlayerData[0];
  // console.log(parsedPlayerData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player firstName={onePlayer.firstName} lastName={onePlayer.lastName} gamerTag={onePlayer.gamerTag} wins={onePlayer.wins} />
    </section>
  );
}

export default PlayerList;