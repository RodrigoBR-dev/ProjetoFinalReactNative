export default class CartProduct {
    
    constructor(obj){
        obj = obj || {};
        this.nome = obj.nome;
        this.imagem = obj.imagem;
        this.valor = obj.valor;
        this.quantidade = obj.quantidade;
    }
}