import Button from "../button/Button";
import {useRef, useState} from 'react'

// Body Compoent
const Body = () => {

  const [state, setState] = useState({
    name : "",
    gender: "MALE",
    text: "텍스트를 입력해주세요"
  })

  const nameRef = useRef();

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value //객체 리터럴을 통해 새로운 객체 생성 -> []문법: 계산된 프로퍼티(computed property) 활용
    });
  }

  const onSubmit = () => {
    if(state.name.length <= 0){
      nameRef.current.focus();
      return;
    }
    alert(`${state.name}님 회원가입이 완료되었습니다`); // 템플릿 리터럴 : ` ${} `
  }
  
  return (
    <div className="body">
      <h1>Body</h1>
      <input 
        ref={nameRef}
        name={"name"}
        value={state.name} 
        onChange={onChange}></input>
      <div>{state.name.length > 0 ? state.name : "이름을 입력해주세요"} </div>

      <hr></hr>

      <div>
        <select 
          name={"gender"}
          value={state.gender} 
          onChange={onChange}>
          <option value="MALE">남성</option>
          <option value="FEMALE">여성</option>
        </select>
      </div>

      <hr></hr>

      <div>
        <textarea 
          name={"text"}
          value={state.text} 
          onChange={onChange}>
        </textarea>
      </div>

      <div>
        <button onClick={onSubmit}>회원 가입</button>
      </div>
    </div>
  )
}

export default Body;