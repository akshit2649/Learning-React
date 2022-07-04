import React from "react";
import Card from "../UI/Card";

const UserList = ({ users }) => {
  return (
    <Card>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name} ({user.age} Years)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
