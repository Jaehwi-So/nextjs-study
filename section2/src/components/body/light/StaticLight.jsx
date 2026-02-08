const StaticLight = () => {    //부모 컴포넌트로 전달받는 Props의 값이 변화하면 재랜더링됨
    console.log("Static Light Rerendering")
    return(
        <>
            <div style={{backgroundColor: "skyblue"}}>
                고정 전구
            </div>

        </>
    )
}

export default StaticLight;