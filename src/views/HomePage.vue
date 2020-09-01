<template>
  <div>
    <v-row dense>
      <v-col>
        <v-card class="mx-auto banner-bg pt-10 mt-n1" height="400px" max-width="100%" outlined  >
        <v-container>
          <v-list-item three-line>
          <v-list-item-content>
            <div class=" mb-4 mt-10 pink--text font-weight-bold ">WELCOME</div>
            <v-list-item-title class="headline mb-1 ">Lorem ipsum dolor</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn color="pink" class="white--text" to="/login">Login</v-btn>
          <v-btn color="pink" outlined to="/register" >Register</v-btn>
        </v-card-actions>
        </v-container>

      </v-card>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify='center'> 
       <div class="section-haeding text-center my-5">
         <h2 class='headline mx-auto '>
          <span class="pink--text">B</span>log
          <span class="pink--text">P</span>osts
         </h2>
       </div>
      </v-row>

        <!-- BLOG START-->

          <Blog />
          
        <!-- BLOG END-->



    </v-container>




     
  </div>
</template>

<style  scoped>
.banner-bg.v-card{
  background:#efdcdc
}
</style>
<script>

import Blog from '@/components/Blog'

export default {
  components:{
    Blog
  },

 
}
</script>