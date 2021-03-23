<template>
    <table>
    <tr v-for="(pers, i) in data" :key="i">
        <td>{{pers.name}}<br>{{pers.adresses}}</td>
        <td>{{pers.email}}</td>
        <td>{{pers.phone}}</td>
        <td>{{pers.date}}</td>
    </tr>
</table>
</template>

<script>
export default {
    props: ['data'], 
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