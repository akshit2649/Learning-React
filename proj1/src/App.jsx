import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [data, setData] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setData((prev) => [...prev, { name: uName, age: uAge }]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={data} />
    </>
  );
}

export default App;
