import {createStore} from 'vuex';
import toast from "./modules/toast.ts";

const store = createStore({
    modules: {
        toast: toast
    }
})

export default store;