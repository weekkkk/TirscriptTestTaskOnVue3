<template>
  <select
  :value="modelValue" 
  @change="changeOptions" 
  class="select"
  >
      <option  selected  value="">No sort</option>
      <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
      >
      {{option.name}}
      </option>
  </select>
</template>

<script lang="ts">
import { Vue, Emit, Prop } from "vue-property-decorator";
import SortOption from "@/types/SortOption";
import { PropType } from "@vue/runtime-core";

export default class MySelect extends Vue {
    @Prop({type: String}) modelValue: any;
    @Prop({type: Array as PropType<SortOption[]>, default: () => []}) options: any;
    
    @Emit("update:modelValue") changeOptions(event: any) {
        return event.target.value;
    }
}
</script>

<style>
.select {
    font-weight: bold;
    color: #2d2c30;
    background-color: #e5eaee;
    border: 1px solid #2d2c30;
    border-radius: 10px;
    padding: 15px;
}
</style>