import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Produto from './views/produto/Produto.vue';
import ProductRegistration from './views/produto/components/ProductRegistration.vue';
import Pedido from './views/pedido/Pedido.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/produto",
            name: "Produto",
            component: Produto
        },
        {
            path: "/novo_produto",
            name: "ProductRegistration",
            component: ProductRegistration
        },
        {
            path: "/pedido",
            name: "Pedido",
            component: Pedido
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound
        }
    ]
});

export default router;