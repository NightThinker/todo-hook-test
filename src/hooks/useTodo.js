import { useState } from 'react'

const initialTodoList = [
  "Teach Intro to React Hooks",
  "Get coffee",
  "Fix all the bugs"
];

function useTodo() {
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
    const newTodoList = todoList
    setEditing(true)
    setTodo(newTodoList[Index])
    setTodoIndex(Index)
  }

  return {
    todo,
    todoList,
    editing,
    handlerInputChange,
    handlerSubmit,
    handlerRemove,
    handlerEdit
  }
}


export default useTodo