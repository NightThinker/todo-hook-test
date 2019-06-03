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

  function handlerInputChange(event) {
    setTodo(event.target.value)
  }

  function handlerSubmit(event) {
    event.preventDefault()
    setTodoList([...todoList, todo])
  }
  
  return (
    <section>
      <h1>TODO</h1>
      <Form onSubmit={handlerSubmit}>
        <InputGroup>
          <Input value={todo} onChange={handlerInputChange} />
          <Button>Add</Button>
        </InputGroup>
      </Form>
      <ListGroup>
        {todoList.map((item, i) => {
          return (
          <ListGroupItem key={i}>
            {item}
            <div style={{ float: 'right'}}>
              <FaEdit className='icons' />
              <FaTrashAlt className='icons'/>
            </div>
          </ListGroupItem>
          );
        })}
      </ListGroup>
    </section>
  );
}

export default App;
