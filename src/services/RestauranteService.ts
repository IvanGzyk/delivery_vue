import API from './API';

import { Restaurante } from '../models/Restaurante';
import { Vue } from 'pinia/node_modules/vue-demi';

const getRestaurantes = async (): Promise<Restaurante[]> => {
    return (await API().get("/restaurantes")).data;
}

export default {
    getRestaurantes
}