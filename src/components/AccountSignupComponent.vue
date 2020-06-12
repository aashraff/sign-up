<template>
  <div>
    <form @submit.prevent.stop="signup" class="q-pa-md column q-gutter-sm">
      <img class="q-ml-lg" src="~assets/logo.jpg" />
      <p>It's free only a minute to complete</p>
      <q-input square outlined dense v-model="fullName" type="text" label="Full name" :rules="[ val => val && val.length > 0 || 'Full name is required']" />
      <q-input square outlined dense v-model="emailId" type="email" label="Email" hint="Email" :rules="[ val => val && val.length > 0 || 'Email is required']" />
      <q-input square outlined dense v-model="password" type="password" hint="Password" :rules="[ val => val && val.length > 0 || 'Password is required']" />
      <q-input square outlined dense v-model="confirmPassword" type="Password" hint="Confirm Password" :rules="[ val => val && val.length > 0 || 'Confirm password']"/>
      <q-btn dense color="white" text-color="black" label="Sign Up" type="submit" no-caps :loading="isLoading" />
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api'
import axios from 'axios'
import { Notify } from 'quasar'

export default {
  name: 'AccountSignupComponent',
  setup () {
    const fullName = ref('')
    const emailId = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const isLoading = ref(false)
    const signup = () => {
      if (!fullName.value || !emailId.value || !password.value || !confirmPassword.value) {
        Notify.create('Fill up all fields')
        return
      }
      if (password.value !== confirmPassword.value) {
        Notify.create('Passwords must match')
        return
      }
      isLoading.value = true
      axios.put('http://localhost:8081/api/user/signup', { fullName: fullName.value, emailId: emailId.value, password: password.value })
        .then(() => {
          Notify.create('You are successfully signed up to Gym Time.')
          isLoading.value = false
        })
        .catch(error => {
          Notify.create(`Error on sign up: ${error}`)
          isLoading.value = false
        })
    }

    return {
      fullName,
      emailId,
      password,
      confirmPassword,
      isLoading,
      signup
    }
  }
}
</script>
