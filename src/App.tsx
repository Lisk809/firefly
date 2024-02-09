import hero from './assets/hero.png'
import './App.css'
function clickHandler(e){
  e.target.style.filter="none"
}
//document.querySelector(".logo").addEventListener("click", clickHandler)
function App() {
  return (
    <>
    <div onclick={clickHandler} class="hero">
    <img src={hero} className="logo" />
    </div>
    <footer>Copyright © 2024 Lisk All rights reserved.</footer>
    </>
  )
}

export default App
