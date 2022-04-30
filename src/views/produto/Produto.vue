<template>
    <div class="row">
        <div class="produto col-md-12">
            <ProdutosList/>
        </div>
    </div>
</template>

<script setup lang="ts">

    import ProdutosList from '../produto/components/ProdutosList.vue'

    defineExpose({
        ProdutosList
    })

</script>

<style scoped>

    .itens {
        padding: 30px;
    }

    .pedido {
        padding: 30px;
        background-color: lightcyan;
        height: 100vh;
    }
    
</style>