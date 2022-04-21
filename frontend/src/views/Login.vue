<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Login</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" input type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" input type="password"></md-input>
              </md-field>
              
              <md-button slot="footer" class="md-simple md-success md-lg">
                Login
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import {login} from '../util';
export default {
 data() {
            return {
              token : localStorage.getItem('token'),
              user :  localStorage.getItem('user'),
                sign: {
                    username: "",
                    password: ""
                },
                errorlogin:'',
                errorsign:''
            }
        },
        methods: {
            authenticate() {
              console.log(this.$data.input)
              
              login(this.$data.input)
                    .then((res) => {
                       localStorage.setItem("token",res.accessToken);
                       localStorage.setItem("user",res.username);
                       console.log(res)
                       this.$router.push({path: '/'});
                         console.log('GG wp')
                       // this.$router.push({path: '/home'});
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorlogin = error
                        //this.$store.commit("loginFailed", {error});
                    });
            
             // login()
            }
        },
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
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
