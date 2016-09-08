import recipeCreator from './schemas/recipe';
import categoriesCreator from './schemas/categories';
import teaser from './schemas/teaser';

import util from '../lib/util';

function generateList(count, schemaGenerator) {
  const arr = []; let i = 0;

  if (typeof count !== 'number') return arr;
  if (count < 1) return arr;

  while (++i <= count) {
    arr.push(schemaGenerator());
  }

  return arr;
}

module.exports = {
  addRecipe(recipe, cb) {
    if (util.isFunction(cb)) {
      cb(null, recipeCreator(recipe));
    }
  },
  getRecipes(cb) {
    cb(generateList(12, recipeCreator));
  },
  getTeasers(cb) {
    cb(generateList(4, teaser));
  },
  getCategories(cb) {
    if (util.isFunction(cb)) {
      cb(null, generateList(5, categoriesCreator));
    }
  },
};
