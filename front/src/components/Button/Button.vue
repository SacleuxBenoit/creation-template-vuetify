<template>
  <v-row class="containerButton marginButton">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small>Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small>Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed>Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed>Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style>
.containerButton{
    border-bottom : 1px solid #000; 
    text-align:center;
}

.marginButton{
  margin-top: 2rem;
}
</style>