<script setup>
</script>
<template>
    <div class="alert">

        <slot></slot>
    </div>
</template>

<style scoped>

.alert{
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    background-color: rgba(0,0,0,.7);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.2rem;
    padding: .5rem;
    border-left:.5rem red solid ;
}
</style>