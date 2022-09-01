const state = () => ({
  SideMenu: false
})

const mutations = {
  // update expand sections
  UpdExpand(state, data) {
    state[data.cat] = data.value;
  },
}

export default {
  namespaced: true,
  state,
  mutations
}