var readline = require('readline-sync')
do {
    console.log(" ___________Isaviao__________ ")
    console.log("|                             |")
    console.log("|   1 - Comprar Passagem      |")
    console.log("|   2-  Consultar Voos        |")
    console.log("|   3 - Mapa de Assentos      |")
    console.log("|   4 - Emitir Ticket         |")
    console.log("|   0 - Encerrar o programa   |")
    console.log("|_____________________________|")
    var escolha = readline.question("Escolha uma opcao : ")
    escolha = parseInt(escolha)
    switch (escolha) {
        case 1:
            console.log("______Comprar Passagem______")
            var nome = readline.question("Nome:")
            var sobrenome = readline.question("Sobrenome:")
            var idade = readline.question("Idade:")
            var assento = readline.question("Assento:")
            var origem = readline.question("Origem do Voo:")
            var destino = readline.question("Destino:")
            var confirmacao = readline.question("Confirmar passagem?")

            if (confirmacao == "sim" || confirmacao == "Sim") {
                console.log("______Passagem Finalizada______")
                console.log("RESUMO DA COMPRA")
                var nomeCompleto = nome + sobrenome
                var voo = origem + " x " + destino
                console.log("Cliente:" + nomeCompleto)
                console.log("Idade:" + idade + " anos")
                console.log("Voo:" + voo)
                console.log("Valor: R$2.000,00")
            }

            else if(confirmacao == "nao"){
                console.log("______Comprar Passagem______")
                var nome = readline.question("Nome:")
                var sobrenome = readline.question("Sobrenome:")
                var idade = readline.question("Idade:")
                var assento = readline.question("Assento:")
                var origem = readline.question("Origem do Voo:")
                var destino = readline.question("Destino:")
                var confirmacao = readline.question("Confirmar passagem?")
            }
            break;
        case 2:
            console.log("______Consulta de Voos______")
            console.log("Origem              X    Destino")
            console.log("Presidente Prudente      Dubai")
            console.log("Presidente Prudente      São Paulo")
            console.log("Presidente Prudente      Rio de Janeiro")
            break;

        case 3:
            console.log("_______________Assentos________________")
            console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            var fileiraA = ""
            var fileiraB = ""
            var u
            var i 
            var aux
            var auxx

            for(i = 1; i <= 12; i++) {
                aux = ("A" + i)
                if (assento == aux){
                    fileiraA = fileiraA + "X ";
                }else{
                    fileiraA = fileiraA + aux+" ";
                }
            }console.log(fileiraA)
            for(u = 1; u <= 12; u++) {
                auxx = ("B" + u)
                if (assento == auxx){
                    fileiraB = fileiraB + "X ";
                }else{
                    fileiraB = fileiraB + auxx+" ";
                }
            }console.log(fileiraB)

            
            break;
        case 4:
            console.log("______Emitir Ticket_______")
            console.log(" ")
            console.log("------------------------------------------------")
            console.log("|         Obrigada por viajar conosco!          ")
            console.log("|")
            console.log("| Cliente:" + nomeCompleto)
            console.log("| Idade:" + idade)
            console.log("| Assento:" + assento)
            console.log("| Origem/Destino:" + origem + " > " + destino)
            console.log("------------------------------------------------")
            break;
        default:
            console.log("______Opção Inválida______");
            break;
        case 0:
            console.log("Voce saiu do programa.Digite: node aerea.js para voltar a pagina inicial.")
            break; 1
    }
} while (escolha != 0);


