<template>
<div>
    <h1>MOSTRAR PRODUCTOS</h1>
    
    <b-table :items="productos"></b-table>
</div>
</template>


<script>
import  axios  from 'axios'
export default{
    name:"MostrarProductos",
    data(){
        return{
            productos:[],
        }

    },
    components:{

    },
    mounted(){

    },
    methods:{
        getproductos(){
            this.axios.get("http://127.0.0.1:8000/api/productos").then((response)=>{
                this.productos=response.data;
            })
        }

    }
}
</script>




<style>
</style>