<template>
  <div class="container">
  	<Banner :BannerData=Banner > </Banner>


  	<div class="row py-5">
  		<div class="col-12 col-lg-6">
  			<div class="card p-3">
  				<h2><i>Our Information</i></h2>
  				<address>
  					Dhanmondi - 15, Dhaka, Bangladsh <br>
  					<b>Phone: </b>01637017926<br>
  					<b>Email: </b>demo@gmail.com<br>
  					<b>Skype: </b>demoSkype
  				</address>
  				Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Debitis ab minus magni cupiditate necessitatibus expedita nisi natus at voluptatibus delectus. consectetur adipisicing elit. Debitis ab minus magni cupiditate necessitatibus expedita nisi natus at voluptatibus delectus.<br><br>
  				<h2><i>Follow Us</i></h2>
  				<address>
  					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non maiores quas recusandae exercitationem minima nulla debitis magnam, possimus asperiores.
  				</address>
  			</div>
  		</div>

  		<div class="col-12 col-lg-6">
  			<div class="card p-3">
  				<label for="name"><b>Name* (Max 30 Characters)</b></label>
  				<input v-on:keyup="checkName()"  v-model="name" type="text" id="name" :class="{'border border-danger': name_error}"   class="form-control mb-2" >

  				<label for="email"><b>Email*</b></label>
  				<input v-on:blur="checkEmail()" v-model="email" type="text" id="email" class="form-control mb-2" :class="{'border border-danger': email_error}" >

  				<label for="message"><b>Message* (Max 100 Words and 300 Characters)</b></label>

  				<textarea v-on:keyup="checkMessage()" v-model="message" class="form-control"  name="message" id="message" cols="30" rows="6" :class="{'border border-danger': message_error}"></textarea>

  				<input v-on:click="sumitMessage"  type="submit" name="submit" id="submit" class="form-control btn btn-primary py-2 mt-3" >

          <div class="col-12 mt-2" v-if="show_alert">
            <Alert @HideAlertMessage="hideAlert" :text=alert_message :className=alertClassName> </Alert>
          </div>

        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import Banner from "@/components/Banner.vue";
  import Alert from "@/components/Alert.vue"
  export default {
    components:{
     Banner,
     Alert
   },
   data(){
     return {

      name: '',
      email: '',
      message: '',
      name_error: false,
      email_error: false,
      message_error: false,

      show_alert: false,
      alert_message: '',
      alertClassName: '',


      Banner:{
        image: "https://via.placeholder.com/1200x350",
        title: "Contact With Us"
      }
    }
  },
  methods:{
    checkName(){
      if(this.name.length > 30){
        this.name_error = true;
      }else{
        this.name_error = false;
      }
    },
    checkEmail(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(this.email !=''){
        if(!re.test(String(this.email).toLowerCase())){
          this.email_error = true;
        }else{
          this.email_error = false;
        }
      }

    },
    checkMessage(){
      let words = this.message.trim().split(' ').length;

      if(words > 100 || this.message.length > 300){
        this.message_error = true;
      }else{
        this.message_error = false;
      }
    },
    sumitMessage(){
      
      if(!this.name_error && !this.email_error && !this.message_error && this.name !='' && this.email !='' && this.message !=''){


        this.name = '';
        this.email = '';
        this.message = '';

        this.show_alert =  true;
        this.alert_message =  'Email Send Success';
        this.alertClassName = 'success';

       

      }else{
        this.show_alert = true;
        this.alert_message = 'Something Wrong Please Fill All The Fields';
        this.alertClassName = 'danger';
      }
    },
    hideAlert(){
      this.show_alert = false;
    }
  }
}
</script>


<style >

</style>
