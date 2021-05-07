<template>
	
		
	

	<div class="row mt-3" >
		<div class="col-3 col-lg-2 mb-2" v-for="(category,index) in allCategories">
			<router-link :to="{
						name: 'SingleCategory',
						params: {
							id: category.id,
							title:category.name,
							description: 'this is description of '+category.name,
							keyword: 'this is all keyword of '+category.name,
						}}">
				<div class="card p-1">
					<img src="https://via.placeholder.com/150x70" alt="">
				</div>
			</router-link>
		</div>
	</div>
	
	
</template>

<script>
export default {
  props: {
  	allCategories: Array,
  
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
