<template>
    <div>
        <div class="text-2xl tracking-tight font-bold text-slate-200 mb-3 mt-20">
            Episodes
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-xs uppercase text-gray-400">
                    <tr class="border-t-1s border-b-2 border-gray-800">
                        <th scope="col" class="px-2 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-2 py-3">
                            Air date
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-800" v-for="(episode, index) in episodes?.slice(0, 15)" :key="index">
                        <th scope="row" class="px-2 py-4 font-medium  whitespace-nowrap text-white">
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
</template>

<script>
export default {
    props: {
        episodes: { type: Array }
    }
};
</script>