<template>
  <q-page class="row items-center justify-evenly">
    <AccountSignupComponent/>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import AccountSignupComponent from 'components/AccountSignupComponent.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: {
    AccountSignupComponent
  },
  data () {
    return { }
  }
})
</script>
