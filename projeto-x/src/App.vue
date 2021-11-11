<template>
    <Header :prop_app_name="app_name" />
    <router-view />
    <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components: { Header, Footer },
    name: 'App',
    data() {
        return {
            app_name: 'Burguer x',
        };
    },
};
</script>
