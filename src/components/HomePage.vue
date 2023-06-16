<template>
    <div class="container-fluid main">
        <div class="row">
            <div class="col-4 profile">
                <template v-for="(k) in users">
                    <template v-for="(v) in k">
                        <Profile :user="v"></Profile>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import Profile from './profile/Profile.vue';
    import icon from '../assets/img/profile.png'

    let users = {
        items: [
            {
                id: 1,
                name: 'Alvaro',
                second_name: 'Andrés',
                lastname: 'Catalan',
                second_lastname: 'Zavala',
                icon: icon
            },
        ]
    }
</script>
<style>
    @import './css/HomePage.css'
</style>