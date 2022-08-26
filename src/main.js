import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* @router */
import router from './router/index'

/* @store */
import store from './store'

/* @primevue */
//primeVue Config
import PrimeVue from 'primevue/config'
//primevue themes
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

/* @vueToast */
import VueToast from 'vue-toast-notification'
//vuetoast theme
import 'vue-toast-notification/dist/theme-sugar.css'

/* @layouts */
import AppLayout from './layouts/AppLayout.vue'
import Container from './components/Container.vue'
import Modal from './components/Modal.vue'
import ProgressSpinner from 'primevue/progressspinner'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

/* socket IO */
/* import VueSocketIO from 'vue-3-socket.io'
const socket = new VueSocketIO({
    debug: true,
    connection: 'https://redis-crm-api.herokuapp.com',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_',
    },
}) */

/* import SocketIO from 'socket.io-client'
const socket = new VueSocketIO({
    debug: true,
    connection: SocketIO('https://redis-crm-api.herokuapp.com'), //options object is Optional
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_',
    },
}) */

createApp(App)
    .use(router)
    .use(store)
    .use(VueToast)
    .use(PrimeVue)
    .use(ToastService)
    .component('AppLayout', AppLayout)
    .component('Container', Container)
    .component('Modal', Modal)
    .component('Toast', Toast)
    .component('ProgressSpinner', ProgressSpinner)
    .mount('#app')
