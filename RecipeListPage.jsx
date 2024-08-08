import React, { useState } from 'react';

function RecipeListPage({ recipes, onSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.recipe.label.toLowerCase().includes(searchTerm) ||
    recipe.recipe.healthLabels.some(label => label.toLowerCase().includes(searchTerm))
  );

  return (
    <div>
      <h1>Recipe List</h1>
      <input
        type="text"
        placeholder="Search by name or label"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredRecipes.map((item) => (
          <li key={item.recipe.label} onClick={() => onSelect(item.recipe)}>
            <h2>{item.recipe.label}</h2>
            <img src={item.recipe.image} alt={item.recipe.label} />
            <p>Diet: {item.recipe.dietLabels.join(', ')}</p>
            <p>Cautions: {item.recipe.cautions ? item.recipe.cautions.join(', ') : 'None'}</p>
            <p>Meal Type: {item.recipe.mealType.join(', ')}</p>
            <p>Dish Type: {item.recipe.dishType.join(', ')}</p>
            <p>Health Labels: {item.recipe.healthLabels.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeListPage;
