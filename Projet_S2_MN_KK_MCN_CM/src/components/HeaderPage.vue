<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
	import LogoIcon from '@/components/icons/iconLogo.vue'
  import { RouterLink } from 'vue-router'

	
  const activeMenu = ref(false)

  function closeMenu() {
	  activeMenu.value = false
  }

</script>

<template>
  <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-backgroundcolor px-6 py-2 transition-all duration-300 ease-in-out">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4">

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between" @click="activeMenu = !activeMenu"
      > 
        <div class="ease h-[2px] w-full transform rounded-full bg-text transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-text transition duration-300" :class="{ 'bg-white opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-text transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
      </button>

			<nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-contrastcolor text-2xl text-backgroundcolor transition-all duration-300 ease-in-out"
      :class="{ '!visible opacity-100': activeMenu }">
		    <ul class="mt-[25vh] ml-16">
		      <li><RouterLink class="menu-link" to="/ressources" @click="closeMenu">Ressources</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/communaute" @click="closeMenu">Communauté</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/cartes" @click="closeMenu">Cartes interactives</RouterLink></li>
          <li><RouterLink class="menu-link" to="/a_propos" @click="closeMenu">A propos</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/contact" @click="closeMenu">Contact</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/" @click="closeMenu">S'inscrire</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>