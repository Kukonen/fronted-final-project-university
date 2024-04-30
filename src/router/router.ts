import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import VHome from "../modules/home/view/VHome.vue";
import VMVC from "../modules/MVC/view/VMVC.vue";
import VMVVM from "../modules/MVVM/view/VMVVM.vue";
import VMVP from "../modules/MVP/view/VMVP.vue";


const routes: RouteRecordRaw[]= [
    {
        path: '/',
        component: VHome 
    },
    {
        path: '/MVC',
        component: VMVC 
    },
    {
        path: '/MVVM',
        component: VMVVM 
    },
    {
        path: '/MVP',
        component: VMVP 
    }
]

const router: Router = createRouter({
    routes,
    history: createWebHistory()
 })

export default router;