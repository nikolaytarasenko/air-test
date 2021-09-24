import { createApp } from 'vue';
import App from './App.vue';
import ScrollAnimation from './directives/scrollanimation';

const app = createApp(App);

app.directive('scrollanimation', ScrollAnimation);

app.mount('#app');
