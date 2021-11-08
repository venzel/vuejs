<template>
    <h1>Meu nome eh: {{ name }}</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            name: '...',
        };
    },
    created() {
        setTimeout(() => {
            this.name = 'Pedro';
        }, 3000);
    },
    mounted() {
        setTimeout(() => {
            this.name = 'Tiago';
        }, 1000);
    },
};
</script>
