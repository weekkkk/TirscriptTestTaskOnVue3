<template>
  <div class="pages">
    <div v-for="page in countPages" :key="page" @click="showPage(page)" class="page" :class="{'curent-page': page === curentPage}">{{ page }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Emit, Prop } from "vue-property-decorator";

export default class PostInput extends Vue {
    @Prop({required: true, type: Number}) countPages: any;
    @Prop({required: true, type: Number}) curentPage: any;

    @Emit() showPage(page: number) {
        return page;
    }
}
</script>

<style scoped>
.pages {
  display: inline-flex;
  margin-left: 15px;
}
.page {
  background-color: #e5eaee;
  border: 1px solid #2d2c30;
  border-radius: 10px;
  padding: 5px;
  margin-right: 5px;
  transition: 0.1s;
}
.page:hover {
  transform: scale(1.1);
  color: #e5eaee;
  background-color: #2d2c30;
  border: none;
}
.curent-page {
  color: #e5eaee;
  background-color: #2d2c30;
  border: none;
}
</style>