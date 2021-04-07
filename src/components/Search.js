import React from "react";

function Search() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });
  const [query, setQuery] = React.useState("");

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name: ", event.target.name);
    console.log("value: ", event.target.value);
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  }
  return (
    <div>
      <p>{query}</p>
      <label>Query</label>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <br />
      <br />
      <h1>Login Form</h1>
      <input
        type="email"
        name="email"
        value={loginInfo.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
