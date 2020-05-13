<template>
  <v-card class="overflow-hidden">
    <div class="center HeaderColor">
      <v-toolbar-title>Template vuetify</v-toolbar-title> 

      <router-link to="/">
    <v-btn>
       <strong>Home</strong>
    </v-btn>
      </router-link>

      <router-link to="/button">
        <v-btn>
          <strong>Button</strong>
        </v-btn>
      </router-link> 

      <router-link to="/footer">
        <v-btn>
          <strong>Footer</strong>
        </v-btn>
      </router-link>

      <router-link to="/card">
        <v-btn>
          <strong>Card</strong>
        </v-btn>
      </router-link>

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