<template>

  <div>

    <Hero @changeBannerSlogan="changeBannerSlogan">
        <Banner slot="header" v-if="showBannerSlogan"></Banner>
        <Slogan slot="header" v-else></Slogan>
    </Hero>

    <div class="container">

      <section class="section">

        <h1 class="title is-1">FoodAdvisor</h1>
            <div class="columns is-multiline">
              <RestaurantCard v-for="(item, index) in restaurants" :key="index"
                v-bind="item"
                v-on:onLikesButton="addLike(item)"
                class="restaurant-card"
              />  
            </div>
      </section>

    </div>

  </div>
</template>

<script>
  import RestaurantCard from '~/components/RestaurantCard.vue';
  import Hero from '~/components/Hero.vue';
  import Banner from '~/components/Banner.vue';
  import Slogan from '~/components/Slogan.vue';
  import api from '~/services/api';

  export default {
    components: {
      RestaurantCard,
      Hero,
      Banner,
      Slogan
    }, 
    async asyncData() {
      try {
        const { data } = await api.getRestaurants()
        return { restaurants: data }
      } catch (error) {
        error({ statusCode: 404, message: 'Restaurant not found' })
      }
    },    
    // async created() {
    //   const response = await api.getRestaurants()
    //   if(response.status == 200) {
    //     this.restaurants = response.data
    //   }
    // },
    data() {
      return {
        showBannerSlogan : true,
        restaurants: []
      }
    },
    methods: {
      async addLike(restaurant) {
        const payload = {
          id: restaurant.id,
          data: {
            likes: restaurant.likes + 1
          }
        }
        const response = await api.putSumRestaurantLikes(payload)
        if(response.status == 200) {
          restaurant.likes++
        }
      },
      changeBannerSlogan() {
        this.showBannerSlogan = !this.showBannerSlogan
      }
    }

  }
</script>

<style>

.restaurant-card {
  margin: 10px 10px;
  max-width: 300px;
}

</style>