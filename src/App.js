import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './app.css'

import 'bootstrap/dist/css/bootstrap.css';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Input,
  InputGroup
} from "reactstrap";

const initialTodoList = [
  "Teach Intro to React Hooks",
  "Get coffee",
  "Fix all the bugs"
];

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState(initialTodoList)
  const [editing, setEditing] = useState(false)
  const [todoIndex, setTodoIndex] = useState(null)

  function handlerInputChange(event) {
    setTodo(event.target.value)
  }

  function handlerSubmit(event) {
    event.preventDefault()
    if(editing) {
      const newTodoList = todoList
      newTodoList[todoIndex] = todo
      setTodoList(newTodoList)
      setTodo('')
      setEditing(false)
    } else {
      setTodoList([...todoList, todo])
    }
  }

  function handlerRemove(todoIndex) {
    const newTodoList = todoList.filter((item, i) => i !== todoIndex)
    setTodoList(newTodoList)
  }

  function handlerEdit(Index) {
    setEditing(true)
    const newTodoList = todoList
    setTodo(newTodoList[Index])
    setTodoIndex(Index)
  }
  
  return (
    <section>
      <h1>TODO</h1>
      <Form onSubmit={handlerSubmit}>
        <InputGroup>
          <Input value={todo} onChange={handlerInputChange} />
          <Button>{editing ? 'Edit' : 'Add'}</Button>
        </InputGroup>
      </Form>
      <ListGroup>
        {todoList.map((item, i) => {
          return (
          <ListGroupItem key={i}>
            {item}
            <div style={{ float: 'right'}}>
              <FaEdit className='icons'  onClick={() => handlerEdit(i)} />
              <FaTrashAlt className='icons' onClick={() => handlerRemove(i)}/>
            </div>
          </ListGroupItem>
          );
        })}
      </ListGroup>
    </section>
  );
}

export default App;
