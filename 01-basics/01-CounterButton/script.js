import Vue from './vue.esm.browser.js';

const app = new Vue({
        el: '#app',
        data: {
            countedNumber: 0,
        },
        methods: {
            addOne: function() {
                this.countedNumber += 1
            }
        }
    })
    // Рекомендуется использовать МЕТОД в качестве обработчика события