<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 flex-center">
                <img :src="user.icon" class="profile-img">
            </div>
            <div class="col-12 flex-center">
                <span>
                    {{ user.name }} {{ user.second_name }} {{ user.lastname }} {{ user.second_lastname }}
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    defineProps<{
        user: Array<any>
    }>()
</script>
<style>
    @import '../css/Profile.css'
</style>