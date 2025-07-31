import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSerchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger flitering when search term changes
  }, 
  filterRecipes: () => {
    const { recipes, searchTerm } = get(); 
    const filtered = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
);
    set({ filteredRecipes: filtered });
  },
  addRecipe: (newRecipe) => 
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe:(id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe),
  })),
  setRecipes: (recipes) => set({ recipes })
}));