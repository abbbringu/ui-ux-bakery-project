<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">

        <q-toolbar class="text-white rounded-borders row">
          <div class="row">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/cake-shop-logo-png-3.png" class="q-pt-xl col absolute-center clickable" width="150" height="150" alt="Italian Trulli" @click="$router.push({path: '/'})">
            <!-- <q-btn class="q-pl-md col absolute-center" style="width:10%" flat ripple="true" label="Cake Shop" to="/"/> -->
            <div class="q-gutter-md absolute-right q-pr-lg q-pt-sm justify-center">
              <q-btn outline round color="white" icon="shopping_basket"  @click="showCart = true">
                <q-badge color="orange-9" text-color="white" floating v-if="amountInCart > 0">
                {{amountInCart}}
                </q-badge>
                </q-btn>
              <q-btn outline round :color="authIconColor" icon="person" @click="loginScreen" />
            </div>
          </div> 
        </q-toolbar>
        <q-toolbar inset/>
        <q-toolbar inset class="text-white row justify-center">
          <q-tabs @click="resetnav" v-model="tab" class="col q-pa-sm justify-center absolute-center no-warp text-center" breakpoint="0">
            <!-- <q-tab name="tab1" label="Meny" to="/meny" /> -->
            <q-route-tab class="col" name="tab1" label="About us" to="/AboutUs" exact/>
            <q-route-tab class="col" name="tab2" label="Home" to="/" exact/>
            <q-route-tab class="col" name="tab4" label="Cakes" to="/Cakes" exact/>
          </q-tabs>
        </q-toolbar>
    </q-header>

    <q-dialog v-model="LoggedOut">
      <Login @isAuthed="changeIcon"></Login>  
    </q-dialog>

    <q-dialog v-model="LoggedIn">
      <Profile @isAuthed="changeIcon" />
    </q-dialog>

    <q-dialog v-model="showCart">
      <Cart @closemyself="showCart = false" @toLogin="LoggedOut = true" @addToBasket="changeCartIcon" @purchase="purchase" />
    </q-dialog>

    <q-dialog v-model="checkmark" persistent class="bg-white">
      <q-card style="width: 100%, height:100%">
        <img id="test"  basic rel="preload" preload="auto" src="../../public\\checkmarkgif.gif" alt="this slowpoke moves"  width="250" />
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view @addToBasket="changeCartIcon" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Cart from '../components/Cart'
import Checkmark from '../components/Checkmark'
export default {
  name: 'MainLayout',
  components: {Login, Profile, Cart, Checkmark},
  data () {
    return {
      tab: '',
      number: 500,
      LoggedIn: false,
      LoggedOut: false,
      email: null,
      password: null,
      authIconColor: 'white',
      showCart: false,
      amountInCart:0,
      checkmark: false
    }
  },
  methods: {
    resetnav () {
      this.tab = ''
    },
    loginScreen () {
      if(this.isAuth){
        this.LoggedIn = true
        this.LoggedOut = false
      }
      else
      {
        this.LoggedIn = false
        this.LoggedOut = true
      }
    },
    changeIcon: function(value) {
      if(value){
        this.authIconColor = 'orange-9'
      } else {
        this.authIconColor = 'white'
      }
      
    },
    changeCartIcon(){
      this.amountInCart = 0
      this.cart.forEach(element => {
      if(element != 0){
        this.amountInCart++
      }
    })
    },
    purchase(){
      console.log('test')
      this.showCart = false
      this.checkmark = true
      this.init()
    },
    init() {
        setTimeout(() => {  
          var img = document.getElementById('test');
          this.checkmark = false 
          img.src = "";
          }, 6000);
      }
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
    ...mapGetters('user', ['cart'])
  },
  mounted () {
    this.amountInCart = 0
    this.cart.forEach(element => {
      if(element != 0){
        this.amountInCart++
      }
    })

    if(this.isAuth){
      this.changeIcon(true)
    }
  }
}
</script>

<style>
.q-page-container {
  padding-top: 0 !important;
}
.header {
  background: rgba(0, 0, 0, 0.60) /* Green background with 30% opacity */
}
.clickable {
  cursor: pointer
}
</style>
