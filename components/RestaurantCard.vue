<template>
    <div class="card" style="width:400px;">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="~/assets/images/restaurante.jpg" alt="Big Restaurant" />
            </figure>
        </div>
        <div class="card-content">
        <div class="media">
            <div class="media-content">
            <p class="title is-4 restaurant-name">
                {{ name }}
            </p>
            <div class="columns">
                <div class="column">
                <span class="tag"> {{ category }}</span>
                </div>
                <div class="column has-text-right">
                <button class="button is-info" v-on:click="addLike"> {{ likes }}</button>
                </div>
            </div>
            </div>
        </div>
        <div class="content">
            {{ description }}
            <a v-bind:href="slug">more info</a>.
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Big Restaurant',
                description: 'Esta es la descripción del restaurante',
                likes: 0,
                category: 'Burger',
                slug: 'restaurant-name',
            }
        },
        methods: {
            addLike() {
                // this.likes = this.likes + 1
                this.likes++
            }
        }
    }

</script>

<style scoped>

.restaurant-name {
  font-size: 30px;
  color: #00566e;
}

</style>