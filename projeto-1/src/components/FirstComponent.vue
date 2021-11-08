<template>
    <div>
        <h2>Ola vue!</h2>
        <p>Nome do componente {{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'FirstComponet',
    data() {
        return {
            title: 'Primeiro componente!',
        };
    },
};
</script>
