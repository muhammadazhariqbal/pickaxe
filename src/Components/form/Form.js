import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [value, setValue] = useState(
    "RS is said to be consistent if and only if  its structure and style are such that any changes to the requirements can be made easily while retaining the style and structureygqydyq  fduyq fdyqf dyq fdqyfdyuqfdqfdqfduqfdyfquoyfdqydfowyfy odfwyfdywqfdywd wydf ywdf wyfd yd  ydfwuoydfoyw   wdowdfwydfywfodwuyfdowdfowfyd owdywfdywfduwfydwdfwfdywyd dwdywfdwydfywdwqfdwdlld lyo yvvcywc wydydggoudywvyuvcyuuydgwy d   ydywdyqwdfy"
  );
  return (
    <div className="form">
      <div className="form_main">
        <div className="form_pic">
          <img src={require("../../Icons/chatBot.png")} alt="chatBot" />
        </div>

        <div className="form_content">
          <p>chatBot</p>
          <h1 className="form_h1">Pickaxe FAQ Receptionist</h1>
          <h5>Ask me anything about Pickaxe and the new beta!</h5>
          <div>
            <input placeholder="How can I help?" />
            <button className="Form_button">Ask</button>
          </div>
          <textarea className="Form_answer" value={value} disabled></textarea>
        </div>

      </div>
      </div>
  );
}

export default Form;
