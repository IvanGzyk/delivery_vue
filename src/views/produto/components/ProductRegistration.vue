<template>
  <div class="list-group-item">
    <div class="row">
      <div class="col-md-12">
        <h5>Cadastro de Produtos </h5>
      </div>
      <div>
        <form v-on:submit.prevent="submitForm">
            <!-- v-for="produto in produtos" :key="produto.uuid" -->
            <div class="form-group">
                <!-- <label for="restaurante">restaurante</label> -->
                <select class="form-control" id="exampleFormControlSelect1" v-for="restaurante in restaurantes" :key="restaurante.uuid">
                    <option>restaurante.nome</option>
                </select>
            </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="produto.nome" class="form-control" id="nome" />
          </div>
          <div class="form-group">
            <label for="preco">Preço</label>
            <input type="text" v-model="produto.preco" class="form-control" id="preco" />
          </div>
            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import { uuid } from 'vue-uuid'
    import { ref } from 'vue'
    import Api from '../../../services/API'
    import { Produto } from '../../../models/Produto'
    import { Restaurante } from '../../../models/Restaurante';
    let produto = ref<Produto[]>([])
    let restaurantes = ref<Restaurante[]>([]);
    
    import RestaurantesService from '../../../services/RestauranteService';
    

    RestaurantesService.getRestaurantes().then((res) => {
        restaurantes.value = res;
    })
    
    export default {
        data() {
            return {
                produto: {
                    restaurante_uuid: '00b8fd02-eba0-48ed-8806-8d88176f9c42',
                    uuid: uuid.v3,
                    nome: '',
                    preco: ''
                }
            }
        },
        methods: {
            submitForm(){
                Api().post("/produtos", this.produto)
                 .then(response => {
                    console.log(response);
                    // this.response = response.data
                }).catch(error => {
                    // this.response = 'Error: ' + error.response.status
                })
            }
        }
    }
    // defineExpose({
    //     restaurantes
    // })
</script>