// Header Compoent
import "./Button.css"

const Button2 = ({color, children}) => { //부모 컴포넌트의 inner HTML(children) 매개변수를 전달받음

  return (
    <button className="button" style={{color: color}}>
      {children}
    </button>
  )
}

export default Button2;