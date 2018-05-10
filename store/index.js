import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      getLoadedPosts: (state) => state.loadedPosts
    },
    actions: {
      nuxtServerInit ({ commit }, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('UPDATE_LOADED_POSTS', [
              {
                id: 1,
                title: 'First Post',
                previewText: 'This is our first post',
                thumbnail: 'https://picsum.photos/400/300?random'
              },
              {
                id: 2,
                title: 'Second Post',
                previewText: 'This is our second post',
                thumbnail: 'https://picsum.photos/400/300?random'
              }
            ])
            resolve()
          }, 1500)
          // Throw out an error
          // reject(new Error())
        }).catch(err => {
          context.error(err)
        })
      },
      updateLoadedPosts ({ commit }, posts) {
        commit('UPDATE_LOADED_POSTS', posts)
      }
    },
    mutations: {
      UPDATE_LOADED_POSTS (state, posts) {
        state.loadedPosts = posts
      }
    }
  })
}

export default createStore
