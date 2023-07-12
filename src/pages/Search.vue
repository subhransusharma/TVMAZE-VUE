<template>
  <div>
    <div class="max-w-xl">
      <h1 class="mt-4 text-3xl leading-10 sm:text-4xl font-medium tracking-tight text-slate-50">Search results for <span
          class="italic font-extrabold">"{{ $route.query.query }}"</span></h1>
    </div>

    <div v-if="fetchingResults" class="h-screen flex items-center justify-center">
      <loader></loader>
    </div>

    <div v-else>
      <div v-if="results.length > 0" class="mt-8 flex space-x-3 ">
        <div v-for="(show, index) in results" :key="index">
          <router-link :to="'/show/' + show.show.id">
            <show-card :show="show.show"></show-card>
          </router-link>
        </div>
      </div>

      <div v-if="results.length === 0" class="text-lg font-medium mt-3 text-gray-500 ">No results found :(</div>

    </div>


  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import ShowCard from "@/components/ShowCard.vue";
import { getAllSearchedShows } from '../services/service'

export default {
  components: { ShowCard, Loader },
  data() {
    return {
      fetchingResults: false,
      results: []
    }
  },
  watch: {
    '$route.query.query': {
      handler: function (query) {
        this.fetchResults(query)
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    async fetchResults(query) {
      try {
        this.fetchingResults = true;
        const response = await getAllSearchedShows(query);
        this.results = response.data
        this.fetchingResults = false
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
