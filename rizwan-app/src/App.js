import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {

  const usersList = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
  ];

  var [count, setCount] = useState(0);
  const increment = () => {
    setCount(count = count + 1)
  }

  const [users, setUser] = useState(usersList);

  return (
    <>
      <div
        style={{
          color: count > 3 && count < 5 ? "red" : count > 5 ? "green" : "black",
          backgroundColor: "rgb(209, 206, 206)",
          width: "50%",
          margin: "1rem auto",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h1>Count {count}</h1>
        <button onClick={increment}>Click Me</button>

        <h2>List of Users</h2>
        <ul>
          {users.map((user)=> (
            <li>
              <p>User Id: {user.id}</p>
              <p>User Name: {user.name}</p>
              <p>User Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
