<template>
    <table>
    <tr>
        <td v-for="(pers, index) in person" :key="index">{{pers}}</td>
        
    </tr>
</table>
</template>


<script>
export default {
    props: ['person']
}

</script>



<style>
table{
    width: 100%;
}
table tr td {
    border: 1px solid black;
    height: 50px;
    text-align: center;
}
</style>