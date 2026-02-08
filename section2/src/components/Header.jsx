import Button from "./button/Button";
import Button2 from "./button/Button2";

// Header Compoent
const Header = () => {
    const buttonProps = {
        text: "1번 버튼",
        color: "blue"
    };

    return (
        <header>
            <h1>Header Component</h1>
            <Button {...buttonProps}></Button> {/* React Props Best Practice : 전개 문법 사용 -> 컴포넌트는 가독성을 위해 간소화 필요함*/}

            {/* React Props */}
            <Button text={"2번 버튼"} color={"red"}></Button> 
            <Button text={"3번 버튼"}></Button>

            {/* Childern Props */}
            <Button2 color={"green"}>
                <div>4번 버튼 by Parent</div> {/* Button 컴포넌트에 childern이라는 props로 전달됨 */}
            </Button2>

        </header>
    )
}

export default Header;