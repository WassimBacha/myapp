<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Sign Up</h4>
              <md-field class="md-form-group" slot="inputs" >
                <md-icon>face</md-icon>
                <label>Username...</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
               <md-field class="md-form-group" slot="inputs" >
                <md-icon>face</md-icon>
                <label>Lastname...</label>
                <md-input v-model="Lastname"></md-input>
              </md-field>
               <md-field class="md-form-group" slot="inputs" >
                <md-icon>settings_phone</md-icon>
                <label>Phonenumber...</label>
                <md-input v-model="phonenumber"></md-input>
              </md-field>
               <md-field class="md-form-group" slot="inputs" >
                <md-icon>location_city</md-icon>
                <label>Address...</label>
                <md-input v-model="Lastname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs" >
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
                Create Account
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

export default {
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
