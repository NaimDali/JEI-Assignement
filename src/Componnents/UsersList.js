import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import classes from "./UsersList.module.css";
import Card from "../Componnents/UI/Card";

const UsersList = () => {
  const [user, setuser] = useState([]);

  const getUser = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setuser(response.data);
    });
  };

  return (
    <section className={classes.users}>
      <Card>
        <h2> All Users !!</h2>

        {getUser()}
        {user.map((user) => (
          <div key={user.id}>
            username:= {user.username}
            <Link to={`/Users/${user.id}`}>
              <h3>check profile of {user.name}</h3>
            </Link>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default UsersList;
