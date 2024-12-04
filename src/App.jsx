import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [usereEmail, setUserEmail] = useState("");

  const onChangeHandlerName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeHandlerEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (userName === "") {
      alert("Please Enter Your Name");
      return;
    }
    if (usereEmail === "") {
      alert("Please Enter Your Email");
      return;
    }

    let user = {
      userName: userName,
      usereEmail: usereEmail,
    };

    console.log("user", user);
  };

  return (
    <>
      <input
        type="text"
        style={{border: `2px solid ${userName.length <= 8 ? "red" : "green"}`}}
        placeholder="Enter your name"
        onChange={onChangeHandlerName}

      />
      <input
        type="text"
        placeholder="Enter your email"
        onChange={onChangeHandlerEmail}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default App;
