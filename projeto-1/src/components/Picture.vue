<template>
    <div><img :src="image" alt="pessoa" height="50" /></div>
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
            image: './images/avatar.jpeg',
        };
    },
};
</script>
