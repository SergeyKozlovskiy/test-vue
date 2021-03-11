<template>
    <table>
    <tr v-for="(pers, index) in person" :key="index">
        <td>{{pers.name}}</td>
        <td>{{pers.age}}</td>
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
    font-family: sans-serif;
}
table tr td {
    border: 1px solid black;
    height: 50px;
    text-align: center;
}
</style>