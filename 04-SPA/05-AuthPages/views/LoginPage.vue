<template>
  <form class="form" @submit.prevent>
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" placeholder="demo@email" class="form-control" v-model="email"></div>
    </div>

    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" placeholder="password" class="form-control" v-model="password">
      </div>
    </div>

    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block" @click="getLoggedIn">Войти</button>
    </div>

    <div class="form__append">Нет аккаунта? <router-link to="/register" class="link">Зарегистрируйтесь</router-link></div>

  </form>
</template>

<script>
import { login } from '../data';

export default {

  name: 'LoginPage',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async getLoggedIn () {
      if (!this.email) {
        return alert('Требуется ввести Email');
      } else if (!this.password) {
        return alert('Требуется ввести пароль');
      }
      let userCredentials = await login (this.email, this.password);
      if (userCredentials.error) {
          alert(userCredentials.message);
      } else {
        alert(userCredentials.fullname);
      }
    }
  }
}
</script>

<style scoped></style>
