<template>
  
  	<div class="row py-3">
  		<div class="col-12">
  			<div class="card p-1">
  				<img :src=BannerData.image :alt=BannerData.title>

  			</div>
  		</div>
  	</div>

    <div class="row">
      <div class="col-12 text-center">
        <h1>{{BannerData.title}}</h1>
      </div>
    </div>

</template>

<script>

export default {
  props: {
    BannerData: JSON
    
  }
}
</script>


<style >

</style>
