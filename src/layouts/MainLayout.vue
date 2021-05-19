<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">

        <q-toolbar class="text-white rounded-borders row">
          <div class="row">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/cake-shop-logo-png-3.png" class="q-pt-xl col absolute-center" width="150" height="150" alt="Italian Trulli">
            <!-- <q-btn class="q-pl-md col absolute-center" style="width:10%" flat ripple="true" label="Cake Shop" to="/"/> -->
            <div class="q-gutter-md absolute-right q-pr-lg q-pt-sm justify-center">
              <q-btn outline round color="white" icon="shopping_basket"  @click="showCart = true"/>
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
      <Cart @closemyself="showCart = false" @toLogin="LoggedOut = true"/>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Cart from '../components/Cart'
export default {
  name: 'MainLayout',
  components: {Login, Profile, Cart},
  data () {
    return {
      tab: '',
      number: 500,
      LoggedIn: false,
      LoggedOut: false,
      email: null,
      password: null,
      authIconColor: 'white',
      showCart: false
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
        this.authIconColor = 'green'
      } else {
        this.authIconColor = 'white'
      }
      
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuth'])
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
</style>
