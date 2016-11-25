"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var usuarios = [
            {
                id: 1,
                nome: 'Ciclovias da Cidade',
                descricao: 'O Rio possui uma extensa malha de ciclovias. As principais vias começam na Marina da Glória noc entro da Cidade, passando por toda a Zona Sul até o Leblon.',
                foto: 'app/images/ciclovia-flamengo.jpg'
            },
            {
                id: 2,
                nome: 'Praia de Copacabana',
                descricao: 'Copacabana que é também conhecida como "Princesinha do Mar" por causa de uma famosa canção em sua homenagem, é um dos locais mais conhecidos do Brasil e do mundo.',
                foto: 'app/images/copacabana.jpg'
            },
            {
                id: 3,
                nome: 'Cristo Redentor',
                descricao: 'Entre os mais principais pontos turísticos do Rio de Janeiro, está o Corcovado com a estátua do Cristo Redentor e o Pão de Açucar.De cima de ambos tem - se uma vista magnifíca da cidade.',
                foto: 'app/images/cristo-redentor.jpg'
            },
            {
                id: 4,
                nome: 'Lapa',
                descricao: 'A Lapa é um local super democrático e rico em diversidade, que abriga todas as tribos do cidade. Lá podemos encontrar bons restaurantes e bares, alguns com música ao vivo, e muita concentração de jovens.',
                foto: 'app/images/lapa.jpg'
            },
            {
                id: 5,
                nome: 'Estádio Maracanã',
                descricao: 'Construído para abrigar a Copa do Mundo de 1950, o Maracanã já foi o maior estádio de futebol do mundo, mas perdeu este status em reforma recente. Visitá-lo, especialmente em dias de jogos, pode ser algo inesquecível.',
                foto: 'app/images/maracana.jpg'
            },
            {
                id: 6,
                nome: 'Pão de Açucar',
                descricao: 'Localizado no bairro da Urca, o bondinho é uma das principais atrações turísticas da cidade. Liga a Praia Vermelha ao morro da Urca e ao morro do Pão de Açúcar. O bondinho foi cenário do filme 007 contra o Foguete da Morte, de 1979.',
                foto: 'app/images/pao-de-acucar.jpg'
            }
        ];
        return { usuarios: usuarios };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map