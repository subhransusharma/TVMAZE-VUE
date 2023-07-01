<template>
  <div class="w-36 bg-cover bg-center rounded-xl overflow-hidden group hover:bg-gray-800  hover:shadow cursor-pointer p-2 transition duration-150 ease-in-out">
    <div class="relative">
      <div v-if="show.rating.average" class="absolute top-2 right-1 group-hover:bg-opacity-80 bg-gray-900 bg-opacity-50 rounded-full text-xs font-semibold z-10 px-1.5 py-0.5">
        <div class="flex items-center">
          <svg fill="currentColor" class="h-4 w-4 text-yellow-500 -ml-0.5 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path>
          </svg>
          {{show.rating.average}}
        </div>
      </div>
      <div style="width: 128px; height: 180px" class="bg-gray-800 rounded-lg">
        <img :src="show.image.medium" class="w-full rounded-lg" alt="cover">
      </div>

    </div>
    <h1 class="text-base font-semibold text-gray-300 mt-2 truncate">{{show.name}}</h1>
    <div class="mt-1">
      <div class="text-xs flex items-center font-medium text-gray-600 truncate flex-wrap -mt-1 -mr-1">
        <div class="mt-1 mr-1 flex items-center" v-for="(genre,index) in show.genres" :key="index">
          {{genre}}<span v-if="show.genres.length-1 > index">,</span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'showCard',
  props: {
    show: {
      type: Object
    }
  }
}
</script>
