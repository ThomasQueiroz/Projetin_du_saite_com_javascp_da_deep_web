import { Injectable } from '@angular/core';
import { Imovel} from './imovel';


@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private  imoveisDB: Imovel[] = [
    {
        "id": 1,
        "url_foto": "1.jpg",
        "nome": "Sobrado Amazônico",
        "cidade": "Manaus",
        "estado": "Amazonas",
        "favorito": false,
        "tipo": "casa",
        "lat":-25.4042073,
        "long":-49.2652915,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 6
            },
            {
                "chave": "Banheiro",
                "valor": 3,
            },
            {
                "chave": "Área",
                "valor": "2.000 m²"
            },
            {
                "chave": "Valor",
                "valor": "R$2.500.000,00"
            },
            {
                "chave": "Descrição",
                "valor": "Sobrado espaçoso e bonito em um bairro tranquilo da capital amazonense",
            },        
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$10.000,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$120.000,00"
            },
        ]
    },
    {
        "id": 2,
        "url_foto": "2.jpg",
        "nome": "Apartamento",
        "cidade": "New York",
        "estado": "New York",
        "favorito": false,
        "tipo": "apartamento",
        "lat":40.340573,
        "long":-8.5877803,
        "adicional": [
            {
                "chave": "Banheiro",
                "valor": 1,
            },
            {   
                "chave": "Condomínio inclui",
                "valor": "Pisicna, playground, academia e portaria",
            },
            {
                "chave": "Área",
                "valor": "70 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$400.000,00"
            },
            {
                "chave": "Descrição",
                "valor": "Aprtamento simples e bem localizado dentro da grande cidade de New York",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$1.000,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$12.000,00"
            },
        ]
    },
    {
        "id": 3,
        "url_foto": "3.jpg",
        "nome": "Casarão Florestal",
        "cidade": "Americana",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":63.3546078,
        "long":10.3659183,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 4
            },
            {
                "chave": "Banheiro",
                "valor": 2,
            },
            {
                "chave": "Área",
                "valor": "300 m²"
            },
            {
                "chave": "Valor",
                "valor": "R$500.000,00"
            },
            {
                "chave": "Descrição",
                "valor": "Casarão bem conservado, que fica isolado da área urbana de Americana, proporcionando tranquilidade a seu proprietário",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$1.500,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$30.000,00"
            },
        ]
    },
    {
        "id": 4,
        "url_foto": "4.jpg",
        "nome": "Casa",
        "cidade": "São Pedro",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":44.9274604,
        "long":-93.2843931,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 3,
            },
            {
                "chave": "Piscina",
                "valor": 1,
            },
            {
                "chave": "Área",
                "valor": "250 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$400.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Casa simples e bonita no interior de São Paulo",
            },
            ],
            "aluguel":[
                {
                    "chave": "Aluguel mensal",
                    "valor": "R$1.300,00"
                },
                {
                   "chave": "Aluguel anual",
                    "valor": "R$15.600,00"
                },
            ]
    },
    {
        "id": 5,
        "url_foto": "5.jpg",
        "nome": "Kitnet",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":-17.7819405,
        "long":-63.1478696,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 1,
            },
            {
                "chave": "Banheiro",
                "valor": 1,
            },
            {
                "chave": "Área",
                "valor": "40 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$30.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Kitnet bem localizada perto do centro de Piracicaba",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$500,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$6.000,00"
            },
        ]
    },
    {
        "id": 6,
        "url_foto": "6.jpg",
        "nome": "Apartamento de luxo",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":-9.6467952,
        "long":-35.7365195,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 4,
            },
            {
                "chave": "Suítes",
                "valor": 2,
            },
            {
                "chave": "Área",
                "valor": "300 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$1.000.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Apartamento luxuoso, bonito, bem localizado e tranquilo em Cabreúva",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$10.000,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$120.000,00"
            },
        ]
    },
    {
        "id": 7,
        "url_foto": "7.jpg",
        "nome": "Casa Simples",
        "cidade": "Rio Gallegos",
        "estado": "Santa Cruz",
        "favorito": false,
        "tipo": "casa",
        "lat":-6.4368418,
        "long":-35.6403379,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 2,
            },
            {
                "chave": "Banheiro",
                "valor": 1
            },
            {
                "chave": "Área",
                "valor": "125 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$175.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Casa simples e tranquila na Patagônia Argentina",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$700,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$8.400,00"
            },
        ]
    },
    {
        "id": 8,
        "url_foto": "8.jpg",
        "nome": "Casa de luxo",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat": -23.5678215,
        "long": -46.5475334,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 4,
            },
            {
                "chave": "Suíte",
                "valor": 1,
            },
            {
                "chave": "Área",
                "valor": "400 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$2.000.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Casa luxuosa, tranquila, bela, segura e espaçosa, ficando perto das rodovias de Piracicaba",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$20.000,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$240.000,00"
            },
        ]
    },
    {
        "id": 9,
        "url_foto": "9.jpg",
        "nome": "Apartamento Simples",
        "cidade": "João Pessoa",
        "estado": "Paraíba",
        "favorito": false,
        "tipo": "apartamento",
        "lat": -23.5023718,
        "long": -46.8507548,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 2,
            },
            {
                "chave": "Banheiro",
                "valor": 1,
            },
            {
                "chave": "Área",
                "valor": "52 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$130.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Apartamento simples perto do centro de João Pessoa",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$650,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$7.800,00"
            },
        ]
    },
    {
        "id": 10,
        "url_foto": "10.jpg",
        "nome": "Mansão",
        "cidade": "Campinas",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":-23.4938383,
        "long":-46.8471592,
        "adicional": [
            {
                "chave": "Quartos",
                "valor": 4,
            },
            {
                "chave": "Suítes",
                "valor": 2,
            },
            {
                "chave": "Área",
                "valor": "360 m²",
            },
            {
                "chave": "Valor",
                "valor": "R$2.500.000,00",
            },
            {
                "chave": "Descrição",
                "valor": "Mansão luxuosa, espaçosa, tranquila e segura em uma das principais cidades do estado de São Paulo",
            },
        ],
        "aluguel":[
            {
                "chave": "Aluguel mensal",
                "valor": "R$25.000,00"
            },
            {
               "chave": "Aluguel anual",
                "valor": "R$300.000,00"
            },
        ]
    }
]
 buscarTodosImoveis() :Imovel[] {
  return this.imoveisDB
}

bucarImovelPeloid(id: number) : Imovel | undefined {
  let imovel;

  for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];
      if(imovel.id == id){
          break
      }
  }
  return imovel
}

}
