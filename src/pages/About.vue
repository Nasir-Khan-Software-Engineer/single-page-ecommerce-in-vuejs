<template>
	<div class="container">


		<div class="p-5 mb-4 bg-light rounded-3">
			<div class="container-fluid py-5">
				<h1 class="display-5 fw-bold">About This Project</h1>
				<p class="col-md-10 fs-4">This is a <b>Vue 3</b> Ecommerce Application & <b>Bootstrap 5</b> is used for Design. All of the data is static that means no API is used. But don't worry all of the components are development-friendly that means every thing is done except API call and it will be so <b>easy to replace static data to API call</b>. Also this App is <b>SEO Friendly</b>(dynamic meta data)</p>

				<div class="alert alert-light borderd border-info">
					<b>Though it is developed just for practicing purpose, <br> But I will make this in real
						real project by using my Laravel REST Ecommerce <a href="">API</a> very soon.</b>
					</div>

					<a href="" class="btn btn-outline-primary active">Source Code</a> - 
					<a href="" class="btn btn-outline-primary">Ecommerce API</a>

				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<div class="card p-3">
						<h3>File Structure of This Project</h3>

						<ul>
							<li>
								src

								<ul>
		
									<li>
										components
										<ul>
											<li>
												Category
												<ul>
													<li>
														Categories.vue
													</li>
												</ul>
											</li>
											<li>
												Product
												<ul>
													<li>
														Products.vue
													</li>
												</ul>
											</li>
											<li>Alert.vue</li>
											<li>Banner.vue</li>
											<li>Footer.vue</li>
											<li>Nav.vue</li>
											<li>Slider.vue</li>
										</ul>
									</li>
									<li>
										pages
										<ul>
											<li>
												Product
												<ul>
													<li>
														All.vue
													</li>
													<li>
														Single.vue
													</li>
												</ul>
											</li>
											<li>
												Category
												<ul>
													<li>
														All.vue
													</li>
													<li>
														Single.vue
													</li>
												</ul>
											</li>
											<li>About.vue</li>
											<li>Cart.vue</li>
											<li>Contact.vue</li>
											<li>Home.vue</li>
										</ul>
									</li>
								</ul>

							</li>
						</ul>

						<p>
							<b>To check complete source code</b> <a href="">Click here</a>
						</p>
					</div>
				</div>
			</div>

		</div>

	</template>

	<script>


		export default {
			components:{

			}
		}
	</script>

	<style>

</style>
