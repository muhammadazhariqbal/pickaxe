
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Form.css";

function Form() {

  const [renderFormData, setRenderFormData] = useState([]);
  useEffect(() => {
    // Make a request for a form data with an ID
    const uid = Math.random().toString(36).substring(2, 12);
    axios
      .get(
        `https://demo.broadn.ai/newpickaxe/getformnew?formid=469JEWJX3MGXRQE4TOQL&uniqueid=${uid}`
      )
      .then(function (response) {
        // handle success
        setRenderFormData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const referer = document.referrer;
    const uid = Math.random().toString(36).substring(2, 12);
    // You can now use formData to send the form data to a server
    // using an HTTP request, such as with fetch
    fetch(
      `https://demo.broadn.ai/newpickaxe/submitaform?referrer=${referer}&agent=${window.navigator.userAgent}&uniqueid=${uid}`,
      {
        method: "POST",
        body: formData,
      }
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
      
  }

  return renderFormData.form ? (
    <div className="form" key="1">
      <div className="form_main">
        <div className="form_pic">
          <img src={require("../../Icons/chatBot.png")} alt="chatBot" />
        </div>

        <div className="form_content">
          <p>chatBot</p>
          <h1 className="form_h1">{renderFormData.form.title}</h1>
          <h5>{renderFormData.form.description}</h5>
          <div>
            {renderFormData.form.questions.map((el) => (
              <form ref={formRef} onSubmit={handleSubmit} key={el.id}>
                <label htmlFor={el.id}></label>
                <input type="text" name={el.id} placeholder={el.main} />

                <button className="Form_button" type="submit">
                  Ask
                </button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Form;
