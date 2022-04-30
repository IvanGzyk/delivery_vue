<template>
    <div class="list-group-item" v-for="produto in produtos" :key="produto.uuid">
        <div class="row">
            <div class="col-md-8">
                <h5>{{ produto.nome }}</h5>
            </div>
            <div class="col-md-2 text-end">
                <h5>R$ {{ produto.preco }}</h5>
            </div>
            <div class="col-md-2 text-end">
                <button class="btn btn-outline-info btn-sm" @click="adicionar(produto)">
                    <span class="fa fa-plus"></span>
                </button>
                <button class="btn btn-outline-info btn-sm" @click="remover(produto)" style="margin-left: 5px;">
                    <span class="fa fa-minus"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
        
    export default {
        name: "ProdutosList"
    }

</script>

<script setup lang="ts">

    import { ref } from 'vue';

    import ProdutosService from '../../../services/ProdutosService';

    import { Produto } from '../../../models/Produto';

    import { usePedidoStore } from '../../../stores/PedidoStore';

    let produtos = ref<Produto[]>([]);

    ProdutosService.getProdutos().then((res) => {
        console.log(res);
        produtos.value = res;
    })
    
    const store = usePedidoStore();

    const adicionar = (produto: Produto) => {
        store.adicionarItem(produto);
    }

    const remover = (produto: Produto) => {
        store.removerItem(produto);
    }

    defineExpose({
        produtos,
        adicionar,
        remover
    });

</script>