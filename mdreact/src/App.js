import React, { useRef, useState } from "react";
import UserList from "./study/UserList";
import CreateUser from "./study/CreateUser";

export default function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  const nextId = useRef(4);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () => {
    console.log(inputs)
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}
