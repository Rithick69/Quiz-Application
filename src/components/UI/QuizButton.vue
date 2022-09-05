<template>
    <button @click="callback($event)"  :class="mode"><slot></slot></button>
</template>

<script>

export default {
    props:['mode'],
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style scoped>
button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color:  #3a0061;
	color:  white;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1rem;
	border-radius: 0.5rem;
    font-family: 'Montserrat', sans-serif;
}
button:disabled {
	opacity: 0.5;
}
</style>