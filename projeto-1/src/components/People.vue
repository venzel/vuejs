<template>
    <div>
        <info :email="email" />
        <p v-if="working">Trabalhando ok!</p>
        <p v-else>Desempregado!</p>
        <p v-show="show_email">Mande mensagem para {{ email }}</p>
        <button @click="showEmail">{{ label_bottom }}</button>
    </div>
</template>

<script>
import Info from './Info.vue';

export default {
    name: 'People',
    components: {
        Info,
    },
    data() {
        return {
            name: '...',
            working: false,
            show_email: true,
            email: 'tiago@gmail.com',
            label_bottom: 'Esconder email',
        };
    },
    methods: {
        showEmail() {
            this.show_email = !this.show_email;

            if (!this.show_email) {
                this.label_bottom = 'Exibir email';
            } else {
                this.label_bottom = 'Esconder email';
            }
        },
    },
};
</script>
