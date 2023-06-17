<template>
    <div class="container-fluid App">
        <div class="row navbar">
            <div class="col-1 nav-link">
                <RouterLink to="/" title="Home"><i class="bi bi-house"/></RouterLink>
            </div>
            <div class="col-1 nav-link">
                <RouterLink to="/about" title="About"><i class="bi bi-question-square"/></RouterLink>
            </div>
            <div class="col-1 nav-link">
                <RouterLink to="/about" title="Perfil"><i class="bi bi-person"/></RouterLink>
            </div>
            <div class="col-1 nav-link">
                <RouterLink to="/about" title="Perfil"><i class="bi bi-person"/></RouterLink>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>
<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    defineProps<{
        theme?:boolean

    }>()

    function setTheme() {
        console.log(theme)
    }
</script>
<style>
    @import './css/App.css';
</style>