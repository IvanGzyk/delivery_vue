<template>
    <div class="row">
        <div class="col-md-7">
            <h4>Pedido</h4>
        </div>
        <div class="col-md-5 text-end">
            R$ {{ store.pedido.total }}
        </div>
    </div>
    <hr>
    <div class="row" v-for="item in store.pedido.itens" :key="item.produto.uuid">
        <div class="col-md-1">
            {{ item.quantidade }}
        </div>
        <div class="col-md-7">
            {{ item.produto.nome }}
        </div>
        <div class="col-md-4 text-end">
            R$ {{ ( item.produto.preco * item.quantidade ) }}
        </div>
    </div>
</template>
<script lang="ts">
    export default {
        name: "PedidoList"
    }
</script>
<script setup lang="ts">
    import { usePedidoStore } from '../../../stores/PedidoStore';
    const store = usePedidoStore();
    defineExpose({
        store
    });
</script>