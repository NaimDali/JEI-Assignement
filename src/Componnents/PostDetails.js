import { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Card from "./UI/Card";
import classes from "./PostDetails.module.css";
import Button from "./UI/Button";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setpost] = useState([]);
  const [confirmdeleted, setconfirmdeleted] = useState(false);

  const getPost = () => {
    Axios.get("https://jsonplaceholder.typicode.com/Posts/" + { id }.id)
      .then((response) => {
        setpost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const confirmdeleteHandler = () => {
    setconfirmdeleted(true);
  };
  const DeletefunctionHandler = () => {
    console.log("post deleted");
  };
  const ModifyfunctionHandler = () => {
    console.log("post modified");
  };

  return (
    <div className={classes.postDetails}>
      <h2> Post Details: </h2>
      <Card>
        {getPost()}
        <div key={post.id}>
          <div> userID = {post.userId} </div>
          <div> id = {post.id}</div>
          <div> title= {post.title}</div>
          <div> body= {post.body}</div>
        </div>
        <Button onClick={DeletefunctionHandler}> Delete</Button>
        <Button onClick={ModifyfunctionHandler}> Modify</Button>
      </Card>
    </div>
  );
};

export default PostDetails;
