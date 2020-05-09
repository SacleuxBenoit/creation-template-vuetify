<template>
  <div class="button">
      <Button/>
      <ButtonSizing/>
      <Icones/>
  </div>
</template>

<script>
import Button from '../components/Button/Button.vue'
import ButtonSizing from '../components/Button/ButtonSizing.vue'
import Icones from '../components/Button/Icones'
export default {
  name: "button",
  components: {
    Button,
    ButtonSizing,
    Icones
  }
};
</script>
