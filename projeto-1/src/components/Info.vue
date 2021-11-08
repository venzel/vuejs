<template>
    <div>
        <Picture />
        <p>Tecnologias backend:</p>
        <ul>
            <li v-for="(technologie, index) in backend_technologies" :key="index">{{ index }} {{ technologie }}</li>
        </ul>
        <p>Tecnologias frontend:</p>
        <ul>
            <li v-for="(t, i) in frontend_technologies" :key="t.id">{{ i }} - {{ t.name }}</li>
        </ul>
        <p v-if="active">Meu perfil no githuh eh: <a :href="link" target="_blank">Venzel</a></p>

        <p>Email via pros {{ email }}</p>
    </div>
</template>

<script>
import Picture from './Picture.vue';

export default {
    name: 'Info',
    components: { Picture },
    props: {
        email: String,
    },
    data() {
        return {
            active: true,
            link: 'http://www.github.com/venzel',
            backend_technologies: ['c', 'python', 'java'],
            frontend_technologies: [
                {
                    id: 100,
                    name: 'angular',
                },
                {
                    id: 200,
                    name: 'React',
                },
                {
                    id: 300,
                    name: 'Vue',
                },
            ],
        };
    },
};
</script>
