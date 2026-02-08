import Button from "../button/Button";
import {useState} from 'react'

// Body Compoent
const Body = () => {

  // # 문제점 : 입력이 늘어날수록 State와 Callback을 계속 작성해주어야 함
  
  // const [name, setName] = useState("");  //Name State
  // const [gender, setGender] = useState("MALE");  //Gender State
  // const [text, setText] = useState("텍스트를 입력해주세요");  //Text State

  // console.log(name) //State가 Change될 때 마다 리랜더링되는 것 확인 가능

  // const onChangeName = (e) => {
  //   setName(e.target.value) //input태그의 사용자 입력을 State를 이용하여 관리 가능(없으면 입력해도 반응 없음)
  // }
  // const onChangeGender = (e) => {
  //   setGender(e.target.value) 
  // }
  // const onChangeText = (e) => {
  //   setText(e.target.value) 
  // }
  

  const [state, setState] = useState({
    name : "",
    gender: "MALE",
    text: "텍스트를 입력해주세요"
  })

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value //객체 리터럴을 통해 새로운 객체 생성 -> []문법: 계산된 프로퍼티(computed property) 활용
    });
  }

  const onSubmit = () => {
    alert(`${state.name}님 회원가입이 완료되었습니다`); // 템플릿 리터럴 : ` ${} `
  }


  // const onChangeName = (e) => {
  //   setState({
  //     ...state,
  //     name: e.target.value
  //   })
  // }
  // const onChangeGender = (e) => {
  //   setState({
  //     ...state,
  //     gender: e.target.value
  //   })
  // }
  // const onChangeText = (e) => {
  //   setState({
  //     ...state,
  //     text: e.target.value
  //   })
  // }
  
  return (
    <div className="body">
      <h1>Body</h1>
      <input 
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