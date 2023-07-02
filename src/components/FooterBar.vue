<template>
  <footer class="rounded-lg shadow mt-20 px-2">
    <div class="w-full">
      <div class="sm:flex sm:items-center sm:justify-between">
        <router-link to="/">
          <div class="flex items-center font-extrabold space-x-2 text-xl cursor-pointer select-none text-gray-500">
            <div>
              <svg fill="none" class="h-6 w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z">
                </path>
              </svg>
            </div>
            <div>Bradflix</div>
          </div>
        </router-link>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6  sm:mx-auto border-gray-800 lg:my-8" />
      <span class="block text-sm  sm:text-center text-gray-400">© 2023 <a href="#" class="hover:underline">BradFlix™</a>.
        All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>
