<template>
  <div>
    <div class="row justify-center">
      <img src="https://14slph41wbtl2yi39625md6s-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/34345-the-power-of-teamwork-blog-hero-image_1500x480_v1-01-1140x365.jpg" width="100%" height="500" alt="Italian Trulli">
    </div>
    <div class="row justify-center">
      <h1 class="text-center"><strong>Our staff</strong></h1>
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
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    showNotif (value) {
        console.log("test");
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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>