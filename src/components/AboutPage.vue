<!--<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ description }}</h2>
  </div>
</template>-->
<template>
  <div>
    <button @click="toggleModal">Open</button>
    	<transition name="fade"> // named transition 
        <div v-if="isOpen" class="modal">
          <button @click="toggleModal">Close</button>
        </div>
      </transition>
  </div> 
</template>
<!--<script>
export default {
  name: 'nameFromAboutComponent',
  data () {
    return {
      msg: 'About Naveen',
      description: 'It is a About page'
    }
  }
}
</script>-->
<script>
  export default {
    data() {
      return {
        isOpen: false
      }
      },
      methods: {
        toggleModal() {
          this.isOpen = !this.isOpen
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter {
      opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s ease-out;
    }
    .fade-leave-to {
      opacity: 0;
    }
</style>
