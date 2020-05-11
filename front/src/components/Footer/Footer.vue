<template>
  <v-footer padless class="marginFooter">
    <v-col
      class="containerFooter"
      cols="12">
      {{ new Date().getFullYear() }} — <strong>Template vuetify</strong>
    </v-col>
  </v-footer>
</template>

<style>
    .containerFooter{
        border-bottom : 1px solid #000; 
        text-align:center;
}
    .marginFooter{
        margin-top: 2rem;
}
</style>