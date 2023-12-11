<template>
    <div class="nav default-width">
        <a href="#" class="logo">
            Portfolio site
        </a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Nav',
});
</script>

<style lang="scss" scoped>
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;

.nav {
    padding-top: 12px;
    margin-bottom: 0.5rem;

    .logo {
        font-size: 2em;
        margin-top: 10px;
        text-decoration: none;
    }

    @media screen and (min-width: $tabletBreakpoint) {
        margin-left: 10%;
        margin-right: 10%;
    }
}
</style>
