<template>
  <div class="home">
    <blog-post :post="welcomeScreen"></blog-post>
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    ></blog-post>
    <div class="blog-card-wrap">
      <div class="blog-card-wrap-container">
        <h3 class="blog-card-wrap-text">View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          ></blog-card>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="updates-container">
        <h2 class="updates-text">
          Never miss a post. Register for your free account!
        </h2>
        <div class="updates-router-button" @click="updatesLinkHandler()">
          {{ actionText }}
          <Arrow class="arrow arrow-light" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
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

      actionText: "Register for Story of This Path!",
    };
  },
  computed: {
    ...mapGetters("sampleBlogCards"),
  },
  methods: {
    updatesLinkHandler() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  &-text {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  &-container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
  }
  &-router-button {
    display: flex;
    font-size: 14px;
    text-decoration: none;
    @media (min-width: 800px) {
      margin-left: auto;
    }
  }
  &-text {
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 800px) {
      // on D
      text-align: initial;
      font-size: 40px;
    }
  }
}
</style>
