const Todo = ({ list, deleteHandler, completed }) => {
  return (
    <div>
      <div className={`todo ${list.completed && "completed"}`}>
        <li>{list.value}</li>
        <button className="tick" onClick={() => completed(list.id)}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash" onClick={() => deleteHandler(list.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
