<template>
	
	<div class="container">
		<div class="row">
			<div class="col-12 col-lg-6">
				<Slider :images=product.images></Slider>
			</div>
			<div class="col-12 col-lg-6">
				<h1 class="product-name">{{product.name}} {{$route.params.id}}</h1>
				<p class="mb-0">
					<i>Rating: </i>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					
				</p>
				<div class="py-4" v-html=product.attr></div>

				<p class="product-qty">
					<button v-on:click="inc_qty()" id="btn-inc">+</button>
					<input min="1" v-model="select_quantity"  id="qty" readonly="true">
					<button v-on:click="dec_qty()" id="btn-dec">-</button>
				</p>

				<div class="row">
					<div class="col-12 col-lg-6">
						<p ><del class="old-price">৳{{product.old_price}}</del> &nbsp; <span class="price">৳{{product.price}}</span></p>
					</div>
					<div class="col-12 col-lg-6">
						<button v-on:click="addToCart()" class="btn btn-primary rounded-0">
							Add To Cart
						</button>
					</div>
					<div class="col-12" v-if="alert_show">
						<Alert @HideAlertMessage="hideAlert" :text="message" className="success"/>
					</div>
				</div>
			</div>
		</div>


		<div class="row mt-5">
			<div class="col-12">
				<button v-on:click="show_hide_details" :class="{'active': show_details}" class="btn btn-outline-primary rounded-0">{{details_btn_text}}</button> &nbsp;
				<button v-on:click="show_hide_reviews" :class="{'active': show_reviews}" class="btn btn-outline-primary rounded-0">{{reviews_btn_text}}</button>
			</div>
		</div>
		

		
		<div v-if="show_details" class="row pt-5">
			<div class="col-12">
				<h2>Details</h2>
				<p>
					Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Tempora in accusamus exercitationem eos necessitatibus numquam dolorum, nesciunt perferendis incidunt, sapiente quam. Neque illum corporis laboriosam corrupti reiciendis sint quia est ratione alias architecto porro aut dolorem libero consequatur illo iste natus perspiciatis animi tempore eveniet, dolore. Consequatur fugit praesentium rem, excepturi, ab voluptas officiis iure eos dolorem inventore explicabo officia doloremque sint, id earum, ducimus laudantium optio illo. Excepturi odio cupiditate dolor vel sequi nihil, praesentium nemo enim non totam sapiente eius molestias e, dicta labore! Vel, aspernatur quam.
				</p>
			</div>
		</div>

		
		<div v-if="show_reviews" class="row pb-5 pt-3">
			<div class="col-12 mb-3">
				<h2>All Reviews</h2>
			</div>

			<div class="col-12 col-lg-6 text-justify">
				<h5><i>Customer - 1</i></h5>
				<p>
					<i>Rating: </i>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
				</p>
				<p>
					<i>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Tempora in accusamus exercitationem eos necessitatibus numquam dolorum, nesciunt perferendis incidunt</i>
				</p>
			</div>


			<div class="col-12 col-lg-6 text-justify">
				<h5><i>Customer - 1</i></h5>
				<p>
					<i>Rating: </i>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
				</p>
				<p>
					<i>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Tempora in accusamus exercitationem eos necessitatibus numquam dolorum, nesciunt perferendis incidunt</i>
				</p>
			</div>


			<div class="col-12 col-lg-6 text-justify">
				<h5><i>Customer - 1</i></h5>
				<p>
					<i>Rating: </i>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
				</p>
				<p>
					<i>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Tempora in accusamus exercitationem eos necessitatibus numquam dolorum, nesciunt perferendis incidunt</i>
				</p>
			</div>


			<div class="col-12 col-lg-6 text-justify">
				<h5><i>Customer - 1</i></h5>
				<p>
					<i>Rating: </i>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
					<span>⭐</span>
				</p>
				<p>
					<i>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Tempora in accusamus exercitationem eos necessitatibus numquam dolorum, nesciunt perferendis incidunt</i>
				</p>
			</div>


			<div class="col-12 col-lg-6 text-justify">
				<div class="card p-3">
					<h5><i>Put a Review</i></h5>
					
						<label for="name"><b>Name*</b></label>
						<input v-model="name" type="name" id="name" class="form-control mb-1">
						

						<label for="star"><b>Star*</b></label>
						<select v-model="star" class="form-control mb-1" name="star" id="star">
							<option value="0"></option>
							<option value="1">⭐</option>
							<option value="2">⭐⭐</option>
							<option value="3">⭐⭐⭐</option>
							<option value="4">⭐⭐⭐</option>
							<option value="4">⭐⭐⭐⭐</option>
							<option value="5">⭐⭐⭐⭐⭐</option>
						</select>
						

						<label for="comment"><b>Comment*</b></label>
						<textarea v-model="comment" name="comment" id="comment" cols="30" rows="3" class="form-control"></textarea>

						<div class="row">
							<div class="col-lg-6 text-left mt-3">
								<div class="form-check form-switch">
									<input v-on:click="confirmConditon($event)" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
									<label  class="form-check-label" for="flexSwitchCheckDefault">Yes I Accept All <a href="">conditions</a>.</label>
								</div>
							</div>
							<div class="col-lg-6 text-right mt-3">
								<button v-on:click="reviewSubmit" :disabled=desableReviewSubmitBtn class="btn btn-primary rounded-0">
									Submit
								</button>
							</div>
							<div class="col-12 mt-2" v-if="reviewAlert">
								<Alert @HideAlertMessage="hideAlert" :text="reviewMessage" :className="reviewClass"/>
							</div>
						</div>

					
				</div>
				
			</div>
		</div>


		<Products sectionTile="Releted Products" :allProducts=reletedProducts> </Products>

	</div>	
	
	
