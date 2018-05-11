import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      getLoadedPosts: (state) => state.loadedPosts
    },
    actions: {
      async nuxtServerInit ({ commit }, context) {
        let { data } = await axios.get('https://simple-bloger.firebaseio.com/posts.json')
        let postList = []
        for (const key in data) {
          postList.push({ ...data[key], id: key })
        }
        commit('UPDATE_LOADED_POSTS', postList)
        console.log(data)
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
