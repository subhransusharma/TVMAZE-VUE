<template>
  <div class="flex items-center justify-between">

    <!-- Logo -->
    <router-link to="/">
      <div class="flex items-center font-extrabold space-x-2 text-xl cursor-pointer select-none">
        <div>
          <svg fill="none" class="h-6 w-6 text-yellow-400" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z">
            </path>
          </svg>
        </div>
        <div>Bradflix</div>
      </div>
    </router-link>


    <!-- Search -->
    <div class='md:block w-70 pl-4'>
      <div
        class="relative flex items-center w-full h-12 rounded-lg bg-gray-800 overflow-hidden focus-within:border focus-within:border-gray-200">
        <div class="grid place-items-center h-full w-12 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input v-model="searchQuery" class="min-w-md h-full w-full bg-gray-800 outline-none text-sm text-white pr-2"
          type="text" id="search" @input="setQueryParams" placeholder="Search..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    setQueryParams(e) {
      console.log(e.target.value)
      if (e.target.value) {
        this.$router.push({ path: '/search', query: { query: e.target.value } })
      } else {
        this.$router.push('/')
      }
    },
    setSearchQuery() {
      if (this.$route.query.query) {
        this.searchQuery = this.$route.query.query
      }
    }
  },
  mounted() {
    this.setSearchQuery()
  }
}
</script>
