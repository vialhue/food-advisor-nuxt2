<template>
  <section class="hero is-primary">
    <div class="hero-body">
        <button class="button is-info" @click="$emit('changeBannerSlogan')">Show Banner</button>
        <slot class="container" name="header">
        </slot>
    </div>
  </section>
</template>

<script>



</script>