import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../actions/todoActions';

function TodoDetails({id}) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const [todo, setTodo]= useState({});
  const dispatch = useDispatch();
 

  useEffect(()=> {
     setTodo(todos.find(todo=> todo.id === id))
  }, [])

  useEffect(()=> {
    console.log(todo)
  }, [todo.title])

  const handleEdit = (id) => {
      
      todos.splice(id-1, 1, todo)
      dispatch(listTodos(todos))
      alert("Todo edited successfully")
      localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value})
  }

  console.log("Todo Details", todo)
  return (
    
    <Form className='container m-5' style={{"width": "50%"}}>
      <Button variant="primary" className='mb-5' onClick={()=> window.location.reload('/')}>
        Show List
      </Button>
      <Form.Group className="mb-3">
        <Form.Label className='mb-3'>ToDo ID </Form.Label>
        <Form.Control type="text" value={todo.id} name='id' disabled/>
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" value={todo.userId} name='userId' onChange={(e)=> handleChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={todo.title} name='title' onChange={(e)=> handleChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Check type="checkbox" label="Completed" checked=
        {todo.completed} id='completed' name='completed'  onChange={(e)=> !e.target.checked}/>
        
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleEdit(todo.id)}>
        Save
      </Button>
    </Form>
  );
}



export default TodoDetails