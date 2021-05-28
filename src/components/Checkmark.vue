<template>
    <q-card style="width: 100%, height:100%" class="bg-white">
        <img id="test" rel="preload" src="../../public\\checkmarkgif.gif" alt="this slowpoke moves"  width="250" />
      </q-card>
</template>

<script>

export default {
    name: 'checkmark',
    data() {
        return{
          source: null
        }
    },
    methods: {
      init() {
        setTimeout(() => {  
          var img = document.getElementById('test');
          this.$emit('closemyself') 
          img.src = "";
          }, 3300);
      },
    },
    mounted(){
      this.init()
    }
  
}
</script>
<style>

</style>
