<template>
  <header class="header">
    <nav class="header-container">
      <div class="header-brand" @click="brandHandler">
        Story of This Path
      </div>
      <div class="header-nav-links">
        <ul class="header-links" v-show="!mobile">
          <div class="header-link" @click="goHome">Home</div>
          <div class="header-link" @click="goBlogs">Blogs</div>
          <div class="header-link">Create Post</div>
          <div class="header-link">Login/Register</div>
        </ul>
      </div>
    </nav>
    <menuIcon
      @click="toggleMobileNav"
      class="header-menu-icon"
      v-show="mobile"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <div class="mobile-nav-link" to="#">Home</div>
        <div class="mobile-nav-link" to="#">Blogs</div>
        <div class="mobile-nav-link" to="#">Create Post</div>
        <div class="mobile-nav-link" to="#">Login/Register</div>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "TheNavigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      mobile: null, // if mobile viewport or not
      mobileNav: null, //if mobilenavigation is open
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreenSize); // when created, listen to resize and check screensize
    this.checkScreenSize();
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goBlogs() {
      this.$router.push({ name: "Blogs" });
    },
    brandHandler() {
      this.$router.push({ name: "Home" });
      console.log("works");
    },
    checkScreenSize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      console.log("works");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  &-container {
    display: flex;
    padding: 25px 0;
  }

  &-brand {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  &-nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-right: 32px;
  }

  &-links {
    display: flex;
    flex-direction: row;
  }

  &-link {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
  }

  &-link:hover {
    color: #1eb8b8;
    cursor: pointer;
  }

  &-link:last-child {
    margin-right: 0;
  }

  &-menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;

  &-link {
    padding: 15px 0;
    color: #fff;
    cursor: pointer;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
