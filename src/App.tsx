import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Reaalyyy sure?",
  "Masasi gamau",
  "Jahat banget",
  "EEK",
  "You're breaking my heart",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="toothless"
            src="https://media1.tenor.com/m/mICtSAVY7Y4AAAAC/autism-creature-yippee-creature.gif"
          />
          <div className="text">YIPEEE!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/2l4-h42qnmcAAAAi/toothless-dancing-toothless.gif"
          />

          <div>Will you be my valentine</div>
          <div>
            <button
              className="YesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
