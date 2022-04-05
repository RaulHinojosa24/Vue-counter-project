Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        updateCounter(value) {
            this.counter += value;
        }
    }
}).mount("#app");