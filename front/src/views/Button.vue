<template>
  <div class="button">
      <Button/>
      <Icones/>
  </div>
</template>

<script>
import Button from '../components/Button/Button.vue'
import Icones from '../components/Button/Icones'
export default {
  name: "button",
  components: {
    Button,
    Icones
  }
};
</script>
