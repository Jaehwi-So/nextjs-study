export default function Controller({count, setCount}){

    const onClick = () => {
        console.log("Click")
    }

    const onClickButton = (value) => {
        setCount(count + value) 
    }

    return (
        <div>

            {/* 함수 참조를 그대로 넘기므로 클릭 시 React가 호출 */}
            <button onClick={onClick}>Click</button>    

            {/* 매개변수가 있는 함수일 경우 익명 함수의 형태로 사용 */}
            <button onClick={() => onClickButton(-1)}>-1</button>
            <button onClick={() => onClickButton(1)}>+1</button>

            {/* 매개변수가 있는 함수일 경우 이렇게 하면 함수 실행의 "결과값"을 넘기고 있기 때문에 호출이 되지 않는다 */}
             {/* <button onClick={onClickButton(-1)}>-1</button> */}   
        </div>
    );
}