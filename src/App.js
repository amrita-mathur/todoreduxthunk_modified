import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTodos, fetchTodo } from "./actions/todoActions";
import TodoDetails from "./components/TodoDetails";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const [todoDetails, setTodoDetails] = useState(false);
  const [todoId, setTodoId] = useState("");
  const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    if (todosFromLocalStorage) {
      dispatch(listTodos(todosFromLocalStorage));
      return;
    }
    dispatch(listTodos());
  }, []);

  const handleDetails = (id) => {
    setTodoDetails(true);
    dispatch(fetchTodo(id));
    setTodoId(id);
  };
  return (
    <Container>
      {!todoDetails && (
        <>
          <h2 className="my-5">Redux Thunk Project</h2>

          {todos &&
            Object.values(todos).map((todo) => (
              <Row key={todo.id} className="my-3">
                <Col>
                {todo.id}. 
                  {todo.title}
                </Col>
                <Col>
                  <Button
                    className="btn-primary"
                    onClick={() => handleDetails(todo.id)}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
            ))}
        </>
      )}

      {todoDetails && <TodoDetails id={todoId} />}
    </Container>
  );
}

export default App;
