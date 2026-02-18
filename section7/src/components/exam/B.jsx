import { useReducer } from "react";

function reducer(state, action){
    if(action.type === "DECREASE"){
        return state - action.data;
    }
    else{
        return state + action.data;
    }
}

export default function B(){
    
    //[count, dispatch] : 상태, 상태변화 트리거(처리X)
    //reducer 함수가 상태변화 처리, 0은 초기 상태
    const [count, dispatch] = useReducer(reducer, 0);   

    return (
        <div>
            <h4>{count}</h4>
            <div>
                <button 
                    onClick={() => {
                        dispatch({
                            type: "DECREASE",   //해당 Object가 reducer에 "action"으로 전달됨
                            data: 1
                        })
                    }}
                >
                    -
                </button>
                <button 
                    onClick={() => {
                        dispatch({
                            type: "INCREASE",   //해당 Object가 reducer에 "action"으로 전달됨
                            data: 1
                        })
                    }}
                >
                    +
                </button>
            </div>
        </div>
    )
}