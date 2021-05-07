<template>
	<div class="container">
		<div class="card text-center">
			<div class="card-header">
				Vue.js Ecommerce
			</div>
			<div class="card-body">
				<img  class="logo-1" src="@/assets/logo.png" alt=""> 
				<img  class="logo-2" src="@/assets/logo2.png" alt=""> <br><br>
				
				<router-link class="btn btn-outline-primary btn-about" to="/about">About</router-link> 
				<router-link class="btn btn-outline-primary" to="/contact">Contact</router-link>
			</div>
			<div class="card-footer text-muted">
				&copy; M.N.U YEA HIA KHAN 
			</div>
		</div>
		<br>
	</div>
</template>

<script>
	export default {

	}
</script>


<style scoped >
	.logo-1{
		width: 100px;
		margin-right: 10px;
	}
	.logo-2{
		width: 90px;
	}
	.btn-about{
		margin-right: 5px;
	}
</style>
