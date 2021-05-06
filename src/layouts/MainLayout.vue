<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">

        <q-toolbar class="text-white rounded-borders row">
          <div class="row">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/cake-shop-logo-png-3.png" class="q-pt-xl col absolute-center" width="150" height="150" alt="Italian Trulli">
            <!-- <q-btn class="q-pl-md col absolute-center" style="width:10%" flat ripple="true" label="Cake Shop" to="/"/> -->
            <div class="q-gutter-md absolute-right q-pr-lg q-pt-sm justify-center">
              <q-btn outline round color="white" icon="shopping_basket" />
              <q-btn outline round color="white" icon="person" @click="loginScreen" />
            </div>
          </div> 
        </q-toolbar>
        <q-toolbar inset/>
        <q-toolbar inset class="text-white row justify-center">
          <q-tabs @click="resetnav" v-model="tab" shrink class="col q-pa-sm justify-center absolute-center no-warp" :breakpoint="number">
            <!-- <q-tab name="tab1" label="Meny" to="/meny" /> -->
            <q-route-tab class="col" name="tab1" label="About us" to="/AboutUs" exact/>
            <q-route-tab class="col" name="tab2" label="Home" to="/" exact/>
            <q-route-tab class="col" name="tab4" label="Cakes" to="/Cakes" exact/>
          </q-tabs>
        </q-toolbar>
    </q-header>

    <q-dialog v-model="LoggedIn">
      <Login></Login>  
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Login from '../components/Login'
export default {
  name: 'MainLayout',
  components: {Login},
  data () {
    return {
      tab: '',
      number: 500,
      LoggedIn: false,
      LoggedOut: false,
      email: null,
      password: null
    }
  },
  methods: {
    resetnav () {
      this.tab = ''
    },
    loginScreen () {
      console.log("in a function")
      if(this.isAuth){
        console.log("logged in")
        this.LoggedIn = true
        this.LoggedOut = false
      }
      else
      {
        console.log("not logged in")
        this.LoggedIn = false
        this.LoggedOut = true
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
