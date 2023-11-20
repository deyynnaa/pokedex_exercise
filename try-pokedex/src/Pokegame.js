import React from "react";

const Pokegame = ({
  onClick,
  isLeftWinner,
  totalExperienceLeft,
  totalExperienceRight,
}) => {
  return (
    <div className="movebutton">
      <center>
        <button onClick={onClick} className="button">
          Fight
        </button>
        <div className="winner-container winnertext1">
          {isLeftWinner && (
            <h1 className="wintext">
              <h2>Winner: Player 1</h2>
              <div>
                <h2>Total Experience: {totalExperienceLeft}</h2>
              </div>
            </h1>
          )}
        </div>
        <div className="winner-container winnertext1">
          {!isLeftWinner && (
            <h1 className="wintext">
              <h2> Winner: Player 2</h2>
              <div>
                <h2>Total Experience: {totalExperienceRight}</h2>
              </div>
            </h1>
          )}
        </div>
      </center>
      <div className="container winnertext">
        <div className="playerContainer1">
          <div className="h1text">
            <h2>
              <div className="test">Player 1</div>
              <div className="test2">
                <h3>Total Experience = {totalExperienceLeft}</h3>
              </div>
            </h2>
          </div>
        </div>
        <div className="playerContainer2">
          <div className="h1text">
            <h2>
              <div className="test">Player 2</div>
              <div className="test2">
                <h3>Total Experience = {totalExperienceRight}</h3>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokegame;
