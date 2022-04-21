<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
          <form @submit.prevent="signup">
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Sign Up</h4>
               <md-field class="md-form-group" slot="inputs" >
                <md-icon>face</md-icon>
                <label>Username...</label>
                <md-input class="form-control" v-model="input.username"></md-input>
              </md-field>
               <md-field class="md-form-group" slot="inputs" >
                <md-icon>settings_phone</md-icon>
                <label>Phonenumber...</label>
                <md-input class="form-control" v-model="input.phonenumber"></md-input>
              </md-field>
               <md-field class="md-form-group" slot="inputs" >
                <md-icon>location_city</md-icon>
                <label>Address...</label>
                <md-input class="form-control" v-model="input.address"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs" >
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input class="form-control" v-model="input.email" input type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input class="form-control" v-model="input.password" input type="password"></md-input>
              </md-field>
              <md-button slot="footer" type="submit" class="md-simple md-success md-lg">
                Create Account
              </md-button>
            </login-card>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import {signUp} from '../util';
export default {
  name: "Register",
   data() {
            return {
              token : localStorage.getItem('token'),
              user :  localStorage.getItem('user'),
                input: {
                    name: "",
                    phonenumber:"",
                    address:"",
                    email:"",
                    password: ""
                },
                errorlogin:'',
                errorsign:''
            }
        },
        methods: {
            
            signup() {
              console.log(this.$data.sign)
              signUp({name : this.$data.input.name,
              tel: this.$data.input.tel,
              adress : this.$data.input.adress,
              mail : this.$data.input.mail,
              mdp:this.$data.input.mdp})
                    .then((res) => {
                        this.$store.commit("loginSuccess", res);
                          console.log(res)
                         console.log('please run')
                        this.$router.push({path: '/login'});
                    })
                    .catch((error) => {
                          console.log(error)
                          this.errorsign = error
                        this.$store.commit("loginFailed", {error});
                    });
        }
    },
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/BGG.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
       
</script>

<style lang="css"></style>