</template>

<script>

	import Slider from "@/components/Slider.vue"
	import Products from "@/components/Product/Products.vue"
	import Alert from "@/components/Alert.vue"


	export default {
		components:{
			Slider,
			Products,
			Alert
		},
		created() {
			this.product_id = this.$route.params.id;
		},
		data(){
			return {
				alert_show: false,
				message: '',
				product_id: '',
				select_quantity: 1,
				show_details: false,
				show_reviews: false,
				reviews_btn_text: 'Show Reviews',
				details_btn_text: 'Show Details',

				reviewClass:'',
				reviewMessage:'',
				reviewAlert: false,
				desableReviewSubmitBtn:true,
				name:'',
				star:0,
				comment:'',


				product:{
					id: 1,
					name: "This is Product",
					attr: `<p>
					<b>Size: </b> X, XL, XXl <br>
					<b>Color: </b> Red, Green, Blue <br>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rerum, laudantium hic dignissimos minus blanditiis. Placeat quibusdam optio praesentium natus?i, ab voluptas officiis iure eos dolorem inventore explicabo officia doloremque sint, id earum, ducimus laudantium 
					</p>`,
					price: Math.floor(Math.random() * 500) + 100,
					old_price: Math.floor(Math.random() * 800) + 500,
					images:[
					{
						image: "https://via.placeholder.com/600x350",
						alt: "This is Product Slider 1"
					},
					{
						image: "https://via.placeholder.com/600x350",
						alt: "This is Product Slider 2"
					},
					{
						image: "https://via.placeholder.com/600x350",
						alt: "This is Product Slider 3"
					}
					], 
				},


				reletedProducts: [


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

				],



			}
		},
		methods:{
			inc_qty(){
				this.select_quantity += 1; 
			},
			dec_qty(){
				if(this.select_quantity > 1){
					this.select_quantity -= 1;
				}
			},
			show_hide_reviews(){
				this.show_reviews = ! this.show_reviews;

				if(this.show_reviews){
					this.reviews_btn_text = "Hide Reviews";
				}else{
					this.reviews_btn_text = "Show Reviews";
				}
			},
			show_hide_details(){
				this.show_details = ! this.show_details;

				if(this.show_details){
					this.details_btn_text = "Hide Details";
				}else{
					this.details_btn_text = "Show Details";
				}
			},
			addToCart(){
				this.$emit('addProduct', 1);
				this.message = "Product Added to Your Cart";
				this.alert_show = true;

			},
			hideAlert(){
				this.alert_show = false;
				this.reviewAlert = false;
			},
			confirmConditon(e){
				
				let checked = e.target.checked;

				if(checked){
					if(this.name != '' && this.star != 0 && this.comment != ''){
						this.desableReviewSubmitBtn = false;
						
					}else{
						this.desableReviewSubmitBtn = true;
						this.reviewAlert = true;
						this.reviewClass  = 'danger';
						this.reviewMessage = 'Please Fill All The Fields';
					}
				}else{
					console.log(checked);
					this.desableReviewSubmitBtn = true;
				}
				
			},
			reviewSubmit(){

				this.name = '';
				this.comment = '';
				this.star = 0;
				this.reviewAlert = true;
				this.reviewClass = 'success';
				this.reviewMessage = 'Your Review Submited';
				this.desableReviewSubmitBtn = true;
			}

		}
	}
</script>


<style scoped>
.price{
	font-size: 22px;
	font-weight: bold;
	color: black;
}
.old-price{
	color: #a9a7a7;
	font-size: 22px;
}
.product-name{
	font-size: 30px;
}
</style>
