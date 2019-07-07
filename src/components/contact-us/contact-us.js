import Vue from 'vue/dist/vue.esm';

new Vue({
  el: '#form',
  data: {
    email: ''
  },
  computed: {
    isEmailValid() {
      const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return regExp.test(this.email);
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.isEmailValid);
    }
  }
});

