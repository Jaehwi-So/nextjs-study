const Light = ({light}) => {    //부모 컴포넌트로 전달받는 Props의 값이 변화하면 재랜더링됨
    console.log("Light Rerendering")
    return(
        <>
            {light === "ON" ? (
                <div style={{backgroundColor: "orange"}}>
                    전구 ON
                </div>
            ) : (
                <div style={{backgroundColor: "gray"}}>
                    전구 OFF
                </div>
            )}

        </>
    )
}

export default Light;