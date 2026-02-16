import { useState } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

export default function TodoList({ todos, onUpdate, onDelete }){

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const filterTodos = () => {
        if(search === ""){
            return todos;
        }

        // () => (JSX) : 암시적 Return 문법
        return todos.filter((todo) => (
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        ));

        // return todos.filter((todo) => {
        //     return todo.content
        //         .toLowerCase()
        //         .includes(search.toLowerCase())
        // });
    }

    return(
        <div className="TodoList">
            <h4>TODOS</h4>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder='검색어 입력'
            ></input>
            <div className="todos_wrapper">
                {
                /* ()를 쓰면 암시적 return,
                // React는 내부적으로 리스트의 아이템을 식별하기 위해 key를 지정해야 한다. */
                }
                {filterTodos().map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}></TodoItem>  
                ))} 
            </div>
        </div>
    )
}