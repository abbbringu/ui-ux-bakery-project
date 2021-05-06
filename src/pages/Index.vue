<template>
  <q-page class="">
    <div class="relative-position" style="width:100%;" >
    <q-carousel swipeable animated arrows v-model="slide" :fullscreen.sync="fullscreen" infinite height="700px">
      <q-carousel-slide :name="1" img-src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=1200:*" />
      <q-carousel-slide :name="2" img-src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?quality=90&resize=500%2C454" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
  <h1 @click="log">hejar {{isAuth}}</h1>
    <br/>
    <h1 @click="login(false)">test</h1>  
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
   data () {
    return {
      slide: 1,
      fullscreen: false
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    ...mapActions('auth', ['logout']),
    log: function () {
      this.login(true)
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuth'])
  }
}
</script>
