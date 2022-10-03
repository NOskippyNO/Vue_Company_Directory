<script setup>
  import { ref } from 'vue'
  import { useAuth } from '@/Composables/useAuth'

  const { isAuthenticated, logout, user } = useAuth()

  const brand = ref('🏬 Company Directory 🏬')
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home' }" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <p v-show="isAuthenticated" class="px-2 py-4">
          Welcome back,
          <strong
            ><i>{{ user.name }}</i></strong
          >
        </p>
        <div v-if="isAuthenticated">
          <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
          <button href="#" class="menu-logout" @click="logout">Logout</button>
        </div>

        <div v-else>
          <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
        </div>
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
        & div {
          @apply py-2;
        }
        &-item {
          @apply rounded-md px-4 py-2 hover:bg-blue-300 hover:text-slate-900;
        }
        &-login {
          @apply rounded-md bg-blue-200  px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-blue-100;
        }
        &-logout {
          @apply mx-3 rounded-md bg-purple-300 px-4 py-2 text-blue-700 hover:bg-purple-700 hover:text-blue-100;
        }
      }
    }
  }
</style>
