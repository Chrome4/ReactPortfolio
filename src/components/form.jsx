import { useState } from "react";
import "./style.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleFormSubmit = e => {
    alert(`Hello ${firstName} 'Thanks for reaching out!`);
  };

  return (
    <div className="container text-center">
      <h1>Contact</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input name="firstName" type="text" placeholder="First Name" />
        <input name="lastName" type="text" placeholder="Email" />
        <input name="message" type="text" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
