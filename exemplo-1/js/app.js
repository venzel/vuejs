const MyApp = {
    data() {
        return {
            name: 'tiago',
            input_name: '',
        };
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            this.name = this.input_name;
        },
    },
};

Vue.createApp(MyApp).mount('#app');
