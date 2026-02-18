import './TodoItem.css'
import { memo } from 'react'

function TodoItem({id, isDone, createdDate, content, onUpdate, onDelete}){

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDelete = () => {
        onDelete(id);
    }
    return(
        <div className="TodoItem">
            <input type="checkbox" onChange={onChangeCheckbox} checked={isDone}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default memo(TodoItem); // 메서드(onUpdate()와 onDelete())의 참조값이 바뀌기 때문에 Props가 바뀌는 것으로 인지함