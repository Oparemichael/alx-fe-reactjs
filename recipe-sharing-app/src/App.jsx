import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import EditRecipeForm from './components/EditRecipeForm.jsx'
import DeleteRecipeButton from './components/DeleteRecipeButton.jsx'; 
import SearchBar from './components/SearchBar.jsx'
import FavoritesList from './components/FavoritesList.jsx'
import RecommendationsList from './components/RecommendationsList.jsx'


function DemoSection({ count, setCount }) {
  return (
    <div>
      {/* Demo section can be removed or updated as needed */}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <DemoSection count={count} setCount={setCount} />
        <div>
          <h1>Recipe Sharing App</h1>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
                <DeleteRecipeButton />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App
