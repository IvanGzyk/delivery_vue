import { defineStore } from 'pinia'
import { Pedido } from '../models/Pedido'
import { PedidoItem } from '../models/PedidoItem'
import { Produto } from '../models/Produto';

export const usePedidoStore = defineStore("pedido", {
    state: () => {
        return {
            pedido: new Pedido()
        }
    },
    actions: {

        adicionarItem(produto: Produto): void {
        
            const item = this.pedido.itens.find( item => item.produto.uuid === produto.uuid );
    
            if (item) {
                item.quantidade++;
            } else {
                this.pedido.itens.push( new PedidoItem(produto, 1));
            }
    
            if (!this.pedido.total) {
                this.pedido.total = 0;
            }
    
            this.pedido.total += produto.preco;
            
        },

        removerItem(produto: Produto): void {
        
            const item = this.pedido.itens.find( item => item.produto.uuid === produto.uuid );
    
            if (item) {
    
                item.quantidade--;
    
                if (!this.pedido.total) {
                    this.pedido.total = 0;
                }
    
                this.pedido.total -= produto.preco;
    
                if (item.quantidade === 0) {
                    this.pedido.itens.splice(this.pedido.itens.indexOf(item), 1);
                }
    
            }
    
        }

    }
});
