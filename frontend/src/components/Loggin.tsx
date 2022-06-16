import { Link } from "react-router-dom";
import "./loggIn.css";
export function Loggin() {
  let Admin = {
    username: "admin",
    password: "admin",
  };

  let loggedin = `/AllPosts/`;

  return (
    <>
      <h1>Välkommen</h1>
      <section className="loggIn">
        <label htmlFor="username">Användarnamn</label>
        <br />
        <input type="text" name="username" />
        <br />

        <label htmlFor="Password">Lösenord</label>
        <br />
        <input type="text" name="Password" />
        <br />

        <Link to={loggedin}>
          <button>Logga in</button>
        </Link>
      </section>
    </>
  );
}
