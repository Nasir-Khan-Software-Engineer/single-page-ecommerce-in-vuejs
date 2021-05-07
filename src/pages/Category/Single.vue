<template>
	<div class="container">
		<div class="row mb-5">
			<div class="col-12">
				<div class="card">
					<img src="https://via.placeholder.com/1200x250" alt="">
				</div>
			</div>
		</div>

		
		<Products sectionTile="All Products Of Category Name" :allProducts=productsList> </Products> 

		<div class="row">
			<div class="col-12 py-4 text-center">
				<button v-on:click="addProducts()"  class="btn btn-outline-primary">Load More</button>
			</div>
		</div>
	</div>
	
</template>


<script>
	import Products from "@/components/Product/Products.vue"
	export default {
		components:{
			Products
		},
		data(){
			return{
				productsList:[

				{
					id: 1,
					name: "This is Product 1",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 1,
					name: "This is Product 2",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 1,
					name: "This is Product 3",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 1,
					name: "This is Product 4",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 1,
					name: "This is Product 12",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 1,
					name: "This is Product 5",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 1,
					name: "This is Product 6",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 1,
					name: "This is Product 7",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 1,
					name: "This is Product 8",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 1,
					name: "This is Product 9",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 1,
					name: "This is Product 10",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 1,
					name: "This is Product 11",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},



				],
			}
		}, // end data

		methods:{
			addProducts(){

				for(let i=0; i<6;i++){

					let num = this.productsList.length + 1;

					let product = {
						id: num,
						name: "This is Product "+num,
						price: Math.floor(Math.random() * 500) + 100,
						old_price: Math.floor(Math.random() * 800) + 500,
						image: "https://via.placeholder.com/200x250"
					}

					this.productsList.push(product);

				}


			}
		} // end methods
	}
</script>

<style scoped>

</style>