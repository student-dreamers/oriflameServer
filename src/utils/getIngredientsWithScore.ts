import { Ingredient } from './../model/Ingredient';
import { countIngredientScore } from './countScore';

export async function getIngredientsWithScore() {
    return (await Ingredient.query()
        .eager('[ingredientInfluences.influence]')
        .select()).map((ingredient) => {
        ingredient.score = countIngredientScore(ingredient);
        return ingredient;
    });
}
