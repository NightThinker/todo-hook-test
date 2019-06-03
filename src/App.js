import React, { useState } from 'react';

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

  function handlerInputChange(event) {
    setTodo(event.target.value)
  }
  
  return (
    <section>
      <h1>TODO</h1>
      <Form>
        <InputGroup>
          <Input value={todo} onChange={handlerInputChange} />
          <Button>Add</Button>
        </InputGroup>
      </Form>
      <ListGroup>
        {initialTodoList.map((item, i) => {
          return <ListGroupItem key={i}>{item}</ListGroupItem>;
        })}
      </ListGroup>
    </section>
  );
}

export default App;
