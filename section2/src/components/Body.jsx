import Button from "./button/Button";

// Body Compoent
const Body = () => {
  const number = 10;
  const condition = true;
  const user = {
    name: "재휘",
    isLogin: true
  }

  {/* 조건부 랜더링 */} 
  if(condition == false){
    return(
      <div>
        <p>Condition false</p>
      </div>   
    )
  }
  
  return (
    <> {/* JSX는 하나의 최상위 태그로 묶어 반환해야 함(빈태그 이용 가능) */} 

      <h1>Body Component</h1>
      <p>{number + 30}</p>

      {/* <p>{myObject}</p> 객체 랜더링 불가능 */}
      <p>{user.name}</p> {/* 객체의 필드 랜더링 가능*/} 


      {/* 조건부 랜더링2 */} 
      {user.isLogin ? ( 
        <p>로그인 상태</p>
      ) : (
        <p>로그아웃 상태</p>
      )}

    </>
  )
}

export default Body;