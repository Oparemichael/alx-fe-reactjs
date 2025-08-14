import React, { useState} from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic   
        const newErrors = {};
            if (!title.trim()) newErrors.title = 'Title is required';
            if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
            if (!steps.trim()) newErrors.steps = 'Preparation instructions are required';
            setErrors(newErrors);

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {/**Form fields for title, ingredients, preparation */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter recipe title"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div className="mb-4">
                <label className="block tect-gray-700 font-semibold mb-2">Ingredients</label>
                <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter ingredients (comma separated)"
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Preparation Instructions</label>
                    <input 
                        type="text"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="6"
                        />
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}   
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Submit Recipe
                    </button>
        </form>
    );

};

export default AddRecipeForm;