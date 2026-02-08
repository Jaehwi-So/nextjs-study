// Footer Compoent
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        <h1>Footer Component</h1>

        <div 
            style={{
            backgroundColor: "gray", /* 태그 안에 스타일 정의 (카멜 케이스 작성) */
            }}
        >
            footer1
        </div>

        <div className="myDivClass"> {/* Class */}
            footer2
        </div>

        <div id="myDivId"> {/* ID */}
            footer3
        </div>

    </footer>
  )
}

export default Footer;