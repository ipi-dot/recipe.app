import React from 'react';

function RecipePage({ recipe, onBack }) {
  const { label, image, dietLabels, healthLabels, cautions, mealType, dishType, totalTime, ingredients, yield, totalNutrients } = recipe;

  return (
    <div>
      <button onClick={onBack}>Back to Recipe List</button>
      <h1>{label}</h1>
      <img src={image} alt={label} />
      <p>Meal Type: {mealType.join(', ')}</p>
      <p>Dish Type: {dishType.join(', ')}</p>
      <p>Total Cooking Time: {totalTime} minutes</p>
      <p>Diet Labels: {dietLabels.join(', ')}</p>
      <p>Health Labels: {healthLabels.join(', ')}</p>
      <p>Cautions: {cautions ? cautions.join(', ') : 'None'}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Servings: {yield}</p>
      <h2>Total Nutrients</h2>
      <p>Energy: {totalNutrients.ENERC_KCAL.quantity} {totalNutrients.ENERC_KCAL.unit}</p>
      <p>Fat: {totalNutrients.FAT.quantity} {totalNutrients.FAT.unit}</p>
      <p>Carbs: {totalNutrients.CHOCDF.quantity} {totalNutrients.CHOCDF.unit}</p>
      <p>Protein: {totalNutrients.PROCNT.quantity} {totalNutrients.PROCNT.unit}</p>
      <p>Cholesterol: {totalNutrients.CHOLE.quantity} {totalNutrients.CHOLE.unit}</p>
      <p>Sodium: {totalNutrients.NA.quantity} {totalNutrients.NA.unit}</p>
      <h2>Cookies</h2>
      {/* Display cookies if any */}
      <p>{cautions && cautions.length > 0 ? `Cookies may contain: ${cautions.join(', ')}` : 'No cookies available'}</p>
    </div>
  );
}

export default RecipePage;
