import React from "react";
import { Box, Heading, Image, List, ListItem, Text, Button } from "@chakra-ui/react";

function RecipePage({ recipe, onBack }) {
  return (
    <Box>
      <Button colorScheme="teal" mb={5} onClick={onBack}>
        Back to Recipes
      </Button>
      <Image src={recipe.image} alt={recipe.label} />
      <Heading>{recipe.label}</Heading>
      <Text>Meal Type: {recipe.mealType.join(", ")}</Text>
      <Text>Dish Type: {recipe.dishType.join(", ")}</Text>
      <Text>Total Cooking Time: {recipe.totalTime} minutes</Text>
      <Text>Servings: {recipe.servings}</Text>
      <Heading size="md" mt={4}>Nutrients:</Heading>
      <List>
        {Object.keys(recipe.totalNutrients).map((key) => (
          <ListItem key={key}>
            {recipe.totalNutrients[key].label}: {recipe.totalNutrients[key].quantity} {recipe.totalNutrients[key].unit}
          </ListItem>
        ))}
      </List>
      <Heading size="md" mt={4}>Ingredients:</Heading>
      <List>
        {recipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>{ingredient}</ListItem>
        ))}
      </List>
      {recipe.dietLabels.length > 0 && (
        <Text mt={4}>Diet Labels: {recipe.dietLabels.join(", ")}</Text>
      )}
      {recipe.healthLabels.length > 0 && (
        <Text>Health Labels: {recipe.healthLabels.join(", ")}</Text>
      )}
      {recipe.cautions.length > 0 && (
        <Text>Cautions: {recipe.cautions.join(", ")}</Text>
      )}
    </Box>
  );
}

export default RecipePage;
