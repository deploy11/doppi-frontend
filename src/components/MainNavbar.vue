<template>
  <header class="navbar">
    <div class="navbar-container">
      <img :src="require('@/assets/Logo.png')" alt="Logo" class="logo" @click="goto"/>
      <nav class="nav-menu">
        <ul>
          <li><router-link to="/">Biz haqimizda</router-link></li>
          <li><router-link to="/news">Yangliklar</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
    </div>
  </header>

  <nav class="mobile-menu" :class="{ active: isMenuOpen }">
    <ul>
      <li><router-link to="/">Biz haqimizda</router-link></li>
      <li><router-link to="/news">Yangliklar</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '@/assets/Logo.png'; // To'g'ri nom bilan yangilandi

import '../styles/Navbar.css';

export default {
  name: 'MainNavbar',
  setup() {
    const isMenuOpen = ref(false);
    const router = useRouter();

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const goto = () => {
      router.push('/');
    };

    return {
      isMenuOpen,
      toggleMenu,
      goto,
      logo, // Adding logo to return
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
