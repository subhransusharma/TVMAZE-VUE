<template>
  <div>
    <div v-if="fetchingShowDetail" class="h-screen flex items-center justify-center">
      <loader></loader>
    </div>

    <div v-else class="mx-auto max-w-7xl pb-24 pt-16">
      <div class="sm:flex sm:space-x-10">
        <div class="sm:max-w-xs rounded-2xl cardSize">
          <img :src="showDetail.image.original" class="rounded-2xl shadow-xl" />
        </div>

        <div>
          <h1 class="mt-4 text-4xl leading-10 sm:text-5xl font-extrabold tracking-tight text-slate-50">
            {{ showDetail.name }}
          </h1>
          <div class="flex items-center text-gray-400 space-x-6 mt-4">
            <!-- star rating-->
            <div class="flex items-center text-2xl">
              <div>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                  class="h-8 w-8 text-yellow-500 -ml-0.5 mr-1">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z">
                  </path>
                </svg>
              </div>
              <div>{{ showDetail.rating.average }}</div>
            </div>

            <div>
              <div class="flex items-center font-medium truncate flex-wrap -mt-1 -mr-1">
                <div class="mt-1 mr-1 flex items-center" v-for="(genre, index) in showDetail.genres" :key="index">
                  {{ genre
                  }}<span v-if="showDetail.genres.length - 1 > index">,</span>
                </div>
              </div>
            </div>

            <div class="border border-gray-700 text-sm font-medium rounded-full px-3 py-1">
              {{ showDetail.status }}
            </div>
          </div>

          <div class="text-2xl tracking-tight font-bold mb-3 text-slate-200 mb-3 mt-10">
            Summary
          </div>
          <div class="mt-4 max-w-3xl space-y-6 text-gray-400 prose" v-html="showDetail.summary"></div>
        </div>
      </div>
      <div>
        <div>
          <div class="text-2xl tracking-tight font-bold mb-3 text-slate-200 mb-6 mt-20">
            Cast
          </div>
          <div class="flex items-center space-x-10 overflow-x-auto">
            <div class="text-center" v-for="(person, index) in showDetail._embedded.cast.slice(0, 8)" :key="index">
              <div class="w-14 h-14 rounded-full overflow-hidden mx-auto" v-if="person.person.image">
                <img :src="person.person.image.medium" />
              </div>
              <div class="mt-3 truncate">{{ person.person.name }}</div>
              <div class="text-xs mt-0.5 text-gray-400 truncate">
                {{ person.character.name }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="text-2xl tracking-tight font-bold mb-6 text-slate-200 mb-3 mt-20">
            Episodes
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase text-gray-400">
                <tr class="border-t-1s border-b-2 border-gray-800">
                  <th scope="col" class="px-2 py-3">Name</th>
                  <th scope="col" class="px-2 py-3">Air date</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-800" v-for="(
                    episode, index
                  ) in showDetail._embedded.episodes.slice(0, 15)" :key="index">
                  <th scope="row" class="px-2 py-4 font-medium whitespace-nowrap text-white">
                    {{ episode.name }}
                  </th>
                  <td class="py-4">
                    {{ episode.airdate }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { getShowDetails } from "../services/service";

export default {
  components: { Loader },
  data() {
    return {
      showDetail: null,
      fetchingShowDetail: false,
    };
  },
  mounted() {
    this.fetchShowDetail(this.$route.params.id);
  },
  methods: {
    async fetchShowDetail(id) {
      try {
        this.fetchingShowDetail = true;
        const response = await getShowDetails(id);
        console.log('response', response)
        this.showDetail = response.data;
        this.fetchingShowDetail = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.cardSize {
  width: 320px;
  height: 471px;
}
</style>
