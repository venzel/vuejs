<template>
    <div>{{ prop_app_name }}</div>
    <div id="nav">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/order">Pedidos</router-link>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['prop_app_name'],
};
</script>

<style scoped></style>
