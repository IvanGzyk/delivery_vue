<template>
  <div class="row">
    <div class="col-md-12">
      <router-link class="btn btn-primary m-1" to="/novo_produto">Novo</router-link>
    </div>
  </div>

  <div class="list-group-item" v-for="produto in produtos" :key="produto.uuid">
    <div class="row">
      <div class="col-md-8">
        <h5>{{ produto.nome }}</h5>
      </div>
      <div class="col-md-2 text-end">
        <h5>R$ {{ produto.preco }}</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProdutosList",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

import ProdutosService from "../../../services/ProdutosService";

import { Produto } from "../../../models/Produto";

let produtos = ref<Produto[]>([]);

ProdutosService.getProdutos().then((res) => {
  console.log(res);
  produtos.value = res;
});

defineExpose({
  produtos,
});
</script>