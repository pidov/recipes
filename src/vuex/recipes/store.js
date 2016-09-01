import { RECEIVE_RECIPES } from '../mutation-types';

// initial state
const initialState = {
  all: [],
};

// mutations
const mutations = {
  [RECEIVE_RECIPES](state, recipes) {
    state.all = recipes;
  },
};

export default {
  initialState,
  mutations,
};
