<template>
<div id="app">
  <Table :person="person"/>
</div>
</template>



<script>
import Table from '../components/Table';

export default {
  name: 'app',
  data(){
    return {
      person: [
        {
          name: 'SergeyK',
          age: 30
        },
        {
          name: 'Tatyana',
          age: 34
        }
      ]
    }
  },
  components: {
    Table
  }
}

</script>