<template>
    <input type="submit" value="Enviar" v-on:click="submitForm" />
</template>

<script>
export default {
    name: 'InputSubmit',
    methods: {
        submitForm(e) {
            e.preventDefault();
        },
    },
};
</script>
