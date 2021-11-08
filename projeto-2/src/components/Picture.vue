<template>
    <div>
        <img :src="image" alt="imagem" height="40">
        <ChangeImage @changeImage="change" />
    </div>
</template>

<script>
import ChangeImage from './ChangeImage.vue'

export default {
    name: 'Picture',
    components: { ChangeImage },
    data() {
        return {
            image: '',
        }
    },
    created() {
        this.image = './images/avatar.jpeg';
    },
    methods: {
        change() {
            this.image = './images/avatar2.jpeg';
        }
    }
}
</script>