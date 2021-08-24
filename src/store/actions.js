export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}

// payload is the species and pet sent to the mutation
