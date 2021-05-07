<template>
	<Nav :total_cart=total_cart></Nav>
	
	<router-view @removeItemFormCart="removeTotalCart" @addProduct="addTotalCart" />
	<Footer/>
</template>

<script>
	import Nav from '@/components/Nav.vue';
	import Footer from '@/components/Footer.vue';
	export default {
		name: 'App',
		components: {
			Nav,
			Footer

		},
		data(){
			return {
				total_cart: 4
			}
		},
		methods: {
			addTotalCart () {
				this.total_cart++;
			},
			removeTotalCart(){
				this.total_cart--;
			}
		},

	}
</script>

<style>
#app {

}
</style>
