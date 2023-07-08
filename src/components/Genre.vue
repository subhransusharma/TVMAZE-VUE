<template>
    <div>
        <div class="flex font-medium  truncate flex-wrap -mt-1 -mr-1">
            <div class="mt-1 mr-1 flex items-center" v-for="(genre, index) in genres" :key="index">
                {{ genre }}<span v-if="genres.length - 1 > index">,</span>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'mazeGenre',
    props: {
        genres: { type: Array }
    }
};
</script>