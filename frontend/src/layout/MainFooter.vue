<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        
       
      </nav>
      <div class="copyright">
        &copy; made with <md-icon>favorite</md-icon> by
        Ourteam .
        
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  
};
</script>
<style></style>
