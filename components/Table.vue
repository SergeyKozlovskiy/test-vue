<template>
    <table>
    <tr v-for="(pers, index) in data" :key="index">
        <td>{{pers.name}}</td>
        <td>{{pers.adresses}}</td>
    </tr>
</table>
</template>

<script>
export default {
    props: ['data'] 
}
</script>

<style>
table{
    width: 100%;
    font-family: sans-serif;
}
table tr td {
    border: 1px solid black;
    height: 50px;
    text-align: center;
}
</style>