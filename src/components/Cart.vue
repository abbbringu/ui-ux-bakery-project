<template>
    <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none text-center">
          <div class="text-weight-bolder text-h4 col">Basket</div>
        </q-card-section>

          <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div v-if="noItems" class="column">
            <div class="row justify-center">
              <q-img class="col" src="../../public\images\NoItem.png" style="height: 20vh; max-width: 26vh"/>
            </div>
            <p class="text-center text-h5 text-weight-bolder">No Items In Basket</p>
          </div>
          <div v-else class="">
            <div class="row items-center aligne-center" v-for="(item, index) in data" :key="index">
              <div v-if="item != 0" class="row items-center q-pt-sm" style="width: 100%">
                <div class="col">
                  <div class="row justify-center">
                    <p></p>
                    <q-img class="col" :ratio="1/1" :src="item.image" style="max-height: 140px; max-width: 150px"/>
                  </div>
                  
                </div>
                <div class="col text-center column gt-xs">
                  <div class="col">
                    <p>{{item.title}}</p>
                  </div>
                  <div class="row justify-center">
                    <q-btn class="col" push  color="negative" label="x" @click="subtract(item, index)" v-if="item.amount === 1"/>
                    <q-btn class="col" push  color="negative" label="-" @click="subtract(item, index)" v-else/>
                    <p class="col">{{item.amount}}</p>
                    <q-btn class="col" push  color="positive" label="+" @click="add(item)"/>
                  </div>
                </div>
                <div class="col text-center">

                   <div class="col text-center column lt-sm">
                  <div class="col">
                    <p>{{item.title}}</p>
                  </div>
                  <div class="row justify-center">
                    <q-btn class="col" push  color="negative" label="x" @click="subtract(item, index)" v-if="item.amount === 1"/>
                    <q-btn class="col" push  color="negative" label="-" @click="subtract(item, index)" v-else/>
                    <p class="col">{{item.amount}}</p>
                    <q-btn class="col" push  color="positive" label="+" @click="add(item)"/>
                  </div>
                </div>
                
                  <p>$ {{item.amount * item.price}}</p>
                </div>
              </div>
            </div>
          </div>

        </q-card-section>

        <q-separator />
        <q-card-section style="max-height: 50vh" class="items-center" v-if="!noItems">
          <div class="row justify-center items-center q-ma-sm">
            <div class="col text-right q-ma-sm">
              <p class="text-h6 text-italic">Price:</p>
            </div>
            <div class="col text-left q-ma-sm">
              <p class="text-h6">$ {{totalCost}}</p>
            </div>
          </div>
        </q-card-section>
        <q-card-section v-if="!noItems">
          <div class="text-center row justify-center">
            <q-btn color="green" label="Checkout!" @click="checkout"/>
          </div>
        </q-card-section>
        <q-card-section v-if="noItems">
          <div class="text-center row justify-center">
            <q-btn color="orange-9" icon-right="shopping_basket" label="Get to shopping" to="/Cakes" @click="toShopping"/>
          </div>
        </q-card-section>
        <q-card-section v-if="isNotLoggedIn">
          <div class="text-center row justify-center">
            <q-btn color="orange-9" icon-right="account_circle" label="To Log in Screen" @click="toLogin"/>
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
            data: null,
            noItems: true,
            isNotLoggedIn: false,
            totalCost: 0,
            articleId: null
        }
    },
    methods: {
       ...mapActions('auth', ['login']),
       ...mapActions('user', ['CarModification']),
        add (product) {
          product.amount += 1
          this.checkItemsInBasket(this.data)
        },
        subtract(product, index){
          product.amount -= 1
          if(product.amount <= 0){
            this.data[index] = 0
          }
          this.checkItemsInBasket(this.data)
        },
        checkItemsInBasket(data){ // For getting full cost and check if there are items in the basket
          let item = false
          this.totalCost = 0
          data.forEach(element => {
            if(element != 0){
              this.totalCost += element.price * element.amount
              item = true
            }
          })
          if(item){
            this.noItems = false
          } else {
            this.noItems = true
          }
        },
        toShopping(){ //open cakes tabs
          this.$emit('closemyself')
        },
        toLogin(){ //open login tab
          this.$emit('toLogin')
          this.isNotLoggedIn = false
        },
        checkout(){ //Execute when user tries to chekout 
          if(this.isAuth){
            console.log('du är innloggad')
            this.CarModification(this.data)
            this.beginOrder()
          } else {
            console.log('you need to log in to continue')
            this.showNotif('You need to login in order to proceed', 'red', 'error')
            this.isNotLoggedIn = true
          }
        },
        SendOrder(orderid){ //Send to server
          var cake = []
          this.data.forEach(element => {
            if(element != 0) {
              var data = {id: element.id, quantity: element.amount}
              cake.push(data)
            }
          })
          console.log(cake)
          var body = {
            id: orderid+1,
            customerid: this.user.id,
            cakes:cake
          }
          console.log(body)

          axios.post("http://localhost:3000/orders", body)
            .then(response => {
              console.log('jag skickade')
              this.data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
              this.$emit('purchase')
            })

        },
        beginOrder(){ //Sending to server
           axios.get(`http://localhost:3000/orders`)
            .then(response => {
              this.SendOrder(response.data.length)
            })
        },
        showNotif (message, color, icon) { //notifikation
            this.$q.notify({
                color: color,
                textColor:'white',
                icon: icon,
                message: message,
                position: 'top',
                timeout: 2000
            })
        }
    },
    computed: {
    ...mapGetters('user', ['cart']),
    ...mapGetters('auth', ['isAuth']),
    ...mapGetters('user', ['user'])
  },
    created(){
      this.data = JSON.parse(JSON.stringify(this.cart))
      this.checkItemsInBasket(this.data)
    },
    beforeDestroy (){ //Innan den förstörs så skickar den till vuex vad användaren har ändrat
      this.CarModification(this.data)
      this.$emit('addToBasket')
    }
  
}
</script>
