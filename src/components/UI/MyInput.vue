<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script lang="ts">
import { Vue, Emit, Prop } from "vue-property-decorator";

export default class PostInput extends Vue {
    @Prop({type: String}) modelValue: any;

    @Emit("update:modelValue") updateInput(event: any) {
        return event.target.value;
    }
}
</script>

<style>
.input {
    width: 100%;
    color: #2d2c30;
    background-color: #e5eaee;
    border: 1px solid #2d2c30;
    border-radius: 10px;
    padding: 15px;
}
</style>