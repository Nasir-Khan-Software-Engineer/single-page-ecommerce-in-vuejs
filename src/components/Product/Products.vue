<template>
	
		

		<div class="row">
			<div class="col-12 py-4">
				<h2>{{sectionTile}}</h2>
			</div>
		</div>

		<div class="row">
			<div class="col-6 col-lg-2 mb-3" v-for="(product, index) in allProducts">
				<div class="card p-1 text-center">
					<img :src=product.image :alt=product.name>
					<h4 class="py-2 product-name">{{product.name}}</h4>
					<p>
						<span class="old-price price">
							<del>৳{{product.old_price}}</del>
						</span>
						<span class="new-price price">
							৳{{product.price}}
						</span>
					</p>
					<router-link 
					:to="{
						name: 'SingleProduct',
						params: {
							id: product.id,
							title:product.name,
							description: 'this is description of '+product.name,
							keyword: 'this is all keyword of '+product.name,
						}}" 

					class="btn btn-primary rounded-0">Details</router-link>
				</div>
			</div>
		</div>
		
	
</template>

<script>
export default {
  props: {
  	sectionTile: String,
  	allProducts: Array
  }
}
</script>


<style scoped>
	.price{
		font-size: 20px;
		font-weight: bold;
		color: black;
	}
	.old-price{
		color: #a9a7a7;
	}
	.product-name{
		font-size: 18px;
	}
</style>
