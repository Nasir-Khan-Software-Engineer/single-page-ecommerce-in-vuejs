<template>
	<div class="container">
	<Slider :images=sliders> </Slider>
		<p class="text-justify">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae qui? Assumenda odit temporibus facere ipsa laboriosam quae neque tenetur porro dolorem et eius ratione earum quis natus doloremque sunt velit, est sint, perferendis. Ut similique blanditiis quidem dolores, eos. Repudiandae sapiente, laborum in alias, consectetur dolorem inventore vitae minima aut a numquam magni placeat eligendi nam! Necessitatibus nemo quo non fugit soluta ipsa, ex accusamus quam nobis explicabo ipsum quisquam sint, provident cumque voluptatibus expedita veniam maxime consequuntur eos reiciendis. Blanditiis impedit eum repellat. Harum, sapiente itaque, consequatur, voluptates autem minima tempore cumque eveniet, quam illum eaque officia. Dolore?
		</p>
		<div class="row py-3">
			<div class="col-12">
				<h2>Categories</h2>
			</div>
		</div>

		<Categories :allCategories=categories></Categories>

		<Products sectionTile="Product" :allProducts=productsList> </Products>

		<div class="row">
			<div class="col-12 py-4 text-center">
				<router-link :to="{
							name: 'Products',
							params:{
								title: 'Vue Ecommerce - All Products',
								description: 'this is All Products page description',
								keyword: 'this is All Products page keyword'
							}}" class="btn btn-outline-primary">All Products</router-link>
			</div>
		</div>



	</div>
</template>

<script>

import Slider from "@/components/Slider.vue"
import Products from "@/components/Product/Products.vue"

import Categories from "@/components/Category/Categories.vue";


export default {

	components:{
		Slider,
		Products,
		
		Categories
	},
	data(){
		return {
			productsList:[

				{
					id: 1,
					name: "This is Product 1",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 2,
					name: "This is Product 2",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 3,
					name: "This is Product 3",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 4,
					name: "This is Product 4",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 5,
					name: "This is Product 3",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 6,
					name: "This is Product 6",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 7,
					name: "This is Product 7",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 8,
					name: "This is Product 8",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 9,
					name: "This is Product 9",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 10,
					name: "This is Product 10",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 11,
					name: "This is Product 11",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 12,
					name: "This is Product 12",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 13,
					name: "This is Product 13",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 14,
					name: "This is Product 14",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 15,
					name: "This is Product 15",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 16,
					name: "This is Product 16",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},

				{
					id: 17,
					name: "This is Product 17",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
				{
					id: 18,
					name: "This is Product 18",
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					image: "https://via.placeholder.com/200x250"
				},
		


			],
			categories:[
				{
					id: 1,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 2,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 3,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 4,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 5,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 6,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 7,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 8,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 9,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 10,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 11,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				{
					id: 12,
					name: "Men",
					image: "https://via.placeholder.com/100x60"
				},
				
			],



			sliders:[
				{
					image: "https://via.placeholder.com/1000x300",
					alt: "This is Slider 1"
				},
				{
					image: "https://via.placeholder.com/1000x300",
					alt: "This is Slider 2"
				},
				{
					image: "https://via.placeholder.com/1000x300",
					alt: "This is Slider 3"
				}
			],
		}
	}
}
</script>

<style>

</style>
