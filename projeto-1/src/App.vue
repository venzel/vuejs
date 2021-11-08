<template>
    <div>
        <Header :logon="logon" />
        <button @click="login">Login toggle</button>
        <FirstComponent />
        <LifeCycle />
        <People />
        <Form />
        <MultiplesEvents />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import FirstComponent from './components/FirstComponent.vue';
import Form from './components/Form.vue';
import LifeCycle from './components/LifeCycle.vue';
import People from './components/People.vue';
import MultiplesEvents from './components/MultiplesEvents.vue';

export default {
    app: 'App',
    components: {
        Header,
        FirstComponent,
        LifeCycle,
        People,
        Form,
        MultiplesEvents,
    },
    data() {
        return {
            logon: false,
        };
    },
    methods: {
        login() {
            this.logon = !this.logon;
        },
    },
};
</script>
