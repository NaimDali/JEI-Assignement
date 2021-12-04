import { useState } from "react";
import Axios from "axios";
import Card from "./UI/Card";
import classes from "./UserInfos.module.css";

const UserInfos = ({ id }) => {
  const [user, setuser] = useState([]);
  const [address, setaddress] = useState({});
  const [company, setcompany] = useState({});
  const [geo, setgeo] = useState({});

  const getUser = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users/" + { id }.id)
      .then((response) => {
        setuser(response.data);
        setaddress(response.data.address);
        setcompany(response.data.company);
        setgeo(response.data.address.geo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.user}>
      <h2> User details: </h2>
      <Card>
        {getUser()}
        <ul>
          <li> id= {id}</li>
          <li> name= {user.name}</li>
          <li> username= {user.username}</li>
          <li> email= {user.email}</li>
          <li> address :</li>
          <ul>
            <li> street= {address.street} </li>
            <li> suite= {address.suite} </li>
            <li> city= {address.city} </li>
            <li> zipcode= {address.zipcode} </li>
            <li> Geo: </li>
            <ul>
              <li> lat= {geo.lat}</li>
              <li> lng= {geo.lng}</li>
            </ul>
          </ul>
          <li> phone= {user.phone} </li>
          <li> website= {user.website} </li>
          <li> Company: </li>
          <ul>
            <li> name= {company.name} </li>
            <li> catchPhrase= {company.catchPhrase} </li>
            <li> bs= {company.bs} </li>
          </ul>
        </ul>
      </Card>
    </div>
  );
};

export default UserInfos;
