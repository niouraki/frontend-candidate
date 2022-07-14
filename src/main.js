import { createApp } from 'vue'
import App from './App.vue'
import DatePicker from '@vuepic/vue-datepicker';
import VueApexCharts from "vue3-apexcharts";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App).component('Datepicker', DatePicker).component('font-awesome-icon', FontAwesomeIcon);

app.use(VueApexCharts);
app.mount('#app');