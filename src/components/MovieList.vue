<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item 
        v-for="movie in filteredMovies" 
        v-bind:key="movie.movie.Title"
        v-bind:movie="movie.movie"
        v-bind:sessions="movie.sessions">
      </movie-item>
    </div>
    <div class="no-result" v-else-if="movies.length">No Results for {{genre.join(', ')}}</div>
    <div class="no-result" v-else>Loading...</div>
  </div>
</template>

<script>
import genres from '../util/genres'
import MovieItem from './MovieItem.vue'

export default {
  props: ['genre', 'time', 'movies'],
  methods: {
    movieHasGenre(movie, selectedGenres) {
      const movieGenres = movie.movie.Genre.split(', ')
      for (const genre of movieGenres) {
        if (selectedGenres.includes(genre)) {
          return true
        } else {
          return false
        }
      }
    },
    filterMovies() {
      const selectedGenres = this.genre
      const allMovies = this.movies
      return allMovies.filter(movie => {
        if (this.movieHasGenre(movie, selectedGenres)) {
          return true
        } else {
          return false
        }
      })
    }
  },
  computed: {
    filteredMovies() {
      return this.genre.length ? this.filterMovies() : this.movies
    }
  },
  components: { 'movie-item': MovieItem }
}
</script>
