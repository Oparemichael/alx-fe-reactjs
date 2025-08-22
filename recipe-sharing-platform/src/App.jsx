import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetails from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        {/* Add more routes as needed */}

      </Routes>
    </Router>
  )
}

export default App
