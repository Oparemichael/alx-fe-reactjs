import { useRecipeStore } from './recipeStore';

/**
 * FavoritesList component displays the user's favorite recipes.
 * This component does not accept any props.**/

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoritesIds = useRecipeStore((state) => state.favorites);

  const recipeById = useMemo(() => {
    return recipes
      .filter((recipe) => recipe.id !== undefined && recipe.id !== null)
      .reduce((acc, recipe) => {
        acc[recipe.id] = recipe;
        return acc;
      }, {});
  }, [recipes]);

  const favorites = useMemo(() => {
    return favoritesIds.map((id) => recipeById[id]).filter(Boolean);
  }, [favoritesIds, recipeById]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites
          .filter((recipe) => recipe && recipe.id !== undefined && recipe.id !== null)
          .map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))
      )}
    </div>
  );
};

export default FavoritesList;
