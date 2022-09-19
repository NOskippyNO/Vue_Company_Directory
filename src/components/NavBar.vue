<script setup>
  import { ref } from 'vue'
  const brand = ref('🏬 Company Directory 🏬')
</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
      </div>
      <div class="menu">
        <a href="#" class="menu-item">Departments</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-login">Logout</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
  nav {
    @apply flex h-20 bg-slate-800 text-slate-200;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;

      .brand {
        &-title {
          @apply text-2xl font-bold text-blue-300;
        }
      }
      .menu {
        @apply flex gap-3;
        &-item {
          @apply rounded-md px-4 py-2 hover:bg-blue-300 hover:text-slate-900;
        }
        &-login {
          @apply rounded-md bg-blue-200 px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-blue-100;
        }
      }
    }
  }
</style>
