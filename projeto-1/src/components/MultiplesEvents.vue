<template>
    <div>
        <button @click="first('primeiro', $event), second('segundo', $event)">Ativar multiplos eventos</button>
        <p>{{ multiples_events }}</p>
    </div>
</template>

<script>
export default {
    name: 'MultiplesEvents',
    data() {
        return {
            multiples_events: '',
        };
    },
    methods: {
        first(option, e) {
            setTimeout(() => {
                this.multiples_events = `${option} evento`;
            }, 1000);
        },
        second(option, e) {
            setTimeout(() => {
                this.multiples_events = `${option} evento`;
            }, 2000);
        },
    },
};
</script>

<style scoped>
.center {
    display: block;
}
</style>
