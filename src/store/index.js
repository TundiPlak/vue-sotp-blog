import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js';
import actions  from './actions.js';
import getters  from './getters.js';


Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "June 9, 2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "June 9, 2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "June 9, 2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "June 9, 2021",
      },
    ]},
    mutations,
    getters,
    actions
 
}
});
