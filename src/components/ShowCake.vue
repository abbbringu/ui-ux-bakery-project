<template>
    <q-card style="width: 80vw; max-width: 100vw; height: 85vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-weight-bolder text-h4 col text-center">{{fromParent.title}}</div>
        </q-card-section>

        <q-card-section class="row justify-center">
          <q-img :src="fromParent.image" :ratio="16/9" style="width: 70vh"/>
        </q-card-section>

        <q-card-section class=" col row justify-center">
          <div style="width: 70%" class="">
            <p>{{fromParent}}</p>
          </div>
        </q-card-section>
        <q-card-section class="row justify-center">
          <div style="width: 70%" class="">
            <!-- <q-input class="col" type="password" label="Password" v-model="password" :rules="[val => val && val.length > 0 || 'write your password here']"></q-input> -->
          </div>
        </q-card-section>
      </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Login',
    props: ['fromParent'],
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
                  this.showNotify('Logged In', 'positive') //    Kellie_Kunde1@yahoo.com Bt9BnesdD3IW3tb
                }
              }
            })
            if(this.isAuth == false){
              console.log('failed')
              this.showNotify('Email or password were incorrect', 'negative')
            }
        },
        showNotify(message, color) {
          this.$q.notify({
            color: color,
            textColor:'white',
            icon: 'error',
            message: message,
            position: 'top',
            timeout: 1000
          })
        }
    },
    computed: {
    ...mapGetters('auth', ['isAuth'])
  }
  
}
</script>
