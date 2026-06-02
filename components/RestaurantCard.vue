<template>

    <div class="card" style="width:400px;">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="image" alt="Big Restaurant" />
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
                            <a :href="category">
                                <span class="tag"> {{ category }}</span>
                            </a>
                        </div>
                        <div class="column has-text-right">
                            <button class="button is-info" v-on:click="onLikesButton"> {{ likes }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                {{ description }}
                <a :href="category + '/' + slug">more info</a>.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            category: {
                type: String,
                default: ''
            },
            slug: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            likes: {
                type: Number,
                default: 0
            },
            image: {
                type: String,
                default: ''
            }      
        },
        methods: {
            onLikesButton() {
                this.$emit('onLikesButton')
                // this.likes++
            }
        },
    }

</script>

<style scoped>

.restaurant-name {
  font-size: 30px;
  color: #00566e;
}

</style>