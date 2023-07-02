<template>
    <div>
        <div class="text-2xl tracking-tight font-bold mb-3 text-slate-200 mt-20">
            Cast
        </div>
        <div class="flex items-center space-x-10 overflow-x-auto">
            <div class="text-center" v-for="(person,index) in casts?.slice(0,8)" :key="index">
              <div class="w-14 h-14 rounded-full overflow-hidden mx-auto" v-if="person.person.image">
                <img :src="person.person.image.medium">
              </div>
              <div class="mt-3 truncate">{{person.person.name}}</div>
              <div class="text-xs mt-0.5 text-gray-400 truncate">{{person.character.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
 export default {
    props: {
      casts: { type: Array }
    }
  };
</script>