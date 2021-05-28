<template>
  <div class="q-pa-md q-pt-xl container row items-start justify-center q-gutter-md">
    <q-card class="my-card gt-xs" flat bordered  v-for="cake in cakes" :key="cake.id"> <!-- För desktop -->
      <q-card-section @click="dialog(cake)" class="clickable">
        <div class="row justfy-center">
          <q-img class="thumbnail col" :src="cake.image"/>
        </div>
        
        <q-card-section class="">
          <div class="text-h5 q-mt-sm q-mb-xs clickable">{{cake.title}}</div>
          <div class="text-caption text-grey clickable">
            {{cake.previewDescription}}
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section class="clickable" style="height: 100%"  @click="dialog(cake)"/>
      <q-card-actions class="absolute-bottom q-pa-lg row justify-center">
        <div class="text-weight-bolder text-h6 text-orange-9 col text-center absolute-center q-pb-lg">$ {{cake.price}}</div>
        <div class=" absolute-bottom-right">
          <q-btn size="lg" class="q-ma-sm" round color="orange" icon="shopping_basket" @click="Addtocart(cake, 1)"/>
        </div>
        <q-space />
      </q-card-actions>
    </q-card>

        <q-card class="my-card-sm lt-sm"  v-for="cake in cakes" :key="cake.id*100">
          <q-card-section horizontal class="clickable" @click="dialog(cake)">
            <q-img
              class="col-5"
              :src="cake.image"
            />
            <q-card-section class="col">
                <p class="text-subtitle1">{{cake.title}}</p>
                <p>{{cake.previewDescription}}</p>
            </q-card-section>
          </q-card-section>
        <q-separator />
      <q-card-section>
        <div class="row justify-between items-center">
          <div class="col" @click="dialog(cake)" />
          <div class="col" @click="dialog(cake)">
            <p class="text-center text-subtitle2 text-orange-9">$ {{cake.price}}</p>
          </div>
          <div class="col">
            <div class="row justify-center">
                <q-btn size="md" class="q-ml-sm" round color="orange" icon="shopping_basket" @click="Addtocart(cake, 1)"/>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="showCake">
      <ShowCake v-bind:fromParent="data" @addToBasket="Addtocart(...arguments)" @closethis="showCake = false" @addedToBasket="SendToMain"/>
    </q-dialog>

    
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'
import ShowCake from '../components/ShowCake'
export default {
  components: {ShowCake},
  data () {
    return {
      cakes: null,
      error: null,
      data: null,
      openDialog: false,
      showCake: false
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
    console.log('Afton_Champlin@gmail.com l5zckkComJGllkn');
  },
  methods: {
     ...mapActions('user', ['cartAction']),
    dialog(value){
      this.data = value
      this.showCake = true
    },
    Addtocart(product, quantity) {
      product.amount = quantity
      this.cartAction(product)
      this.showNotify('Added To Basket', 'positive', 'sentiment_satisfied_alt')
      this.SendToMain()
    },
    showNotify(message, color, icon) {
          this.$q.notify({
            color: color,
            textColor:'white',
            icon: icon,
            message: message,
            position: 'top',
            timeout: 1000
          })
        },
        SendToMain(){
          this.$emit('addToBasket')
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

.container
  padding-top: 170px

.clickable 
  cursor: pointer

.thumbnail
  width: 250px
  height: 250px

.my-card-sm
  width: 100%
  max-width: 350px

</style>