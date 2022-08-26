import { createStore } from 'vuex'

import sample from '../store/modules/sample'
import auth from '../store/modules/auth'

const store = createStore({
    modules: {
        sample,
        auth,
    },
})

export default store
