<script setup>
  import { faker } from '@faker-js/faker'

  const fullName = faker.name.fullName()

  const selectCard = () => {
    console.log(' ${fullName} selected')
  }
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-image">
      <img :src="faker.internet.avatar()" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ fullName }}</p>
      <p class="card-details-job">{{ faker.name.jobTitle() }} , {{ faker.name.jobArea() }}</p>
      <p class="card-details-quote">"{{ faker.lorem.paragraph() }}"</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md bg-blue-700 p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-800;
    &-image {
      img {
        @apply mx-auto rounded-full object-contain;
      }
    }
    &-details {
      @apply flex flex-col gap-2 pt-6 text-center;
      &-name {
        @apply text-3xl font-thin tracking-wider text-blue-300;
      }
      &-job {
        @apply -mt-2 text-xs font-bold text-blue-200;
      }
      &-quote {
        @apply pt-4 text-lg italic text-blue-200;
      }
    }
  }
</style>
