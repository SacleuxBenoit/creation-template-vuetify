<template>
  <v-card class="overflow-hidden">
    <div class="center HeaderColor">
      <v-toolbar-title>Template vuetify</v-toolbar-title> 
     <v-btn>
      <router-link to="/"><strong>Home</strong></router-link>
    </v-btn>
    <v-btn>
 <router-link to="/button"><strong>Button</strong></router-link> 
    </v-btn>
    <v-btn>
 <router-link to="#"><strong>?</strong></router-link>
    </v-btn>


  </div>
  </v-card>
</template>

<style>
.center{
    text-align: center;
}
.HeaderColor{
   background-color:#eae9e9
}
</style>