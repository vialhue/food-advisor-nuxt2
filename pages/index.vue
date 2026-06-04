<template>
  <div>
    <Hero @changeBannerSlogan="changeBannerSlogan">
      <Banner 
        v-if="showBannerSlogan"
        slot="header" 
      />
      <Slogan 
        v-else
        slot="header" 
      />
    </Hero>
    <div class="container">
      <section class="section">
        <h1 class="title is-1">
          FoodAdvisor
        </h1>
        <div class="columns is-multiline">
          <RestaurantCard 
            v-for="(item, index) in restaurants" 
            :key="index" 
            class="restaurant-card"
            v-bind="item" 
            @:onLikesButton="addLike(item)"
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
import { db } from '~/plugins/firebase'

export default {
  components: {
    RestaurantCard,
    Hero,
    Banner,
    Slogan
  },
  // middleware: 'auth',
  data() {
    return {
      showBannerSlogan: true,
      restaurants: []
    }
  },      
  created() {
    const data = db.collection('restaurants').get()
    data
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const restaurant = {
            id: doc.id,
            ...doc.data()
          }
          this.restaurants.push(restaurant)
        })
      })
      .catch((error) => {
        console.log(error)
      })
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
      if (response.status == 200) {
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