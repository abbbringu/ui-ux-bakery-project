<template>
    <q-card style="max-width: 900px; max-height: 90%;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-weight-bolder text-h5 col text-center">{{fromParent.title}}</div>
        </q-card-section>

        <q-card-section class="row justify-center">
          <q-img :src="fromParent.image" :ratio="16/9" style="width: 60vh"/>
        </q-card-section>

        <q-separator />

        <q-card-section class=" col row justify-center scroll" style="max-height: 25vh">
          <div class="text-desc">
            <p>{{fromParent.detailDescription}}</p>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="row justify-center">
          <div class="col">   
          </div>
          <div class="col">
            <div class="column ">
              <p class="text-center">$ {{fromParent.price}} / Each</p>
               <div class="row justify-center">
                  <q-btn class="col" push  color="red-9" label="-" @click="qtyChanger(false)" />
                  <p class="col text-center">{{qty}}</p>
                  <q-btn class="col" push  color="green-9" label="+" @click="qtyChanger(true)" />
                </div>
              <p class="text-center">Total Price: $ {{totalCost}}</p>
            </div>
          </div>
          <div class="col">
          </div>
        </q-card-section>

        <q-card-section class="row justify-center">
          <div class="row justify-center items-center">
            <q-btn class="col" size="1.5vh" push  color="orange-9" label="Add To Basket" v-if="qty > 0" @click="addToBasket" />
          </div>
        </q-card-section>
      </q-card>
</template>

<script>
export default {
    name: 'Login',
    props: ['fromParent'], // Tar data från förälder komponent
    data() {
        return{
            qty: 0,
            totalCost: 0
        }
    },
    methods: {
        showNotify(message, color, icon) {
          this.$q.notify({
            color: color,
            textColor:'white',
            icon: icon,
            message: message,
            position: 'top',
            timeout: 2000
          })
        },
        qtyChanger(add) {
          if(add){
            this.qty++
            this.priceCalculator()
          } else if (this.qty > 0) {
            this.qty--
            this.priceCalculator()
          }
          
        },
        priceCalculator(){
          this.totalCost = this.qty * this.fromParent.price
        },
        addToBasket(){
          this.$emit('addToBasket', this.fromParent, this.qty)
          console.log('adding to basket')
          this.showNotify('Added To Basket', 'positive', 'sentiment_satisfied_alt')
          this.$emit('closethis')
          this.$emit('addedToBasket')
        }
    }
  
}
</script>
<style scoped>
.text-desc{
  width: 70%;
}

.img-cotainer {
  max-width: 60vw;
}
@media only screen and (max-width: 768px) {
  .text-desc {
    width: 100%;
  }
}
</style>
