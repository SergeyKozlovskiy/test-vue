<template>
<div id="app">
  <Table :data="data"/>
  <a-button type="primary">Button</a-button>
</div>
</template>



<script>
import Table from '../components/Table';

export default({
  new: '#app',
  data(){
    return {
     data: {},
    }
  },
  components: {
    Table
  },
  async mounted() {
    const response = await fetch("./server.json")
    const result= await response.json()
    this.data = result.data
    console.log(this.data)
  },
})
</script>

<style>

</style>