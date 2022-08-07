import React from "react";
import "./App.css";
import List from "./components/Todo/List";
import NewTodo from "./components/Todo/NewTodo";

const App: React.FC = () => {
  const todos = [
    { key: "1", title: "Wake up early in the morning" },
    { key: "2", title: "GO for a morning walk" }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <NewTodo />
        <List todos={todos} />
      </header>
    </div>
  );
};

export default App;
