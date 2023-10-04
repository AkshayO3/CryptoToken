import React from "react";
import {Principal} from "@dfinity/principal";
import {token} from "../../../declarations/token";

function Balance() {
  const [inputValue, setInputValue] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const[cryptoSymbol,setSymbol] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);
  async function handleClick() {
    console.log("Balance Button Clicked");
    const principal = Principal.fromText(inputValue);
    const balance = await token.balanceOf(principal);
    setBalance(balance.toLocaleString());
    setSymbol(await token.getSymbol());
    setIsHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balance} {cryptoSymbol}.</p>
    </div>
  );
}

export default Balance;
