import './App.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'


// App Compoent
function App() {
  return (
    <>
      <Header/> {/* 자식 컴포넌트 */}
      <Body/> {/* 자식 컴포넌트 */}
      <Footer/> {/* 자식 컴포넌트 */}
    </>
  )
}

export default App
