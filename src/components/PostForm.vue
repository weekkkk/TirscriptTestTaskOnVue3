<template>
        <form @submit.prevent>
            <my-input
            v-model="post.title"
            class="createPostInput"
            type="text"
            placeholder="Title"
            autofocus
            />
            <my-input 
            v-model="post.body"
            class="createPostInput"
            type="text" 
            placeholder="Description"
            />
            <my-button
            @click="createPost"
            class="createPostButton" 
            >Create</my-button>
        </form>
</template>

<script lang="ts">
import { Vue, Emit } from "vue-property-decorator";
import Post from "@/types/Post";

export default class PostForm extends Vue {
    post: Post = {id: 0, title: "", body: ""}
    
    @Emit() createPost() {
        this.post.id = Date.now();
        return Object.assign({}, this.post);
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.createPostInput {
    margin-top: 15px;
}
.createPostButton {
    margin-top: 15px;
}
</style>