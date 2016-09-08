import api from '../../api';
import * as types from '../mutation-types';

export const getAllCategories = ({ dispatch }) => {
  api.getCategories((err, categories) => {
    console.log(categories);
    dispatch(types.RECEIVE_CATEGORIES, categories);
  });
};
