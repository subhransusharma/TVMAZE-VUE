<template>
  <div>
    <div v-if="fetchingShows" class="h-screen flex items-center justify-center">
      <loader></loader>
    </div>

    <div class="space-y-8" v-else>
      <!-- Cards -->
      <div class="max-w-xl">
        <h1 class="mt-20 text-4xl leading-10 sm:text-5xl font-extrabold tracking-tight text-slate-50">Your Gateway to
          Irresistible TV Delights</h1>
        <p class="mt-4 max-w-3xl space-y-6 text-gray-400">Unlock your TV obsession with captivating dramas and hilarious
          comedies, all at your fingertips</p>
      </div>

      <div>
        <div class='flex w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
          <div class='w-2 bg-gray-800'></div>
        </div>
      </div>

      <div v-for="(genre, index) in genres" :key="index">
        <div class="text-2xl tracking-tight font-bold mb-3 text-slate-200 mb-3 p-2 flex items-center space-x-2">
          <div>{{ genre.emoji }}</div>
          <div>{{ genre.name }}</div>
        </div>
        <div class="flex space-x-3 overflow-y-auto">
          <div v-for="(show, index) in groupByGenre(genre.name)" :key="index">
            <router-link :to="'/show/' + show.id">
              <show-card :show="show"></show-card>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ShowCard from "@/components/ShowCard.vue";
import Loader from "@/components/Loader.vue";
import { getAllShows } from '../services/service'

export default {
  name: 'App',
  components: { Loader, ShowCard },
  data() {
    return {
      fetchingShows: false,
      genres: [
        {
          name: 'Action',
          emoji: '💪',
        },
        {
          name: 'Romance',
          emoji: '😍',
        },
        {
          name: 'Crime',
          emoji: '🔫',
        },
        {
          name: 'Thriller',
          emoji: '🔪',
        },
        {
          name: 'Drama',
          emoji: '🎭',
        },
      ],
      shows: [],
      query: '',
    }
  },
  computed: {

  },
  mounted() {
    this.fetchShows();
  },
  methods: {
    async fetchShows() {
      try {
        this.fetchingShows = true
        const response = await getAllShows();
        this.shows = response.data
        this.fetchingShows = false
      } catch (error) {
        console.log(error);
      }
    },

    groupByGenre(genre) {
      return this.shows.filter((show) => {
        return show.genres.includes(genre)
      })
    }


  }
}
</script>
