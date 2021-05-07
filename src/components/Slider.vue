<template>

	<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
	  <div class="carousel-indicators">

	    <button v-for="(slider,index) in images" 
	    type="button" 
	    data-bs-target="#carouselExampleIndicators" 
	    :class="{'active': (index==0)}" :data-bs-slide-to=index
	    >
	    	
	    </button>


	  </div>
	  <div class="carousel-inner">

	    <div class="carousel-item" v-for="(slider,index) in images" :class="{'active': (index==0)}">
	      <img :src=slider.image class="d-block w-100" :alt=slider.alt>
	    </div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
	    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
	    <span class="carousel-control-next-icon" aria-hidden="true"></span>
	    <span class="visually-hidden">Next</span>
	  </button>
	</div>


	
</template>

<script>

	export default {

		props:{
			images: Array
		},
		data(){
			return {

			}
		}
	}
</script>

<style>

</style>
