<template>
    <div>
        <img :src="image" alt="pessoa" height="50" />
        <ChangeImage @change-image="change" />
    </div>
    
</template>

<script>
import ChangeImage from './ChangeImage.vue';

export default {
    components: { ChangeImage },
    name: 'Picture',
    data() {
        return {
            image: './images/avatar.jpeg',
        };
    },
    methods: {
        change() {
            this.image = './images/avatar2.jpeg'
        }
    }
};
</script>
