interface Propriedades {

chave: String;
valor: number | String;

}
interface DetalhesAluguel {
    chave: String;
    valor: String 
}

export interface Imovel {

id:  number;
url_foto: String;
cidade: String;
nome: String;
estado: String;
adicional: Propriedades [];
tipo: String;
favorito: boolean;
lat:number;
long:number;
valor: number;
aluguel: DetalhesAluguel[];
}



