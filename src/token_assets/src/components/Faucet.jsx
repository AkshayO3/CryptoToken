import React from "react";
import {token} from "../../../declarations/token";

function Faucet() {
    const[disabled, setDisabled] = React.useState(false);
    const[buttonText, setButtonText] = React.useState("Gimme gimme");

  async function handleClick(event) {
      setDisabled(true);
      const result = await token.payOut();
      setButtonText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 20 DAKS coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={setDisabled}>
            {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
