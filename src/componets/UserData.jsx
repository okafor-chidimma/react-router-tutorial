import React from "react";
import { useParams } from "react-router-dom";

const UserData = () => {
  //useParams hook is used to retrieve the value of the param passed as part of the dynamic route
  const { userId } = useParams();
  return <div>User Data {userId}</div>;
};

export default UserData;
