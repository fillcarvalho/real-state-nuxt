<template>
  <h1 class="red">hello {{$route.params.id}}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
