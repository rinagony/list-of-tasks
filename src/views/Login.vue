<template>
  <div id="login">
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="card-content">
        <span class="card-title">Home bookkeeping</span>
        <div class="input-field">
          <input
              id="email"
              type="text"
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          >
          <label for="email">Email</label>
          <small v-if="$v.email.$dirty && !$v.email.required" class="helper-text invalid">Email field must not be empty</small>
          <small v-if="$v.email.$dirty && !$v.email.email" class="helper-text invalid">Enter a valid Email</small>
        </div>
        <div class="input-field">
          <input
              id="password"
              type="password"
              v-model.trim="password"
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          >
          <label for="password">Password</label>
          <small v-if="$v.password.$dirty && !$v.password.required" class="helper-text invalid">Enter password</small>
          <small v-else-if="$v.password.$dirty && !$v.password.minLength" class="helper-text invalid">Password should be {{ $v.password.$params.minLength.min}} symbols. Now it is {{ password.length }}</small>
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect waves-light auth-submit"
              type="submit"
          >
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <router-link to="/register">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    
}
</script>