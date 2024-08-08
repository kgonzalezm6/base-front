import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import VueApexCharts from "vue3-apexcharts";
import VueDatePicker from '@vuepic/vue-datepicker';


// COMPONENTES INSTANCIADOS DE FORMA GLOBAL
import Button from './components/Button.vue'
import Modal from './components/Modal.vue'
import ToolTip from './components/ToolTip.vue'
import DataTable from './components/DataTable.vue'
import Input from './components/Input.vue'
import Card from './components/Card.vue'
import ValidateErrors from './components/ValidateErrors.vue'
import Logo from './components/Logo.vue'
import Switch from './components/Switch.vue'

import axios from 'axios'

library.add(fas)
library.add(fab)
library.add(far)

axios.defaults.baseURL = import.meta.env.VITE_MY_API_URL_BASE
axios.defaults.headers.common['App'] = import.meta.env.VITE_MY_APPNAME

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueApexCharts)

app.component('Icon', FontAwesomeIcon)
.component('Modal', Modal)
.component('Tool-Tip', ToolTip)
.component('Data-Table', DataTable)
.component('Button', Button)
.component('Input', Input)
.component('Card', Card)
.component('Validate-Errors', ValidateErrors)
.component('DatePicker', VueDatePicker)
.component('Logo', Logo)
.component('Switch', Switch)

app.mount('#app')



