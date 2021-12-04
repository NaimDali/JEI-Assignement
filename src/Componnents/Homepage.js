import react from "react";
import networkpic from "../assets/network.jpg";
import Description from "./Description";
import classes from "./Homepage.module.css";
import UsersList from "./UsersList";

const Homepage = (props) => {
  return (
    <react.Fragment>
      <div className={classes.image}>
        <img src={networkpic} />
      </div>
      <Description />
      <UsersList />
    </react.Fragment>
  );
};

export default Homepage;
