import axios from "axios";
// init state
const state = {
  all: []
};

// getters
const getters = {
  allReceipts: state => {
    return state.all;
  }
};

// actions
const actions = {
  getAllReceipts({ commit }) {
    axios
      .get(`/api/receipts`)
      .then(res => {
        commit("setReceipts", res.data);
      })
      .catch(error => {
        throw error;
      });
  }
};

const mutations = {
  setReceipts(state, receipts) {
    state.all = receipts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
