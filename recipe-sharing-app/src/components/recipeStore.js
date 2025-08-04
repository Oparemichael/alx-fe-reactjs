setRecipes: (newRecipes) =>
  set((state) => ({
    recipes: newRecipes,
    filteredRecipes: newRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  }));
