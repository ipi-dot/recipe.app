import React from "react";
import { Box, Heading, Image, List, ListItem, Text, Button } from "@chakra-ui/react";

function RecipeListPage({ recipes, onSelect }) {
  return (
    <List spacing={5}>
      {recipes.map((hit, index) => (
        <ListItem key={index}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={hit.recipe.image} alt={hit.recipe.label} />
            <Heading size="md" mt={4}>
              {hit.recipe.label}
            </Heading>
            {hit.recipe.dietLabels.length > 0 && (
              <Text>Diet Labels: {hit.recipe.dietLabels.join(", ")}</Text>
            )}
            {hit.recipe.cautions.length > 0 && (
              <Text>Cautions: {hit.recipe.cautions.join(", ")}</Text>
            )}
            <Text>Meal Type: {hit.recipe.mealType.join(", ")}</Text>
            <Text>Dish Type: {hit.recipe.dishType.join(", ")}</Text>
            <Button mt={4} colorScheme="teal" onClick={() => onSelect(hit.recipe)}>
              View Recipe
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default RecipeListPage;

