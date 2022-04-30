<script setup lang="ts">
    
    import Header from './components/Header.vue';
    
    defineExpose({
        Header
    });

</script>

<template>
    <Header/>
    <router-view></router-view>
</template>
