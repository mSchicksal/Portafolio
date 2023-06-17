<template>
    <div class="container main">
        <div class="row">
            <template v-for="(v) in users">
                <div class="col-12 profile">
                    <Profile :user="v"></Profile>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
    import Profile from './user/Profile.vue';
    import icon from '../assets/img/profile.png'

    let users = {
        items: {
                id: 1,
                name: 'Álvaro',
                second_name: 'Andrés',
                lastname: 'Catalán',
                second_lastname: 'Zavala',
                icon: icon,
                verified: 1,
                information: {
                    lenguajes: {
                        'php': '90%',
                        'laravel': '80%',
                        'python': '70%',
                        'django': '70%',
                        'vue js': '90%',
                        'databases': '80%',
                        'react': '20%',
                    },
                    description: 'Profesional con amplios conocimientos en desarrollo de soluciones web con más de 2 años de experiencia en desarrollo frontend, backend. Busco crecimiento personal en el área informática reforzando así mis habilidades en el manejo de tecnologías y comunicación.',
                },
            }
    }
</script>
<style>
    @import './css/HomePage.css'
</style>