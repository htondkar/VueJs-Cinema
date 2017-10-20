import Vue from 'vue'

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

import VueResource from 'vue-resource'

import './style.scss'

Vue.use(VueResource)

new Vue({
  el: '#app',
  methods: {
    checkFilter: function(category, title, checked) {
      if (checked) {
        this[category].push(title)
      } else {
        const index = this[category].indexOf(title)
        index > -1 && this[category].splice(index, 1)
      }
    }
  },
  data() {
    return {
      time: [],
      genre: [],
      movies: []
    }
  },
  components: {
    'movie-list': MovieList, // vue converts this to kebab-case
    'movie-filter': MovieFilter // vue converts this to kebab-case
  },
  created() {
    this.$http.get('/api').then(res => {
      this.movies = res.body
    })
  }
})
