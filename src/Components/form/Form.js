import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Form.css";

function Form() {
  const [value, setValue] = useState("");
const[answer,SetAnswer] = useState("")
  useEffect(() => {
  
  }, [])
  
const getAnswer=()=>{
  fetch(`https://demo.broadn.ai/newpickaxe/getformnew?formid=469JEWJX3MGXRQE4TOQL&uniqueid=0000`).then((res)=>{
    res.json().then(response=>{
      console.log("response>>>>>>>>>>",response);
    }).catch(e=>{
      console.log("eroor",e.message);
    })
    
       }).catch((error)=>{
        console.log(error.message)
       })
}

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
            <input placeholder="How can I help?" onChange={(e)=>setValue(e.target.value)}/>
            <button className="Form_button" onClick={()=>(getAnswer())}>Ask</button>
          </div>
          {/* <textarea className="Form_answer" value={value} disabled></textarea> */}
         {answer? <div className="Form_answer"></div>:""}
        </div>

      </div>
      </div>
  );
}

export default Form;
