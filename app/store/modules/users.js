import axios from "axios";
// init state
const state = {
  all: []
};

// getters
const getters = {
  allUsers: state => {
    return state.all;
  }
};

// actions
const actions = {
  getAllUsers({ commit }) {
    axios
      .get(`/api/users`)
      .then(res => {
        commit("setUsers", res.data);
      })
      .catch(error => {
        throw error;
      });
  }
};

const mutations = {
  setUsers(state, users) {
    state.all = users;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
