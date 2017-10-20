<template>
  <div class='movie'>
    <div class="movie-col-left">
      <img v-bind:src="movie.Poster" alt="">
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{movie.Title}}</h2>
        <span class="movie-rating">{{movie.Rated}}</span>
      </div>
      <div class="movie-sessions" >
        <div v-for="session in sessions" v-bind:key="session.id" class="session-time-wrapper">
          <div class="session-time">{{formatDate(session.time)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['movie', 'sessions'],
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      // return `${date.getUTCMonth()}-${date.getUTCFullYear()}`
      return moment(dateString).format("h:mm A")
    }
  }
}
</script>
