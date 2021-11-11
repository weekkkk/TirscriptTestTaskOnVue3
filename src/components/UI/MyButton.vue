<template>
    <button class="button">
    <b><slot></slot></b>
    </button>
</template>

<script lang="ts">
export default{
    name: 'my-button',
}
</script>

<style>
.button {
    z-index: 1;
    padding: 15px 30px;
    color: #2d2c30;
    background-color: #e5eaee;
    border: 1px solid #2d2c30;
    border-radius: 10px;
    transition: 0.1s;
}
.button:hover {
    transform: scale(1.1);
    color: #e5eaee;
    background-color: #2d2c30;
    border: 1px solid #e5eaee;
}
</style>