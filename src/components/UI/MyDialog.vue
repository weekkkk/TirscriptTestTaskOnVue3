<template>
  <div class="dialogBackgound" v-if="show" @click="hideDialog">
      <div class="formBox" @click.stop>
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

export default class MyDialog extends Vue {
    @Prop({default: false, type: Boolean}) show: any
    
    @Emit('update:show') hideDialog(event: any) {
        return false
    }
}

// export default {
//     name: 'my-dialog',
//     props: {
//         show: {
//             type: Boolean,
//             default: false
//         }
//     },
//     methods: {
//         hideDialog(event) {
//             this.$emit('update:show', false)
//         }
//     }
// }
</script>

<style>
.dialogBackgound {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
}
.formBox {
    width: 40%;
    background-color: #e5eaee;
    padding: 30px;
    border-radius: 10px;
}
</style>