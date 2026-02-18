import { useState, useCallback } from 'react'
import './App.css'
import Header from './components/header/Header'
import TodoEditor from './components/todoEditor/TodoEditor'
import TodoList from './components/todoList/TodoList'
import { useRef } from 'react'
import { useReducer } from 'react'

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

function reducer(state, action){
  switch(action.type){
    case "CREATE":{
      return [...state, action.data];
    }
    case "UPDATE":{
      return state.map((todo) => 
        todo.id === action.data
          ? {...todo, isDone : !todo.isDone}
          : todo
      )
    }
    case "DELETE":{
      return state.filter((todo) => 
        todo.id !== action.data
      )
    }
  }
}

function App() {

  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {

    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current++,
        isDone : false,
        content,
        createdDate : new Date().getTime()
      }
    })

    // setTodos(
    //   [...todos, newTodo]
    // )
  }, []); //useCallback(메서드, 재생성 참조값 조건) : 함수 재생성 방지

  const onUpdate = useCallback((targetId) => {

    dispatch({
      type: "UPDATE",
      data: targetId
    })

    // setTodos(
    //   todos.map((todo) => 
    //     todo.id === targetId
    //       ? {...todo, isDone : !todo.isDone}
    //       : todo
    //   )
    // )
  }, []); //useCallback(메서드, 재생성 참조값 조건) : 함수 재생성 방지

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId
    })
  }, []) //useCallback(메서드, 재생성 참조값 조건) : 함수 재생성 방지

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
