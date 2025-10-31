import { useState } from "react";

function LoginPage() {
  const dataBase = [
    {
      email: `master@gmail.com`,
      password: "123",
      name: `Timothy`,
    },
    {
      email: `presley@gmail.com`,
      password: "222",
      name: `Presley`,
    },
    {
      email: `agatha@gmail.com`,
      password: "333",
      name: `Agatha`,
    },
  ];

  const [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function submitForm(e) {
    e.preventDefault();
    const user = dataBase.find(
      (user) => user.email === email.trim() && user.password === password
    );

    if (user) {
      console.log(`Welcome ${user.name}`);
      setMessage(`Welcome ${user.name}`);

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      console.log(`Not a user`);
      setMessage("Not a User");
    }
    setPassword("");
    setEmail("");
  }

  return (
    <>
      <form className="formed" action="" onSubmit={submitForm}>
        <h1>Login</h1>
        <div className="master">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder=" "
          />
          <label id="hove1" htmlFor="email">
            Email
          </label>{" "}
          <br />
          <br />
        </div>
        <div className="master">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder=" "
          />
          <label id="hove2" htmlFor="password">
            Password
          </label>{" "}
          <br />
          <br />
        </div>
        <div className="remember">
          <input type="checkbox" id="forget" />
          <label htmlFor="forget">Remember Me </label>
          <a id="link" href="#">
            Forget Password
          </a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <span>
            Don't have an account <a href="#">Register</a>
          </span>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </>
  );
}
export default LoginPage;
