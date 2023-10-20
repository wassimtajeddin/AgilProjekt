<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

/*import { useAuthStore } from '@/stores';*/

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

/*async function onSubmit(values) {
    const authStore = useAuthStore();
    const { username, password } = values;
    await authStore.login(username, password);
}
/*import { ref, computed } from 'vue'

const player = ref({
  name: '',
  email:'',
  password:''
})

// a computed ref
// eslint-disable-next-line vue/return-in-computed-property
const logIn = computed(() => {
  console.log("logedIn", player)
})*/
</script>

<template>
<div class="card-m3">
  <h1 class="card-header">Login</h1>
  <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
          <div class="form-group">
              <label>Username</label>
              <Field name="username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
              <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group">
              <label>Password</label>
              <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
              <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group">
              <button class="btn btn-primary" :disabled="isSubmitting">
                  <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                  Login
              </button>
              <router-link to="register" class="btn btn-link">Register</router-link>
          </div>
      </Form>
  </div>
</div>
</template>
  
<style>
/*div {
  display:  flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top : 2rem;
}*/

/*.card-body {
  align-items: center;
  color: white;
}*/
/*.card-header {
  color: white;
  align-items: center;
  display: block;
}*/
.card-m3 {
  background-color: white;
  width: 300px;
  height: 300px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  color: black;
  cursor: pointer;

}
.form-group {
  width: 300px;
  height: 50px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
/*.app-container {
    min-height: 350px;
    background-color: aqua;
}*/

/*.card-m-3{
  width: 40px;
    text-align: center;
    box-sizing: content-box;
}*/
</style>
