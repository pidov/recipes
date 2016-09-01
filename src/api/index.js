import recipe from './schemas/recipe';
import teaser from './schemas/teaser';

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
  addRecipe(cb) {
    cb(recipe());
  },
  getRecipes(cb) {
    cb(generateList(12, recipe));
  },
  getTeasers(cb) {
    cb(generateList(4, teaser));
  },
};
