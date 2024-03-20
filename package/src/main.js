import { createApp } from 'vue';
import './style.css';
import ContributionMap from './components';

import App from './App.vue';

const app = createApp(App);
app.use(ContributionMap);
app.mount('#app');
