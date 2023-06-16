<template>
    <div class="container-fluid App">
        <div class="row navbar">
            <div class="col">
                <RouterLink class="nav-link" to="/"><i class="bi bi-house"/> Home</RouterLink>
            </div>
            <div class="col">
                <RouterLink class="nav-link" to="/about"><i class="bi bi-question-square"/> About</RouterLink>
            </div>
            <div class="col">
                <RouterLink class="nav-link" to="/about"><i class="bi bi-person"/> Perfil</RouterLink>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>
<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
    @import './css//App.css'
</style>