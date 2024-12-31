import { useState } from "react";

export default function Forms() {
  let [formData, setFormDAta] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  //handle input change for all input
  const handleInputChange = (event) => {
    setFormDAta((currData) => {
      let data = { ...currData, [event.target.name]: event.target.value };
      return data;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDAta({ fullName: "", username: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName" style={{ marginRight: "5px" }}>
        Full Name
      </label>

      <input
        placeholder="Enter your name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <label htmlFor="username" style={{ marginRight: "5px" }}>
        Username
      </label>
      <input
        placeholder="Enter your name"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br />
      <label htmlFor="password" style={{ marginRight: "5px" }}>
        Password
      </label>

      <input
        placeholder="Enter your password"
        type="text"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <button>submit</button>
    </form>
  );
}
