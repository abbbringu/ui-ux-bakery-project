<template>
    <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none text-center">
          <div class="text-weight-bolder text-h4 col">Cart</div>
        </q-card-section>

          <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div class="row items-center aligne-center" v-for="(item, index) in cart" :key="index">
            <div v-if="item != 0" class="row items-center" style="width: 100%">
              <div class="col">
                <div class="row justify-center">
                  <p></p>
                  <q-img class="col" :src="item.image" style="height: 140px; max-width: 150px"/>
                </div>
                
              </div>
              <div class="col text-center">
                <div class="row justify-center">
                  <q-btn class="col"  color="orange-9" label="<" />
                  <p class="col">{{item.amount}}</p>
                  <q-btn class="col"  color="orange-9" label=">" />
                </div>
              </div>
              <div class="col text-center">
                <p>$ {{item.amount * item.price}}</p>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          <div class="text-center row justify-center">
            <q-btn color="green" label="Checkout!" />
          </div>
        </q-card-section>
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
    ...mapGetters('user', ['cart'])
  }
  
}
</script>
