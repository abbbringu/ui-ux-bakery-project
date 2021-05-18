<template>
    <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none text-center">
          <div class="text-weight-bolder text-h4 col">Cart</div>
        </q-card-section>

          <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div class="row items-center aligne-center q-ma-sm" v-for="(item, index) in data" :key="index">
            <div v-if="item != 0" class="row items-center" style="width: 100%">
              <div class="col">
                <div class="row justify-center">
                  <p></p>
                  <q-img class="col" :src="item.image" style="height: 140px; max-width: 150px"/>
                </div>
                
              </div>
              <div class="col text-center column">
                <div class="col">
                  <p>{{item.title}}</p>
                </div>
                <div class="row justify-center">
                  <q-btn class="col" push  color="red-9" label="x" @click="subtract(item, index)" v-if="item.amount === 1"/>
                  <q-btn class="col" push  color="red-9" label="-" @click="subtract(item, index)" v-else/>
                  <p class="col">{{item.amount}}</p>
                  <q-btn class="col" push  color="green-9" label="+" @click="add(item)"/>
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
import { cart } from 'src/store/user/getters'
export default {
    name: 'Profile',
    data() {
        return{
            email: null,
            password: null,
            veryfying: false,
            data: null,
        }
    },
    methods: {
       ...mapActions('auth', ['login']),
       ...mapActions('user', ['CarModification']),
        showNotify(message, color) {
          this.$q.notify({
            color: color,
            textColor:'white',
            icon: 'error',
            message: message,
            position: 'top',
            timeout: 1000
          })
        },
        add (product) {
          product.amount += 1
        },
        subtract(product, index){
          console.log('subbed')
          product.amount -= 1
          if(product.amount <= 0){
            this.data[index] = 0
          }
          //this.SubtractAmountCart(product)
        }
    },
    computed: {
    ...mapGetters('user', ['cart'])
  },
    created(){
      this.data = JSON.parse(JSON.stringify(this.cart))
    },
    beforeDestroy (){ //Innan den förstörs så skickar den till vuex vad användaren har ändrat
      this.CarModification(this.data)
    }
  
}
</script>
