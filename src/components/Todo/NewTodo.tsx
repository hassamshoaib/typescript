import React from "react";

interface NewTodoPropsInterface {}

const NewTodo: React.FC<NewTodoPropsInterface> = props => {
  return (
    <div>
      <form>
        <label htmlFor="new-todo">Title</label>
        <input id="new-todo" placeholder="New todo" />
      </form>
      <button type="submit">Add</button>
    </div>
  );
};

export default NewTodo;
