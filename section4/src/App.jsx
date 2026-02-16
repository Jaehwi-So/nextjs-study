
import { useState, useEffect, useRef} from 'react'
import useUpdate from './hooks/useUpdate'
import useInput from './hooks/useInput'
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even';

function App() {

  const [count, setCount] = useState(0);  //상태변화 함수는 "비동기"로 호출됨 -> 해당 상태가 변화한 이후의 사이드이팩트의 대응 필요
  const [text, onChangeText] = useInput();

  // useEffect(() => {}, []) //콜백함수, 배열
  // 컴포넌트 생명주기 대응, 후처리 로직, 데이터 요청, 동기화 등 
  // 렌더링 이후에 발생해야 하는 “부수 효과(Side Effect)”를 다루는 용도임을 유의
  useEffect(() => {
    console.log(count, text);
  }, [count, text]);  //배열안의 인수(deps)가 변경되면 콜백함수가 다시 실행된다.



  /* 생애주기 제어 */
  // 1. 마운트(탄생)
  useEffect(() => {
    console.log("Mount");
  }, []) //deps를 빈 상태로(해당 콜백 함수는 한 번만 실행된다(탄생 시점))

  // 2. 업데이트(변화, 리렌더링)
  // React Custom Hooks 사용
  useUpdate(() => {
    console.log("Update!!")
  })

  // const isMountRef = useRef(false); //상태를 유지시켜야 하므로 useRef() 사용 (let은 리랜더링시 초기화됨)
  // useEffect(() => {
  //   if(!isMountRef.current){  //마운트 단계에서의 무시 처리
  //     isMountRef.current = true;
  //     return;
  //   }
  //   console.log("Update");
  // });  //deps를 빈 상태로
  

  // 3. 언마운트(죽음)
  useEffect(() => { 
    return () => {
        console.log("Unmount"); //useEffect의 콜백이 리턴하는 함수는 "Cleanup 함수로 예약된다"
    }
  }, []) //deps를 빈 상태로(해당 콜백 함수는 한 번만 실행된다(소멸 시점))

  
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText}></input>
      </section>
      <section>
        <Viewer 
          count={count}
        />
        {count % 2 === 0 && <Even></Even>}
      </section>
      <section>
        <Controller
          count={count}
          setCount={setCount}
        />
      </section>
    </div>
  )

}

export default App
