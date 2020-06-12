<template>
  <div>
    <img class="runner first" src="../assets/avatar.jpg" alt="runner" />
    <img class="runner second" src="../assets/avatar.jpg" alt="runner" />
    <img class="runner third" src="../assets/avatar.jpg" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'timeline',  
  mounted() {
	let tl = gsap.timeline();
	tl.to('.first', { x: 200, duration: 2, ease: 'expo.out' })
	tl.to('.second', { x: 400, duration: 2, ease: 'expo.out' }, '<0.5')
  tl.to('.third', { x: 600, duration: 2, ease: 'expo.out' })
}


}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
