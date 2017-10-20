<template>
  <div id="movie-filter">
    <h2>Filter Results</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check="checkEventHandler" v-bind:key="genre">
      </check-filter>
    </div>
  </div>
</template>

<script>
import genres from '../util/genres'
import CheckFilter from './CheckFilter.vue'

export default
  {
    data() {
      return {
        genres
      }
    },
    components: { "check-filter": CheckFilter },
    methods: {
      checkEventHandler: function(genre, title, checked) {
        this.$emit('check', genre, title, checked)
      }
    }

  }
</script>
