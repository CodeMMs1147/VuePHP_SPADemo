import './bootstrap';

window.Vue = require('vue').default;

Vue.component('comments-index', require('./components/comments/index.vue').default)

const app = new Vue({
    el: '#app'
});