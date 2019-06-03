import React from 'react';
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
import useTodo from './hooks/useTodo'



function App() {
  const { todo,
    todoList,
    editing,
    handlerInputChange,
    handlerSubmit,
    handlerRemove,
    handlerEdit } = useTodo()
 
  
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
