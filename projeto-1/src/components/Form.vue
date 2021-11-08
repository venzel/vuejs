<template>
    <form @submit="sendForm($event)">
        <div><input type="text" v-model="name" /></div>
        <div><input type="text" v-model="email" /></div>
        <div><input type="submit" value="Enviar" /></div>
    </form>
</template>

<script>
import InputText from './forms/InputText.vue';
import InputSubmit from './forms/InputSubmit.vue';

export default {
    name: 'Form',
    components: { InputText, InputSubmit },
    data() {
        return {
            name: '',
            email: '',
        };
    },
    methods: {
        sendForm(e) {
            e.preventDefault();

            const name = this.name;
            const email = this.email;

            if (!name || !email) {
                alert('Preencha todos os campos!');
            } else {
                alert(name + ' ' + email);
            }
        },
    },
};
</script>
