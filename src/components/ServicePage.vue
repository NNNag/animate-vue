<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ description }}</h2>
  </div>
</template>
<script>
export default {
  name: 'nameFromServiceComponent',
  data () {
    return {
      msg: 'Service to Naveen',
      description: 'It is a Service page'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter { /* starting style */
    	opacity: 0;
    }
    .v-enter-active { /* active entering style */
    	transition: opacity 2s ease-in; 
    }
    .v-leave-active { /* active leaving style */
    	transition: opacity 2s ease-out; 
    } 
    .v-leave-to { /* ending style */
    	opacity: 0;
    }
</style>
