import './TodoItem.css'

export default function TodoItem({id, isDone, createdDate, content, onUpdate, onDelete}){

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