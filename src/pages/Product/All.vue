<template>
  	
  	<div class="container">
     <Products sectionTile="All Product" :allProducts=productsList> </Products> 

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


<style >

</style>
