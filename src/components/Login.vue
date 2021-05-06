<template>
    <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-weight-bolder text-h4 col">Log in</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-card-section class="row justify-center">
         <q-icon class="col" name="person" style="font-size: 10em;" />
        </q-card-section>
        <q-card-section class=" col row justify-center">
          <div style="width: 60%" class="">
            <q-input class="col" type="email" label="E-mail" v-model="email" :rules="[val => val && val.length > 0 || 'write your email here']"></q-input>
          </div>
        </q-card-section>
        <q-card-section class="row justify-center">
          <div style="width: 60%" class="">
            <q-input class="col" type="password" label="Password" v-model="password" :rules="[val => val && val.length > 0 || 'write your password here']"></q-input>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat size="23px" label="Log In" color="primary" v-close-popup='veryfying' @click="veryfyingstuff" />
        </q-card-actions>
      </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
        veryfyingstuff(){   // kollar om mail och lösen finns i get posten 
            
        }
    },
    created() {
    axios.get(`http://localhost:3000/customers`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  
}
</script>
