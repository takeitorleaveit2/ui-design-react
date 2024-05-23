import React, { useState } from "react";
import { fetchData } from "../utils/fetch";
import { jsx } from "react/jsx-runtime";

const resource = fetchData("https://jsonplaceholder.typicode.com/todos");

const MyComponent: React.FC = () => {
  let [todo, setTodo] = useState(resource.read());
  return <div>{JSON.stringify(todo)}</div>;
};

export default MyComponent;
