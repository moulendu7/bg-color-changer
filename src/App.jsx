import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './main.jsx'

function App() {
  // const [count, setCount] = useState(0)
  function changecolor(color) {
    const root = document.getElementById('root');
    root.style.backgroundColor = color;
  }

  return (

    <>
      <div className="fixed bottom-6 left-0 w-screen flex justify-center ">
        <div className="flex flex-wrap gap-3 bg-white shadow-lg rounded-2xl px-6 py-3 shadow-black">
          <div className="bg-red-700">
            <button className="w-20 text-white" onClick={() => changecolor('red')}>Red</button>
          </div>
          <div className="bg-green-400">
            <button className="w-20 text-amber-50" onClick={() => changecolor('green')}>Green</button>
          </div>
          <div className="bg-blue-500">
            <button className="w-20 text-white" onClick={() => changecolor('blue')}>Blue</button>
          </div>
          <div className="bg-green-900">
            <button className="w-20 text-amber-50" onClick={() => changecolor('#808000')}>Olive</button>
          </div>
          <div className="bg-gray-400">
            <button className="w-20 text-amber-50" onClick={() => changecolor('gray')}>Gray</button>
          </div>
          <div className="bg-yellow-300">
            <button className="w-20 text-amber-50" onClick={() => changecolor('yellow')}>Yellow</button>
          </div>
          <div className="bg-pink-400">
            <button className="w-20 text-amber-50" onClick={() => changecolor('pink')}>Pink</button>
          </div>
          <div className="bg-purple-600">
            <button className="w-20 text-amber-50" onClick={() => changecolor('purple')}>Purple</button>
          </div>
          <div className="bg-gray-300">
            <button className="w-20 text-amber-50" onClick={() => changecolor('lavender')}>Lavender</button>
          </div>
          <div className="bg-white">
            <button className="w-20 text-black" onClick={() => changecolor('white')}>White</button>
          </div>
          <div className="bg-black">
            <button className="w-20 text-amber-50" onClick={() => changecolor('black')}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
