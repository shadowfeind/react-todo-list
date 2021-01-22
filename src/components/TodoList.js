import React from "react";
import Todo from "./Todo";

const TodoList = ({ lists, setLists }) => {
  const deleteHandler = (id) => {
    const newLists = lists.filter((list) => list.id !== id);
    setLists(newLists);
  };

  const completed = (id) => {
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          return { ...list, completed: !list.completed };
        }
        return list;
      })
    );
  };
  return (
    <div className="todolist-container">
      <ul className="todo-list">
        {lists &&
          lists.map((list) => (
            <Todo
              list={list}
              deleteHandler={deleteHandler}
              completed={completed}
              key={list.id}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
