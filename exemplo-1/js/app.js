const MyApp = {
    data() {
        return {
            name: 'tiago',
            input_name: '',
        };
    },
    methods: {
        sauda: function () {
            console.log(this);
        },
        submitForm(e) {
            e.preventDefault();

            console.log(this);

            this.name = this.input_name;
        },
    },
};

Vue.createApp(MyApp).mount('#app');
