import react from "react";
import { useParams } from "react-router-dom";
import UserInfos from "./UserInfos";
import UserPosts from "./UserPosts";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <react.Fragment>
      <UserInfos id={id} />
      <UserPosts id={id} />
    </react.Fragment>
  );
};

export default UserDetails;
