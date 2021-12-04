import react from "react";
import "./App.css";
import Homepage from "./Componnents/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetails from "./Componnents/UserDetails";
import UsersList from "./Componnents/UsersList";
import PostDetails from "./Componnents/PostDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />;
        </Route>
        <Route path="/users/:id">
          <UserDetails />;
        </Route>
        <Route path="/users">
          <UsersList />;
        </Route>
        <Route path="/Posts/:id">
          <PostDetails />;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
