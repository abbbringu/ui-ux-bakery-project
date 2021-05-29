<template>
    <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-weight-bolder text-h4 col">Login</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-card-section class="row justify-center">
         <q-icon class="col" name="person" style="font-size: 10em;" />
        </q-card-section>
        <q-card-section class=" col row justify-center">
          <div style="width: 70%" class="">
            <q-input class="col" type="email" color="orange-9" label="E-mail" v-model="email" :rules="[val => val && val.length > 0 || 'write your email here']"></q-input>
          </div>
        </q-card-section>
        <q-card-section class="row justify-center">
          <div style="width: 70%" class="">
            <q-input class="col" type="password" color="orange-9" label="Password" v-model="password" :rules="[val => val && val.length > 0 || 'write your password here']"></q-input>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat size="23px" label="Login" color="orange-9" v-close-popup='veryfying' @click="veryfyingstuff" />
        </q-card-actions>
      </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return{
            email: null,
            password: null,
            veryfying: false,
            data: null
        }
    },
    methods: {
       ...mapActions('auth', ['login']),
       ...mapActions('user', ['setUserData']),
        veryfyingstuff(){   // kollar om mail och lösen finns i get posten 
            this.data.forEach(element => {
              if(element.email == this.email){
                if(element.password == this.password){
                  this.login(true)
                  this.setUserData(element)
                  this.veryfying = true
                  this.$emit('isAuthed', true)
                  this.showNotify('Logged In', 'positive', 'done') //    Kellie_Kunde1@yahoo.com Bt9BnesdD3IW3tb
                }
              }
            })
            if(this.isAuth == false){ // Kollar om användaren är inloggad och ändrar icon färg
              console.log('failed to login')
              this.showNotify('Email or password were incorrect', 'negative', 'error')
            }
        },
        showNotify(message, color, icon) {
          this.$q.notify({
            color: color,
            textColor:'white',
            icon: icon,
            message: message,
            position: 'top',
            timeout: 1000
          })
        }
    },
    created() {
      console.log('ive tried')
    axios.get(`http://localhost:3000/customers`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    },
    computed: {
    ...mapGetters('auth', ['isAuth'])
  }
  
}
</script>
