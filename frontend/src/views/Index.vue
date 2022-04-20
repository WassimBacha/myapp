<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">

            <div class="brand">
              <h1>Event Hosting for FREE!!</h1>
              <h3>Get your ticket Fast !!</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
           <center> <h2>Our Team</h2></center>
          </div>
          <h3 class = "center"> Our team is dedicated to bringing you the best user expirience possible </h3>
          </div>
          <div class="center"   >
          <div class="row"   >
  <div class="column">
    <div class="card" >
      <img src="@/assets/img/Myphoto.jpg" alt="Avatar" style="width:100%" >
      <div class="container">
        <h2>Mohamed Wassim Bacha</h2>
        <p>wassimbacha99@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="@/assets/img/photo2.jpg" alt="avatar" style="width:100%">
      <div class="container">
        <h2>Mohamed Yassine Bensouissi</h2>
        <p>Yassinebensouissi@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  </div>
  </div>

      </div>
      <div class="section section-navbars">
        <div class="container">
          <small-navigation></small-navigation>
        </div>
        <navigation></navigation>
      </div>
      <div class="section section-tabs">
        <div class="container">
          <tabs></tabs>
        </div>
      </div>
      <div class="section section-white">
        <div class="container">
          <nav-pills></nav-pills>
        </div>
      </div>
      <div class="section section-notifications">
        <div class="container">
          <div class="title">
          <center><h2>Features</h2></center>
          
          </div>
        </div>
        <notifications></notifications>
      </div>
      <div class="section">
      </div>
      <div class="section section-javascript">
        <div class="container">
          <javascript-components></javascript-components>
        </div>
      </div>
      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/BGG.jpg")
    },
    
    
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    
    
  },
  
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
/* Three columns side by side */
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
.center {
  margin: auto;
  width: 60%;
  
  padding: 8px;
}
img {
  vertical-align: middle;
 
}

</style>
