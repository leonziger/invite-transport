import Vue from 'vue/dist/vue.esm';

new Vue({
  el: '#vue-form',
  data: {
    focused: false,
    name: '',
    email: '',
    phone: '',
    message: '',
    name_error: '',
    email_error: '',
    phone_error: '',
    //checkPhoneField: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
    checkPhoneField: /^\d+$/,
    сheckTextField: /^([А-Я]+[а-я]{2,})$/,
    checkEmailField: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },

  methods: {

    checkForm: function(e) {
      e.target.classList.remove('contact-us__field_active');

      if (this.name && this.phone && this.email) {
        //console.log('All fields are full.');
        this.name_error = '';
        this.email_error = '';
        this.phone_error = '';
        alert("Thanks for filling this form'");
        this.clearForm();
        return true;
      }

      if (!this.name) {
        this.name_error = 'Write your name.';
      } else if (!this.validName(this.name)) {
        this.name_error = 'Write your correct name.';
      }  else {
        this.name_error = '';
      }

      if (!this.email) {
        this.email_error = 'Write your email.';
      } else if (!this.validEmail(this.email)) {
        this.email_error = 'Write your correct email.';
      }  else {
        this.email_error = '';
      }


      if (!this.phone) {
        this.phone_error = 'Write your phone.';
      } else if (!this.validPhone(this.phone)) {
        this.phone_error = 'Write your correct phone.';
      }  else {
        this.phone_error = '';
      }

      console.log('name = '+this.name, ' phone=' + this.phone);
      console.log('email = '+this.email);
    },

    validPhone(phone) {
      return this.checkPhoneField.test(phone);
    },

    validName(name) {
      return this.сheckTextField.test(name);
    },

    validEmail(email) {
      return this.checkEmailField.test(email);
    },

    showField(e) {
      e.target.classList.add('contact-us__field_active');
    },

    clearForm() {
        this.name = '';
        this.email = '';
        this.phone = '';
    }
  }
});

