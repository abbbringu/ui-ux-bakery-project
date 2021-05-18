<template>
  <div class="q-pa-md q-pt-xl row items-start justify-center q-gutter-md">
    
    <q-card class="my-card" flat bordered  v-for="cake in cakes" :key="cake.id">
      <q-card-section @click="dialog(cake.title)" class="clickable">
        <div class="row justfy-center">
          <q-img class="thumbnail col" :src="cake.image"/>
        </div>
        
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs clickable">{{cake.title}}</div>
          <div class="text-caption text-grey clickable">
            {{cake.previewDescription}}
          </div>
        </q-card-section>
      </q-card-section>

      <q-card-actions class="absolute-bottom q-pa-lg row justify-center">
        <div class="text-weight-bolder text-h6 text-orange-9 col text-center absolute-center q-pb-lg">{{cake.price}}$</div>
        <div class=" absolute-bottom-right">
          <q-btn size="lg" class="q-ma-sm" round color="orange" icon="shopping_basket" @click="Addtocart(cake, 1)"/>
        </div>
        <q-space />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      cakes: null,
      data: null,
      openDialog: false
    }
  },
  created() {
    axios.get(`http://localhost:3000/cakes`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.cakes = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
     ...mapActions('user', ['cartAction']),
    dialog(value){
      console.log(value)
      this.data = value
    },
    Addtocart(product, quantity) {
      product.amount = quantity
      this.cartAction(product)
    }
  },
  computed: {
    ...mapGetters('user', ['cart'])
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  height: 550px

.clickable 
  cursor: pointer

.thumbnail
  width: 250px
  height: 250px


</style>