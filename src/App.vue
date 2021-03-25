<template>
<div id="app">
  <a-row type="flex" justify="space-around" align="middle">
  <a-col :span="16">
    <!-- <Table :data="data"/> -->
    <AntTable/>
  </a-col>
</a-row>
  
</div>
</template>
<script>
// import Table from '../components/Table';
import AntTable from '../components/AntTable';

export default({
  new: '#app',
  data(){
    return {
     data: [],
    }
  },
  components: {
    // Table, 
    AntTable
  },
  // async mounted() {
  //   const response = await fetch("./server.json")
  //   const result= await response.json()
  //    console.log(result)
  //   // this.data = result.data
  //   for(let i = 0; i < result.data.length; i ++){
  //     let obj = {}
  //     obj.name = result.data[i].name
  //     obj.adresses = `${result.data[i].addresses[0].streetName} ${result.data[i].addresses[0].streetNumber}`
  //     obj.email = result.data[i].contacts[0].emails[0]
  //     obj.phone = result.data[i].contacts[0].phones[0]
  //     obj.date = result.data[i].createdAt
  //     this.data.push(obj)
  //   }
  //   console.log(this.data)
  // },
})
</script>

<style>

</style>