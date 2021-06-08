<template>
  <div class="home">
    <blog-post :post="welcomeScreen"></blog-post>
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    ></blog-post>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles about programming, HTML, CSS, Javascript & more. Don't miss out, register today!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is the title!",
          blogHTML: "This is the post",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is the title!",
          blogHTML: "This is the post",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
