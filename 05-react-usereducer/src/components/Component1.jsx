import { useEffect, useReducer } from "react";

const Component1 = () => {
  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complate: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complate: false,
    },
  ];
  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complate: !todo.complate };
          }
          return todo;
        });
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplate = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complate}
              onChange={() => handleComplate(todo)}
            />
            <span>{todo.title}</span>
          </div>
        );
      })}
    </>
  );
};

export default Component1;
