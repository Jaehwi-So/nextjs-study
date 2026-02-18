import { useState, useMemo } from 'react'
import TodoItem from '../todoItem/TodoItem'
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


    const getAnalyzedTodoData = () => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return{
            totalCount,
            doneCount,
            notDoneCount,
        };
    }

    // TODO 업데이트가 되지 않으면 리랜더링 때 실행될 필요가 없음 
    // const {totalCount, doneCount, notDoneCount} = getAnalyzedTodoData();
    const {totalCount, doneCount, notDoneCount} = useMemo(getAnalyzedTodoData, [todos]); //useMemo()를 이용하여 todos의 변경시에만 실행되도록 설정


    return(
        <div className="TodoList">
            <h3>TODOS</h3>
            <div>전체 TODO : {totalCount}</div>
            <div>완료 TODO : {doneCount}</div>
            <div>미완료 TODO : {notDoneCount}</div>
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