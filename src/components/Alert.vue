<template>

	<div class="alert" :class="'alert-'+className">
		{{text}} 
		<button  v-on:click="hideAlert()">X</button>
	</div>


	
</template>

<script>

	export default {

		props:{
			text: String,
			className: String
		},
		data(){
			return {

			}
		},
		methods:{
			hideAlert(){
				this.$emit("HideAlertMessage",1);
			}
		}
	}
</script>

<style scoped>
.alert{
	position: relative;
}
.alert button{
	position: absolute;
	top: 2px;
	right: 5px;
	border: 0;
	background: none;
	font-size: 20px;
	padding: 10px;
}
</style>
