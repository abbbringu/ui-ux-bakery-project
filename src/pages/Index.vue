<template>
  <q-page class="">
    <head>
      <meta charset="utf-8">
      <title>Glowing Social Icons</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    </head>
    <div class="" style="width:100%;" >
    <q-carousel swipeable animated arrows v-model="slide" infinite style="height: 500px;">
      <q-carousel-slide :name="1" img-src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=1200:*" />
      <q-carousel-slide :name="2" img-src="https://images.squarespace-cdn.com/content/v1/56d51f90d210b814da2a2146/1594244125072-GAFCXPBFHTAI74UGUNAU/ke17ZwdGBToddI8pDm48kOzY2HdBsXpWD8u55OOtj757gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua8Q0Iqr6VBd1Xwoc9J4c2nkHT7qKYggIjwD0ALLXd2vXejQve6EWhtsEXNp5cp4uw/signature%2Bspread.jpg" />
      <q-carousel-slide :name="3" img-src="https://images.immediate.co.uk/production/volatile/sites/2/2017/05/Oreo-Fridge-cake.jpg?quality=90&crop=17px%2C338px%2C4695px%2C2020px&resize=960%2C408" />
      <q-carousel-slide :name="4" img-src="https://www.oetker.co.uk/Recipe/Recipes/oetker.co.uk/uk-en/baking/image-thumb__66911__RecipeDetailsLightBox/mini-chocolate-victoria-sponge-cakes.jpg" />
    </q-carousel>
  </div>

  <div class="row q-pb-md">
    <div class="col gt-sm">
      <div class="column">
          <q-img contain src="../../public\images\IndexCakeOne.png" class="cakeone" @click="pushToOrder"/>         
      </div>
      
    </div>
    <div class="col q-pt-xl">
      <q-img src="../../public\images\text1.png" @click="pushToOrder"/>
    </div>
  </div>

  <div class="row orderstepsbackground" style="height: 40vh"> <!-- Visar 3 steg för att beställa -->
    <div class="column justify-center" style="width:100%">
      <div class="col">
        <p class="text-center q-pt-md text-weight-bold text-h5">Order online in 3 Easy steps</p>
      </div>
      <div class="col-7"> 
        <div class="row justify-around q-pt-xl">
          <div class="col" v-for="n in orderSteps" :key="n.id">
            <div class="row justify-center" >
              <div class="column">
                <div class="row justify-center">
                  <q-img contain :src="n.image" :ratio="1/1" width="100px"/> 
                </div>
               <p class="text-center text-weight-bold text-subtitle1 q-pt-sm col text-italic">{{n.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col">
        <div class="col column justify-between">
          <div class="col">
            <p class="text-center text-subtitle2 text-italic orderstepsbackground">Pice of cake!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-white gt-sm" style="width:100%" @click="pushToOrder">
      <q-img contain src="../../public\images\Section2.png" width="100%"/> 
    </div>

    <div class="row gt-xs" style="height: 40vh; width: 100%"> <!-- Why us section -->
      <div class="column justify-center" style="width:100%">
        <div class="col">
          <p class="text-center q-pt-md text-weight-bold text-h5">Why us?</p>
        </div>
        <div class="col-7"> 
          <div class="row justify-around q-pt-sm warp">
            <div class="col" v-for="n in WhyUsIcon" :key="n.id">
              <div class="row justify-center">
                <div class="column">
                  <div class="row justify-center">
                    <q-img contain :src="n.image" :ratio="1/1" width="100px"/> 
                  </div>
                <p class="text-center text-weight-bold text-subtitle1 q-pt-sm col text-italic">{{n.text}}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div> 
      </div>
    </div>
    <div class="row lt-sm q-pb-xl q-mb-xl" style="height: 50vh; width: 100%"> <!-- Why us section -->
      <div class="column justify-center" style="width:100%">
        <div class="col">
          <p class="text-center q-pt-md text-weight-bold text-h5">Why us?</p>
        </div>
        <div class="col-10"> 
          <div class="row justify-around warp q-mb-xl">
            <div class="col-6" v-for="n in WhyUsIcon" :key="n.id">
              <div class="row justify-center">
                <div class="column">
                  <div class="row justify-center">
                    <q-img contain :src="n.image" :ratio="1/1" width="100px"/> 
                  </div>
                <p class="text-center text-weight-bold text-subtitle1 q-pt-sm col text-italic">{{n.text}}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div> 
      </div>
    </div>

    <div class="row q-pt-xl" style="height: 40vh; width: 100%"> <!-- Find us -->
      <div class="column justify-center relative-center" style="width:100%">
        <div class="col">
          <p class="text-center q-pt-md text-weight-bold text-h5">Find us</p>
        </div>
        <div class="col-7"> 
          <div class="row justify-around">
             <ul class="row justify-center findus">
              <li @click="direct"><i class="fab fa-facebook-f q-pl-md"></i></li>
              <li @click="direct"><i class="fab fa-twitter q-pl-md"></i></li>
              <li @click="direct"><i class="fab fa-instagram q-pl-md"></i></li>
              <li @click="direct"><i class="fab fa-linkedin-in q-pl-md"></i></li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
   data () {
    return {
      slide: 1,
      socialmedia: [
        {id:1, image: 'images/StepsToOrderOne.png', text:'Select your cake'},
        {id:2, image: 'images/StepsToOrderTwo.png', text:'Refine you order'},
        {id:3, image: 'images/StepsToOrderThree.png', text:'Checkout!'},
      ],
      orderSteps: [
        {id:1, image: 'images/StepsToOrderOne.png', text:'Select your cake'},
        {id:2, image: 'images/StepsToOrderTwo.png', text:'Refine you order'},
        {id:3, image: 'images/StepsToOrderThree.png', text:'Checkout!'},
      ],
      WhyUsIcon: [
        {id:1, image: 'images/Icons/one.png', text:'Quality made'},
        {id:2, image: 'images/Icons/two.png', text:'Environmental friendly'},
        {id:3, image: 'images/Icons/three.png', text:'Secure Payment process'},
        {id:4, image: 'images/Icons/four.png', text:'Ecological natural grown ingredients'}
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    pushToOrder(){ // REdirect to cakes tab
      this.$router.push({path:'Cakes'})
    },
    direct(){ //open page outside of the application
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
    ...mapGetters('user', ['user']),
    ...mapGetters('user', ['cart'])
  }
}
</script>

<style scoped>
.cakeone {
  width: 50vw;
  height: auto;
}
.image-container{
  height: 10px;
}
.orderstepsbackground{
  background-color: rgb(245, 184, 143);
}
.findus {
  width: 450px;
  padding-right: 35px ;
}

@media only screen and (max-width: 768px) {
  .findus{
    width: 300px;
  }
}
ul li{
  position: relative;
  display: block;
  color: rgb(122, 122, 122);
  font-size: 30px;
  height: 60px;
  width: 60px;
  background: #c2bfbb;
  line-height: 60px;
  border-radius: 50%;
  margin: 0 15px;
  cursor: pointer;
  transition: .5s;
}
ul li:before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  /* background: #d35400; */
  border-radius: 50%;
  transform: scale(.9);
  z-index: -1;
  transition: .5s;
}
ul li:nth-child(1):before{
  background: #4267B2;
}
ul li:nth-child(2):before{
  background: #1DA1F2;
}
ul li:nth-child(3):before{
  background: #E1306C;
}
ul li:nth-child(4):before{
  background: #2867B2;
}
ul li:nth-child(5):before{
  background: #ff0000;
}
ul li:hover:before{
  filter: blur(3px);
  transform: scale(1.2);
  /* box-shadow: 0 0 15px #d35400; */
}
ul li:nth-child(1):hover:before{
  box-shadow: 0 0 15px #4267B2;
}
ul li:nth-child(2):hover:before{
  box-shadow: 0 0 15px #1DA1F2;
}
ul li:nth-child(3):hover:before{
  box-shadow: 0 0 15px #E1306C;
}
ul li:nth-child(4):hover:before{
  box-shadow: 0 0 15px #2867B2;
}
ul li:nth-child(5):hover:before{
  box-shadow: 0 0 15px #ff0000;
}
ul li:nth-child(1):hover{
  color: #456cba;
  box-shadow: 0 0 15px #4267B2;
  text-shadow: 0 0 15px #4267B2;
}
ul li:nth-child(2):hover{
  color: #26a4f2;
  box-shadow: 0 0 15px #1DA1F2;
  text-shadow: 0 0 15px #1DA1F2;
}
ul li:nth-child(3):hover{
  color: #e23670;
  box-shadow: 0 0 15px #E1306C;
  text-shadow: 0 0 15px #E1306C;
}
ul li:nth-child(4):hover{
  color: #2a6cbb;
  box-shadow: 0 0 15px #2867B2;
  text-shadow: 0 0 15px #2867B2;
}
ul li:nth-child(5):hover{
  color: #ff1a1a;
  box-shadow: 0 0 15px #ff0000;
  text-shadow: 0 0 15px #ff0000;
}
</style>
