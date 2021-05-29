<template>
  <div>
    <div class="row justify-center">
      <img src="https://www.bacanal.com.ar/wp-content/uploads/2018/02/CAFE-INSTAGRAM-VA2.jpg" width="100%" style="min-height:250px; max-height:700px" alt="Italian Trulli">
    </div>
    <div class="column">
      <p class="text-center text-h2 text-weight-bold">About us</p>
      <div class="row justify-center">
        <p class="text-center text-container">We are a baking company that makes sure that you can get the best cake for every occation. We have ever since 1960 trying to make the best looking cakes. With our fast moving staff, we always imporv our recipies and indigriens. We make sure to use the best quality product for you to enjoy. For every second we improve cake for our customers. Ever since the start we found a equation for cake success. Good cakes * Beautifull cakes = the perfext experience for our customer. Not only are we committed to but so are our customers. We have created a greate comunity that always try to strive to make the best of cakes. We serve everyone anytime, for every event.</p>
      </div>
      
    </div>
    <div class="row justify-center">
      <h3 class="text-center"><strong>Our staff</strong></h3>
    </div>
    <div class="q-pa-md row items-start q-gutter-xl justify-around">
      <div v-for="person in staff" :key="person.id" class="justify-around row q-pa-sm">

        <q-card class="my-card" style="width:500px; hieght:500px">
            <q-img
            :src="person.avatar"
            basic
          >
            <div class="absolute-bottom text-subtitle2 text-center">
              {{person.role}}
            </div>
          </q-img>
            <q-card-actions align="center">
                <q-btn flat round color="red" icon="mail" @click="showNotif(person.email)" />
                <q-btn flat round color="teal" icon="phone" @click="showNotif(person.phone)"/>
            </q-card-actions>
            <q-card-actions align="center">
                <a>{{person.name}}</a>
            </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { copyToClipboard } from 'quasar';
export default {
  data () {
    return {
      expanded: false,
      staff: null
    }
  },
  created() {
    axios.get(`http://localhost:3000/staff`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.staff = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods:{
    showNotif (value) { //notification
        copyToClipboard(value)
            .then(() => {
            this.$q.notify({
                color: 'positive',
                textColor:'white',
                icon: 'content_copy',
                message: 'Copied',
                position: 'top',
                timeout: 1000
            })
            })
            .catch(() => {
            })
        }
  }
}
</script>

<style>
.my-card{
  width: 100%;
  max-width: 350px;
}
.text-container{
  width: 70%;
  font-size: 25px;
}

@media only screen and (max-width: 768px) {
  .text-container{
    width: 90%;
    font-size: 15px;
  }
}
</style>