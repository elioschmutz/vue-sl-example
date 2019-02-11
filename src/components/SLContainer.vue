<template>
  <div class="hello">
    <h1>{{ containerid }}</h1>
    <p>{{$store.state.layouts[containerid]}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SLContainer',
  props: {
    containerid: String
  }
}
</script>


<style scoped>

</style>
