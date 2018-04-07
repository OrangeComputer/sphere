import axios from "axios";
// init state
const state = {
  all: []
};

// getters
const getters = {
  allProducts: state => {
    return state.all;
  }
};

// actions
const actions = {
  getAllProducts({ commit }) {
    axios
      .get(`/api/products`)
      .then(res => {
        commit("setProducts", res.data);
      })
      .catch(error => {
        throw error;
      });
  }
};

const mutations = {
  setProducts(state, products) {
    state.all = products;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
