import React from "react";

interface todoPropTypes {
  todos: { key: string; title: string }[];
}

const List: React.FC<todoPropTypes> = props => {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
