<template>
    <div class="header">
        <p>Header</p>
        <a v-if="logon">Meus dados</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['logon'],
    data() {
        return {};
    },
};
</script>

<style scoped>
.header {
    display: flex;
    background-color: antiquewhite;
}
</style>
