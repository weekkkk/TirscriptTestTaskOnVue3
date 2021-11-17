<template>
  <div>
    <h1>Posts page</h1>
    <my-input v-model="searchPostTitle" placeholder="Search..." class="findPost"/>

    <my-dialog v-model:show="dialogVisible">
      <h1>New post</h1>
      <post-form @create-post="createPost" />
    </my-dialog>
    <div class="postListHead">
      <div>
        <h2>Post list</h2>
        <my-pagination @show-page="showPage" :countPages="countPages" :curentPage="curentPage"></my-pagination>
      </div>
      <div>
        <my-button @click="showDialog"> Create new post </my-button>
        <my-select v-model="selectSort" :options="sortOptions" class="selectSortPost"/>
      </div>
    </div>
    <h1 class="createPostText">{{ createPostText }}</h1>
    <post-list @remove-post="removePost" :posts="shortList" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import Post from "@/types/Post";
import SortOption from "@/types/SortOption";
import SortOptionType from "@/types/SortOptionType";
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MyPagination from "@/components/UI/MyPagination.vue"

@Options({
  components: { PostList, PostForm, MyPagination },
  name: "MyApp",
})
export default class MyApp extends Vue {
  sizePage = 5;
  curentPage = 1;
  countPages = 0;

  posts: Post[] = [];
  dialogVisible = false;
  selectSort: SortOptionType = "title";
  sortOptions: SortOption[] = [
    { value: "title", name: "Sort from title" },
    { value: "body", name: "Sort from description" },
  ];
  searchPostTitle: string = "";
  createPostText: string = "Сlick on the button to create a post!";
  mounted() {
    console.log("mounted app");
  }
  createPost(post: Post) {
    if (this.posts.length == 0) this.createPostText = "";
    this.posts.push(post);
    this.dialogVisible = false;
    this.countPages = Math.ceil(this.posts.length / this.sizePage);
  }
  removePost(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    if (this.posts.length == 0)
      this.createPostText = "Сlick on the button to create a post!";
    this.countPages = Math.ceil(this.posts.length / this.sizePage);
  }
  showDialog() {
    this.dialogVisible = true;
  }
  sortPosts() {
    return [...this.posts].sort((p1: Post, p2: Post) =>
      p1[this.selectSort]?.localeCompare(p2[this.selectSort])
    );
  }
  searchPosts() {
    return this.sortPosts().filter((p: Post) =>
      p.title.toUpperCase().includes(this.searchPostTitle.toUpperCase())
    );
  }
  get shortList() {
    return this.searchPosts().slice((this.curentPage - 1) * this.sizePage, (this.curentPage - 1) * 5 + this.sizePage)
  }

  showPage(page: number) {
    this.curentPage = page;
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto&display=swap");

h1 {
  display: inline;
}
.postListHead h2 {
  display: inline;
}
.findPost {
  margin-top: 15px;
}
.postListHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.postListHead>div {
  display: inline-flex;
  align-items: center;
}
.selectSortPost {
  margin-left: 15px;
}
.createPostText {
  display: block;
  margin-top: 15px;
}
</style>