import Button from "../button/Button";
import {useState} from 'react'
import Light from "./light/Light";
import StaticLight from "./light/StaticLight";

// Body Compoent
const Body2 = () => {
  const [light, setLight] = useState("OFF");  
  //React State가 변화하면 해당 컴포넌트의 랜더링이 다시됨 > 컴포넌트의 상태와 변화 관리
  //1. useState() : 새로운 상태를 생성하는 메서드, "OFF"는 초기값
  //2. [light, setLight] : JS의 배열 구조분해할당 > useState의 반환값 저장
  //3. useState의 반환값 : [State의 값, 상태변환 함수]


  // 4. JS의 변수로 관리하면 안되는 이유 -> 변수가 단순히 바뀐다고 랜더링이 다시 이루어지지 않는다.
  // let light = "OFF";
  
  return (
    <div className="body">
      <h1>Body</h1>
      <p> Current state : {light} </p>

      {/* 자식 컴포넌트의 랜더링 */}
      {/* 1. 자식 컴포넌트에 State 전달 -> Props가 변화하면 자식 컴포넌트가 재랜더링됨 */}
      <Light light={light}></Light> 
      {/* 2. 부모 컴포넌트가 리랜더링되면 자식 컴포넌트가 변화 필요없어도 재랜더링됨 -> 성능 최적화 필요?*/}
      <StaticLight></StaticLight> 

      <button onClick={() => {
          setLight("ON")
        }}
      >
        ON
      </button>
      <button onClick={() => {
          setLight("OFF")
        }}
      >
        OFF
      </button>
    </div>
  )
}

export default Body2;