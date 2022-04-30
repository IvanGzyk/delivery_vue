export class Restaurante {

    public uuid: string;
    public nome: string;
    public taxa_frete: number;

    constructor(uuid: string, nome: string, taxa_frete: number) {
        this.uuid = uuid;
        this.nome = nome;
        this.taxa_frete = taxa_frete;
    }

}