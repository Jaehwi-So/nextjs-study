import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { useRef } from 'react'

const mockData = [
  {
    id : 0,
    isDone : true,
    content : "할일1",
    createdDate : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : "할일2",
    createdDate : new Date().getTime()
  },
  {
    id : 2,
    isDone : true,
    content : "할일3",
    createdDate : new Date().getTime()
  }
  
]
function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content,
      createdDate : new Date().getTime()
    }

    setTodos(
      [...todos, newTodo]
    )
  }

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => 
        todo.id === targetId
          ? {...todo, isDone : !todo.isDone}
          : todo
      )
    )
    // setTodos(
    //   todos.map((todo) => {
    //     if(todo.id === targetId){
    //       return{
    //         ...todo,
    //         isDone : !todo.isDone
    //       }
    //     }
    //     else{
    //       return todo
    //     }
    //   })
    // )
  }

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => 
        todo.id !== targetId
      )
    )
  }

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
