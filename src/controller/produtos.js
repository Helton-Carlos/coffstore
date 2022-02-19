export function produtos() {
    const json = {
        produto:[
            {
                id: 1,
                img:require("../assets/imagens/caf1.png"),
                Nome_Produto: "Cafeteira Elétrica Arno",
                Nome_Marca: "Oster 4401",
                Descricao:"Deixe sua casa com cheirinho de café com a prática Cafeteira Pratic da Mondial. A cafeteira pode preparar café para até 17 xícaras. Possui um sistema corta-pingos que facilita o seu manuseio e placa de aquecimento que mantém o café quente sem alterar seu sabor.",
                Preco:"88,91"
            },
            {
                id: 2,
                img:require("../assets/imagens/caf2.png"),
                Nome_Produto: "Cafeteira Mondial",
                Nome_Marca: "MONDIAL",
                Descricao:"A Mondial é a escolha de milhões de consumidores. Sempre inovando e buscando soluções para o bem-estar das pessoas, oferece uma linha completa de produtos. Em constantes pesquisas junto aos consumidores, seu portfólio ganha destaque na qualidade, no design moderno e na excelente relação custo x benefício. A Mondial orgulha-se de ser 100% brasileira.",
                Preco:"90,99"
            },
            {
                id: 3,
                img:require("../assets/imagens/caf3.png"),
                Nome_Produto: "Nescafé dolce Gusto",
                Nome_Marca: "Nescal",
                Descricao:"A Nescal é a escolha de milhões de consumidores. Sempre inovando e buscando soluções para o bem-estar das pessoas, oferece uma linha completa de produtos. Em constantes pesquisas junto aos consumidores.",
                Preco:"99,99"
            },
            {
                id: 4,
                img:require("../assets/imagens/caf4.png"),
                Nome_Produto: "Cafeteira Eletrica",
                Nome_Marca: "Mondial",
                Descricao:" RESUMIDA Compacta e Prática. Prepara 2 deliciosos cafés de 120ml ao mesmo tempo. O café fica pronto rapidamente, quentinho, direto na xícara e na medida certa.",
                Preco:"97,99"
            }
        ]
    }
return json}