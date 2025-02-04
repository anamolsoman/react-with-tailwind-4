import React from "react";
import { useParams } from "react-router";

function User() {
  const params = useParams();
  console.log(params);
  return <div className="text-4xl m-2">User {params.id}</div>;
}

export default User;
