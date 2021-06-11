<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div class="content-wrapper">
        <h2 class="content-header">{{ post.title }}</h2>
        <p class="content-blog-post" v-if="post.welcomeScreen">
          {{ post.blogPost }}
        </p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>

        <div :class="contentLink.classes" @click="contentLinkHandler">
          {{ contentLink.text }}
          <Arrow :class="contentLink.arrowClasses" />
        </div>
      </div>
    </div>

    <div class="blog-photo">
      <img :src="require(`../assets/blogPhotos/${blogPhoto}.jpg`)" alt="" />
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "BlogPost",
  components: { Arrow },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  computed: {
    blogPhoto() {
      const { welcomeScreen } = this.post;
      return this.post[welcomeScreen ? "photo" : "blogCoverPhoto"];
    },
    contentLink() {
      const { welcomeScreen } = this.post;
      const classes = `content-link${
        welcomeScreen ? " content-link-light" : ""
      }`;
      const text = welcomeScreen ? "Login/Register" : "View Post";
      const arrowClasses = `arrow${welcomeScreen ? " arrow-light" : ""}`;
      return {
        classes,
        text,
        arrowClasses,
      };
    },
  },
  methods: {
    contentLinkHandler() {
      console.log("clicked");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  &-wrapper {
    display: flex;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media (min-width: 700px) {
      min-height: 650px;
      max-height: 650px;
      flex-direction: row;
    }
    &:nth-child(even) {
      .blog-content {
        order: 2;
      }
      .blog-photo {
        order: 1;
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }
  }
  &-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      flex: 4;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.content {
  &-wrapper {
    max-width: 375px;
    padding: 72px 24px;
    @media (min-width: 700px) {
      padding: 0 24px;
    }
  }
  &-header {
    font-size: 32px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 24px;
    @media (min-width: 700px) {
      font-size: 40px;
    }
  }
  &-blog-post,
  &-preview {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
  }
  &-preview {
    font-size: 13px;
    max-height: 24px;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &-link {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: 0.5s ease-in all;
    &:hover {
      border-bottom-color: #303030;
    }
    &-light:hover {
      border-bottom-color: #ffff;
    }
  }
}
.no-user:first-child {
  .blog-content {
    background-color: #303030;
    color: #fff;
  }
}
</style>
