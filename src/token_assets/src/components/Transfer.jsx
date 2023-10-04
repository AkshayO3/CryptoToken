import React from "react";
import {token} from "../../../declarations/token";
import Principal from "@dfinity/principal";

function Transfer() {
  const [recipientID, setID] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const[feedback,setFeedback] = React.useState("");
  const[isHidden, setIsHidden] = React.useState(true);
  
  async function handleClick() {
    setIsHidden(true);
    setDisabled(true);
    const res=Principal.fromText(recipientID);
    const amount=Number(amount);
    const result=await token.transfer(res,amount);
    setFeedback(result);
    setIsHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={disabled} id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
