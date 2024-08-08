import React, { useState } from 'react';
import RecipeListPage from './RecipeListPage';
import RecipePage from './RecipePage';
import { data } from './utils/data'; // Beispiel-Daten importieren

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <RecipeListPage recipes={data.hits} onSelect={setSelectedRecipe} />
      )}
    </div>
  );
}

export default App;
