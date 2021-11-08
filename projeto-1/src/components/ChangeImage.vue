<template>
    <div>
        <button @click="$emit('changeImage')">Alterar imagem</button>
    </div>
</template>

<script>
export default {
    name: 'ChangeImage',
    emits: ['changeImage'],
    data() {
        return {}
    }
}
</script>