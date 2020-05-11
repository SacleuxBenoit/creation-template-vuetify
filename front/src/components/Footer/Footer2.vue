
<template >
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn 
        v-for="link in links"
        :key="link"
        text
      >
        {{ link }}
      </v-btn>
      <v-col
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Template vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>

<style>

</style>