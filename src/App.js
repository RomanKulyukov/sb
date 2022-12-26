import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${value}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [value]);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouse({ x: event.clientX, y: event.clientY });
    });
  });
  return (
    <div>
      <div>{value == "" ? "Тут будет что-то" : value}</div>
      <button
        onClick={() => {
          setValue("Users");
        }}
      >
        Пользователи
      </button>
      <button
        onClick={() => {
          setValue("Todos");
        }}
      >
        Todo
      </button>
      <button
        onClick={() => {
          setValue("Posts");
        }}
      >
        Посты
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(mouse, null, 2)}</pre>
    </div>
  );
}
export default App;
