<template>
    <div class="container-fluid App">
        <div class="row navbar">
            <div class="col-1 nav-link">
                <RouterLink to="/"><i class="bi bi-house"/>&nbsp;Home</RouterLink>
            </div>
            <div class="col-1 nav-link">
                <RouterLink to="/about"><i class="bi bi-question-square"/>&nbsp;About</RouterLink>
            </div>
            <div class="col-1 nav-link">
                <RouterLink to="/about"><i class="bi bi-person"/>&nbsp;Perfil</RouterLink>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>
<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
    @import './css/App.css'
</style>