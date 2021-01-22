import { useEffect } from "react";

const Form = ({ input, setInput, setLists }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setLists((prev) => {
      return [
        ...prev,
        {
          id: Math.random() * (8.8).toFixed(8),
          value: input,
          completed: false,
        },
      ];
    });
    setInput("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
