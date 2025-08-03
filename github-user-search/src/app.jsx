import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
         <h1>Vite + Preact</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<UserDetails />} />
        </Routes>
      </Router>


    </>
  )
}
