// Header Compoent
import "./Button.css"

const Button = (props) => { //Props를 매개변수로 전달받을 수 있음

  const {color, text} = props;  //구조 분해 할당

  return (
    <button className="button" style={{color: color}}>
      {text}
    </button>
  )
}


// const Button = ({color, text}) => { //매개변수 자체 구조분해 할당
//   return (
//     <button className="button" style={{color: color}}>
//       {text}
//     </button>
//   )
// }


export default Button;