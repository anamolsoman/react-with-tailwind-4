import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col text-4xl gap-2 m-2">
      {users.map((user) => {
        return <Link to={"/users/" + user}>{user}</Link>;
      })}

      <Outlet />
    </div>
  );
}

export default Users;
