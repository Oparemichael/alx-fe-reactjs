import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ()=> {
    const { id} = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === id)
    );

    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(id, { title, description });
        navigate(`/recipes/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;