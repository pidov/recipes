import api from '../../api';
import * as types from '../mutation-types';

export const getAllRecipes = ({ dispatch }) => {
  api.getRecipes(recipes => {
    console.log('Recieved', recipes);
    dispatch(types.RECEIVE_RECIPES, recipes);
  });
};
