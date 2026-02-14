import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="flex space-x-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-16 w-16 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Vite + React + Tailwind</h1>
      <div className="card bg-white p-6 rounded-lg shadow-md">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-600">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-gray-500 mt-4 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
