export const state = () => ({
  list: [],
})

export const mutations = {
  set_arr(state, val) {
    state.list.push(val)
  },
}
