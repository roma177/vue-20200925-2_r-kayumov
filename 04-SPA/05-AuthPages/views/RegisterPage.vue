<template>
  <form class="form" @submit.prevent>

    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" class="form-control" v-model="email">
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input type="text" class="form-control" v-model="fullname">
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" class="form-control" v-model="password">
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input type="password" class="form-control" v-model="passwordCheck">
      </div>
    </div>

    <div class="form-group">
      <label class="checkbox"><input type="checkbox" v-model="isChecked"> Я согласен с условиями <span></span></label>
    </div>

    <div class="form__buttons">
      <button type="submit" class="button button_primary" @click="getRegistered">Зарегистрироваться</button>
    </div>

    <div class="form__append">Уже есть аккаунт? <router-link to="/login" class="link">Войдите</router-link></div>

  </form>
</template>

<script>
import {login, register} from '../data';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: null,
      fullname: null,
      password: null,
      isChecked: false,
      passwordCheck: null,
    };
  },
  methods: {
    async getRegistered () {
      if (!this.email) {
        return alert('Требуется ввести Email');
      } else if (!this.fullname) {
        return alert('Требуется ввести полное имя');
      } else if (!this.password) {
        return alert('Требуется ввести пароль');
      } else if (this.password !== this.passwordCheck) {
        return alert('Пароли не совпадают');
      } else if (!this.isChecked) {
        return alert('Требуется согласиться с условиями');
      }
      let registerCredentials = await register(this.email, this.fullname, this.password);
        if (registerCredentials.error) {
          alert('Ошибка');
        } else {
          alert(registerCredentials.id);
      }
    }
  }

};
</script>

<style scoped></style>
