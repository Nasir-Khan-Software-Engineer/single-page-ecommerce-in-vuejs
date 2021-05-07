<template>
	<div class="container">
		<table class="table table-hover shopping-cart-wrap">
			<thead class="text-muted">
				<tr align="center">
					<th  scope="col" width="40%">Product</th>
					<th scope="col" width="20%">Quantity</th>
					<th scope="col" width="20%">Price</th>
					<th scope="col" width="20%">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr align="center" valign="middle" v-for="(product,index) in allProducts" >
					<td align="left" width="40%">
						<router-link to="/single-product/1">
							<img src="https://via.placeholder.com/100x100" alt="">
						</router-link> <br>
						{{product.name}}
					</td>
					<td width="20%">
						<input v-on:change="updateQty($event,product.id)" type="number" :value=product.qty style="width: 80px;">
					</td>
					<td width="20%">৳{{product.price * product.qty}}</td>
					<td width="20%">
						<button v-on:click="deleteFromCart(product.id)"  class="btn btn-outline-danger"> × Remove</button>
					</td>
				</tr>
				<br>
				<tr align="center">
					<td  scope="col" width="40%"></td>
					<td scope="col" width="20%">{{total_quantity}}</td>
					<td scope="col" width="20%">৳ {{total_price}}</td>
					<td scope="col" width="20%">
						<a href="" class="btn btn-outline-primary
						">Submit</a>
					</td>
				</tr>

			</tbody>
		</table>
		<div class="row" v-if="show_alert">
			<div class="col-12">
				<Alert @HideAlertMessage="hideAlert" :text="message" :className="alert_class"> </Alert>
			</div>
		</div>
	</div>

</template>

<script>

	import Alert from "@/components/Alert.vue"

	export default {
		components:{
			Alert,
		},
		computed:{
			total_quantity(){
				
				let t_qty = 0;
				this.allProducts.forEach((product)=>{
					t_qty += product.qty;
				})
				return t_qty;
			},
			total_price(){
				let price = 0;
				this.allProducts.forEach((product)=>{
					price += product.price;
				})
				return price;
			}
		},
		data(){
			return {
				show_alert: false,
				alert_class: '',
				message: '',
				allProducts:[
						{
							id: 1,
							name: "This is Product 1",
							price: Math.floor(Math.random() * 500) + 100,
							qty: 1,
							image: "https://via.placeholder.com/200x250"
						},
						{
							id: 2,
							name: "This is Product 2",
							price: Math.floor(Math.random() * 500) + 100,
							qty: 2,
							image: "https://via.placeholder.com/200x250"
						},
						{
							id: 3,
							name: "This is Product 3",
							price: Math.floor(Math.random() * 500) + 100,
							qty: 1,
							image: "https://via.placeholder.com/200x250"
						},

						{
							id: 4,
							name: "This is Product 4",
							price: Math.floor(Math.random() * 500) + 100,
							qty: 5,
							image: "https://via.placeholder.com/200x250"
						},
						
				],
			}
		},
		methods:{
			deleteFromCart(id){

				
				if(confirm("Are you sure want to delete ?")){
					this.allProducts = this.allProducts.filter(product => product.id != id);
					this.show_alert = true;
					this.message = "Product Deleted Success";
					this.alert_class = "danger";
					this.$emit("removeItemFormCart");
				}else{
					this.show_alert = true;
					this.message = "Your Data is Safe";
					this.alert_class = "success";
				}


			},
			updateQty(event,id){

				if(confirm("Are you sure want to Update ?")){
					const value = event.target.value;

					this.allProducts = this.allProducts.map(product =>	

						product.id == id?
						{...product, qty: value}
						:product

						);

					this.show_alert = true;
					this.message = "Quantity Updated";
					this.alert_class = "success";

				}else{
					this.show_alert = true;
					this.message = "Your Data is Safe";
					this.alert_class = "success";
				}

				
			},
			hideAlert(){
				this.show_alert = false;
			}
		}
	}
</script>

<style scoped>

</style>
