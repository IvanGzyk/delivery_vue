import API from './API';

import { Produto } from '../models/Produto';
import { Vue } from 'pinia/node_modules/vue-demi';

const getProdutos = async (): Promise<Produto[]> => {
    return (await API().get("/produtos")).data;
}

export default {
    getProdutos
}