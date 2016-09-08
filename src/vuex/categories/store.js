import { RECEIVE_CATEGORIES } from '../mutation-types';

// initial state
const initialState = {
  all: [],
};

// mutations
const mutations = {
  [RECEIVE_CATEGORIES](state, categories) {
    state.all = categories;
  },
};

export default {
  initialState,
  mutations,
};
