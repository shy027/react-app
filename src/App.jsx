import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" className="logo-link">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="logo-link">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="title">React + Vite 开发模板</h1>
      </header>

      <main className="main-content">
        <div className="card">
          <div className="counter-section">
            <h2>计数器示例</h2>
            <div className="counter">
              <span className="count-display">{count}</span>
              <button onClick={() => setCount((count) => count + 1)}>
                点击增加
              </button>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>开始开发</h2>
          <p>
            编辑 <code>src/App.jsx</code> 开始您的开发之旅
          </p>
        </div>
      </main>

      <footer className="app-footer">
        <p>
          点击上方的 Vite 和 React 图标了解更多信息
        </p>
      </footer>
    </div>
  )
}

export default App
