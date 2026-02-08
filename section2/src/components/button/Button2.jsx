// Header Compoent
import "./Button.css"

const Button2 = ({color, children}) => { 

  const onClick = (e) => {
    console.log(e); //SyntheticBaseEvent
    alert("버튼을 클릭하였습니다")
  }

  return (
    <button 
      className="button" 
      style={{color: color}}
      onClick={onClick} //이벤트 핸들러 : 함수의 이름(콜백 메서드) 전달
    >
      {children}
    </button>
  )
}

export default Button2;