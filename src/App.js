import React, { useState } from "react";
import "./App.css";

function App() {
  const PLAYERS = [
    "Ali",
    "Namık",
    "Eda",
    "Ebru",
    "Suzan",
    "Samet",
    "Engin",
    "Halit",
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [remainingPlayers, setRemainingPlayers] = useState(players);
  const [currentTeam, setCurrentTeam] = useState("team1");

  const handlePlayerClick = (player) => {
    setRemainingPlayers(remainingPlayers.filter((p) => p !== player));

    if (currentTeam === "team1") {
      setTeam1([...team1, player]);
    } else {
      setTeam2([...team2, player]);
    }
  };
  const handleShuffle = () => {
    const allplayers = [...team1, ...team2, ...remainingPlayers];
    const shuffledPlayers = allplayers.sort(() => Math.random() - 0.5);
    setRemainingPlayers(shuffledPlayers);
    setTeam1([]);
    setTeam2([]);
  };

  const handleReset = () => {
    setRemainingPlayers(players);
    setTeam1([]);
    setTeam2([]);
  };

  const toggleTeam = () => {
    setCurrentTeam((prevTeam) => (prevTeam === "team1" ? "team2" : "team1"));
  };
  return (
    <div>
      <div>
        <h3>Oyuncular</h3>
        {remainingPlayers.map((player) => (
          <button key={player} onClick={() => handlePlayerClick(player)}>
            {player}
          </button>
        ))}

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={toggleTeam}>
            {currentTeam === "team1"
              ? "Takım 1 için seçim yapılıyor"
              : "Takım 2 için seçim yapılıyor"}
          </button>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={handleShuffle}>Karıştır</button>
          <button onClick={handleReset}>Sıfırla</button>
        </div>
        <div>
          <h3>Takım 1</h3>
          <ul>
            {team1.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
          <h3>Takım 2</h3>
          <ul>
            {team2.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
