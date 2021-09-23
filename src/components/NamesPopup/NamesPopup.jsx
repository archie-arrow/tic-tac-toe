import React from "react";

export default function NamesPopup({ handlePlayerNames, handleShowContent }) {
  return (
    <form className="names-popup">
      <h2 className="names-popup__title">Enter player names</h2>
      <div className="names-popup__players">
        <label className="names-popup__label">
          Player 1:
          <input
            onChange={handlePlayerNames}
            name="player1"
            type="text"
            className="names-popup__input"
          />
        </label>
        <label className="names-popup__label">
          Player 2:
          <input
            onChange={handlePlayerNames}
            name="player2"
            type="text"
            className="names-popup__input"
          />
        </label>
      </div>
      <button onClick={handleShowContent} className="names-popup__btn">
        Play
      </button>
    </form>
  );
}
