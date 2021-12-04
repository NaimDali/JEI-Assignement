import { useState } from "react";
import Axios from "axios";
import Card from "./UI/Card";
import classes from "./UserPosts.module.css";
import { Link } from "react-router-dom";

const UserPosts = ({ id }) => {
  const [Posts, setPosts] = useState([]);
  const [PostsFiltre, setPostsFiltre] = useState([]);

  const getPost = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        const filtrage = Posts.filter((post) => post.userId == id);
        const filtrageAvancee = filtrage.slice(0, 5);
        setPostsFiltre(filtrageAvancee);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(Posts);

  return (
    <div className={classes.userpost}>
      <h2> User Posts: </h2>
      <Card>
        <h3>Last 5 posts : </h3>
        {getPost()}
        {PostsFiltre.map((post) => (
          <div key={post.id}>
            <Card>
              <div> userID = {post.userId} </div>
              <div> id = {post.id}</div>
              <div> title= {post.title}</div>
              <div> body= {post.body}</div>
              <Link to={`/Posts/${post.id}`}>
                <h3> check post </h3>
              </Link>
            </Card>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default UserPosts;
