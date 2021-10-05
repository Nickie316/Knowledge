<template>
  <header class="header">
     <a class="toggle"
         @click="toggleMenu" 
         v-if="!hideToggle" >
        <i class="fa fa-lg" :class="icon"></i>
     </a>
     <h1 class="title">
         <router-link to="/">{{ title }}</router-link>
     </h1>
     <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from './UserDropdown.vue'

export default {
   name: 'Header',
   components: { UserDropdown },
   props: {
      title: String,
      hideToggle: Boolean ,
      hideUserDropdown: Boolean
   },
   computed: {
      icon() {
         return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
      }
   },
   methods: {
      toggleMenu() {
         this.$store.commit('toggleMenu')
      }
   }
}
</script>

<style>
   .header {
      grid-area: header;
      background: linear-gradient(to right, #1E469A, #49A7C1);

      display: flex;
      justify-content: center; /* Main Axis */
      align-items: center; /* Cross Axis */
   }

   .title {
      font-size: 1.2rem;
      color: #FFF;
      font-weight: 100;
      flex-grow: 1;
      text-align: center;
   }

   .title a {
      color: #FFF;
      text-decoration: none;
   }

   .title a:hover {
      color: #FFF;
      text-decoration: none;
   } 

   header.header > a.toggle {
      width: 60px;
      height: 100%;
      color: #FFF;
      justify-self: flex-start;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   header.header > a.toggle:hover {
      color: #FFF;
      background-color: rgba(0, 0, 0, 0.2);
   }
</style>