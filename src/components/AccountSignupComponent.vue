<template>
  <div>
    <img class="q-ml-lg" src="~assets/logo.jpg">
    <p>It's free only a minute to complete</p>
    <div class="q-pa-md column q-gutter-md">
      <q-input square outlined v-model="fullName" label="Full Name" />
      <q-input square outlined v-model="emailId" type="email" label="Email" />
      <q-input v-model="password" square outlined type="password" hint="Password"/>
      <q-input v-model="password" square outlined type="Password" hint="Confirm Password"/>
      <q-btn color="white" text-color="black" label="Sign Up" :disable="disable"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  data () {
    return {
      fullName: '',
      emailId: '',
      password: ''
    }
  },
  computed: {
    disable () {
      return this.fullName && this.emailId && this.password
    }
  }
})
</script>
