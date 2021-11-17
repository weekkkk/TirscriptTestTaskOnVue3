<template>
<transition-group name="post-list">
    <post-item @remove-post="removePost" :post="post" v-for="post in posts" :key="post.id"/>
</transition-group>
</template>

<script  lang="ts">
import { Vue, Options, Emit, Prop } from "vue-property-decorator";
import { PropType } from "@vue/runtime-core";
import Post from "@/types/Post";
import PostItem from "./PostItem.vue";

@Options({
    components: {PostItem},
    name: "PostList"
})

export default class PostList extends Vue {
    @Prop({required: true, type: Array as PropType<Post[]>}) posts: any;

    @Emit() removePost(post: Post) {
        return post;
    }
}
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    position: absolute;
    transform: translateX(300px);
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>