<template>
    <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-weight-bolder text-h4 col">Profile</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-card-section class="row justify-center">
         <img style="width:200px;" :src="user.avatar" alt="profile">
        </q-card-section>
        <q-card-section class=" col row justify-center">
          <div style="width: 60%" class="text-center">
            <p>{{user.name}}</p>
          </div>
        </q-card-section>
        <q-card-section class="row justify-center">
          <div style="width: 60%" class="text-center">
           <p>Joined us the {{user.timestamp}}</p>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat size="23px" label="Logout" color="negative" v-close-popup='veryfying' @click="veryfyingstuff" />
        </q-card-actions>
      </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: 'Profile',
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
          this.$emit('isAuthed', false)
          this.veryfying = true
          this.login(false)
          this.setUserData({})
          this.showNotify('Logged Out', 'positive') //    Kellie_Kunde1@yahoo.com Bt9BnesdD3IW3tb
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
    ...mapGetters('user', ['user'])
  }
  
}
</script>
