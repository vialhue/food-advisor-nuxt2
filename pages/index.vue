<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">
        FoodAdvisor
      </h1>
      <button class="button is-info">
        Enter
      </button>
      <RestaurantCard></RestaurantCard>
    </section>
  </div>
</template>

<script>
  import RestaurantCard from '../components/RestaurantCard.vue';

  export default {
    components: {
      RestaurantCard
    }
  }
</script>

<style></style>