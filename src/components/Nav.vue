<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
		<div class="container">
			<router-link  class="navbar-brand" 

			:to="{
				name: 'Home',
				params:{
					title: 'Vue Ecommerce - Home',
					description: 'this is home page description',
					keyword: 'this is home page keyword'
				}}">
				<img class="logo" src="@/assets/logo.png" alt="">

			</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">


				<ul class="navbar-nav me-auto mb-2 mb-lg-0">


					<li class="nav-item">
						<router-link  class="nav-link" 
						:to="{
							name: 'Products',
							params:{
								title: 'Vue Ecommerce - All Products',
								description: 'this is All Products page description',
								keyword: 'this is All Products page keyword'
							}}">

						Products</router-link>
					</li>

					<li class="nav-item">
						<router-link  class="nav-link" 

						:to="{
							name: 'Categories',
							params:{
								title: 'Vue Ecommerce - All Categories',
								description: 'this is All Categories page description',
								keyword: 'this is All Categories page keyword'
							}}">

						Categories</router-link>
					</li>

					<li class="nav-item">
						<router-link  class="nav-link" 

						:to="{
							name: 'About',
							params:{
								title: 'Vue Ecommerce - About',
								description: 'this is All About page description',
								keyword: 'this is All About page keyword'
							}}">
					    About</router-link>
					</li>

				</ul>


				<div class="d-flex">

					<router-link  class="nav-link btn btn-outline-primary contact-btn" :to="{
							name: 'Contact',
							params:{
								title: 'Vue Ecommerce - Contact',
								description: 'this is Contact page description',
								keyword: 'this is Contact page keyword'
							}}">Contact</router-link>

					&nbsp;	      	
					<router-link  :to="{
							name: 'Cart',
							params:{
								title: 'Vue Ecommerce - Cart',
								description: 'this is Cart page description',
								keyword: 'this is Cart page keyword'
							}}" class="nav-link bg-success btn btn-outline-success" >&#128722; <span class="badge badge-info">{{total_cart}}</span></router-link>

				</div>

			</div>
		</div>

	</nav>



</template>

<script>
	
	export default {
		data(){
			return {
				
			}
		},
		props:{
			total_cart: Number
		},
		methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }
	}
</script>


<style scoped >

	.navbar-light .navbar-toggler {
	    color: rgb(255 255 255 / 100%);
	    border-color: rgb(255 255 255 / 100%);
	}

	.navbar-light .navbar-toggler-icon {
	    background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e) !important;
	    
	}
	.logo{
		width: 50px;
	}
	.bg-light{
		background: #1a202c !important;
	}
	.navbar-light .navbar-nav .nav-link{
		color: #fff ;
	}
	.contact-btn{
		color: #fff;
	}
</style>
