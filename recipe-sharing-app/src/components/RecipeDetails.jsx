7   // RecipeDetails component
  import { useRecipeStore } from './recipeStore';
  import { useParams, Link } from 'react-router-dom';
  import DeleteRecipeButton from './DeleteRecipeButton';

  const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === id)
    );

    if (!recipe) {
      return (
        <div>
          <h1>Recipe not found</h1>
          <Link to="/">Go back</Link>
        </div>
      );
    }

    return (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <Link to={`/edit/${recipe.id}`}>Edit</Link>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      );
    };
  
  export default RecipeDetails;