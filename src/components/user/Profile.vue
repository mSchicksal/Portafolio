<template>
    <div class="container-fluid">
        <div class="row flex-center">
            <div class="col-4">
                <img :src="user.icon" class="profile-img">
                <span class="profile-name flex-center">
                    {{ user.name }}
                    {{ user.second_name }}
                    {{ user.lastname }}
                    {{ user.second_lastname }}
                    &nbsp;
                    <i v-if="user.verified == 1" class="bi bi-patch-check-fill profile-verified" title="Perfil verificado"></i>
                </span>
            </div>
            <div class="col-8">
                <div class="row">
                    <!-- SKILLS -->
                    <div class="col-12 flex-center">
                        <span class="title">Mis Habilidades</span>
                    </div>
                    <div class="col-12 skills">
                        <div class="skills-progress-bar" v-for="(y, x) in user.information.lenguajes">
                            <div class="skills-progress-bar-fill" :style="getBackgroundByLenguaje(y)">
                                <span class="skills-languaje">{{ x }} {{ y }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- DESCRIPTION -->
                    <div class="col-12 flex-center">
                        <span class="title">Descripcion</span>
                    </div>
                    <div class="col-12">
                        <span>
                            {{ user.information.description }}
                        </span>
                    </div>
                    <!-- LINKS -->
                    <div class="col-12">
                        <!-- {{ user.information }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    // const props = defineProps(['user'])
    // defineProps({
    //     user: Array
    // })
    defineProps<{
        user: Array<any>
    }>()
    function getBackgroundByLenguaje(percent: string) {
        return 'width: ' + percent;
    }
</script>
<style>
    @import '../css/Profile.css'
</style>