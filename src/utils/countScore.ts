import { Ingredient } from '../model/Ingredient';
import { ProductIngredient } from '../model/ProductIngredient';
import { Product } from '../model/Product';
import { getIngredientsWithScore } from './getIngredientsWithScore';

export function countIngredientScore(ingredient: Ingredient) {
    let sum = 0;
    for (const ingredientInfluence of ingredient.ingredientInfluences) {
        //console.log('ingredientInfluence', ingredientInfluence);
        sum += ingredientInfluence.influence.score * ingredientInfluence.score;
    }

    return sum;
}

export async function countProductScore(product: Product) {
    const ingredients = await getIngredientsWithScore();

    let sum = 0;

    for (const productIngredient of product.productIngredients) {
        const amount = 1; //todo productIngredient.order;
        const { score } = ingredients.find((ingredient) => ingredient.name === productIngredient.ingredient_name)!;

        sum += score * amount;
    }

    return sum / product.productIngredients.length;
}

export async function insertProductScore(product: Product) {
    product.score = await countProductScore(product);
    return product;
}
