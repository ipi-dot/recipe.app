import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import RecipeListPage from "./RecipeListPage";
import RecipePage from "./RecipePage";
import { data } from "./data";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} onBack={handleBack} />
        ) : (
          <RecipeListPage recipes={data.hits} onSelect={handleRecipeSelect} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;

