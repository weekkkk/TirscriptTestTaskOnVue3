<template>
    <div class="post">
        <div class="postText">
            <div><b>Title:</b> {{post.title}}</div>
            <div><b>Description:</b> {{post.body}}</div>
        </div>
        <my-button
        @click="removePost"
        >Remove</my-button>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Emit, Prop } from "vue-property-decorator";
import { PropType } from "@vue/runtime-core";
import Post from "@/types/Post";
import MyInput from "./UI/MyInput.vue";

@Options({
    components: {MyInput},
    name: "PostItem"
})

export default class PostItem extends Vue {
    @Prop({required: true, type: Object as PropType<Post>}) post: any;
 
    @Emit() removePost() {
        return this.post;
    }
}
</script>

<style scoped>
    .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-height: 100%;
        color: #2d2c30;
        background-color: #e5eaee;
        border-radius: 10px;
        padding: 30px;
        margin-top: 15px;
    }
    .postText {
        max-height: 100%;
        display: block;
        margin-right: 30px;
    }
    .postText div {
        width: 100%;
        max-height: 100%;
        display: inline-block;
    }
</style>