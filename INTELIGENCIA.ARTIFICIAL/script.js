const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao acordar, você percebe que esqueceu de carregar o celular durante a noite. O que faz?",
        alternativas: [
            {
                texto: "Procura uma tomada e começa a se arrumar enquanto o celular carrega.",
                afirmacao: "Desenvolveu o hábito de se planejar melhor para evitar contratempos logo cedo."
            },
            {
                texto: "Fica irritado(a), pois depende do celular para tudo.",
                afirmacao: "Percebeu o quanto sua rotina está ligada à tecnologia e começou a buscar um pouco mais de equilíbrio."
            }
        ]    
    },
    {
        enunciado: "Na hora do almoço, você tem a opção de comer fast food ou uma refeição caseira. O que escolhe?",
        alternativas: [
        {
            texto: "Prefere o fast food, pois está com pressa.",
            afirmacao: "Notou que, apesar da praticidade, o excesso de comida industrializada afeta sua energia ao longo do dia."
        },
        {
            texto: "Opta pela refeição caseira, mesmo que leve um pouco mais de tempo.",
            afirmacao: "Passou a valorizar mais o cuidado com a alimentação e o preparo das refeições."
        }
    ]
    },
    {
        enunciado: "Você finalmente tem uma tarde livre. Como prefere aproveitá-la?",
        alternativas: [
            {
                texto: "Assiste a uma série ou filme que estava adiando.",
                afirmacao: "Aprendeu que o lazer também é parte essencial da saúde mental."
            },
            {
                texto: "Vai caminhar ao ar livre ou praticar alguma atividade física.",
                afirmacao: "Descobriu como o movimento pode renovar as energias do corpo e da mente."
            }
        ]
    },
    {
        enunciado: "Você tem um desentendimento com alguém próximo. Qual sua atitude?",
        alternativas: [
            {
                texto: "Tenta conversar para resolver logo.",
                afirmacao: "Descobriu que a comunicação clara evita mal-entendidos e fortalece relações."
            },
            {
                texto: "Prefere esperar esfriar antes de falar sobre o assunto.",
                afirmacao: "Você entendeu que respeitar o tempo de cada um também é uma forma de cuidar dos vínculos."
            }
        ]
    },
    {
        enunciado: "Você vê uma notícia polêmica nas redes sociais. O que faz?",
        alternativas: [
            {
                texto: "Pesquisa a fonte antes de acreditar ou compartilhar.",
                afirmacao: "Se tornou mais crítico(a) com o que consome e compartilha na internet."
            },
            {
                texto: "Compartilha com amigos para comentar sobre o assunto.",
                afirmacao: "Com o tempo, percebeu a importância de verificar informações antes de espalhá-las."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Moral da jornada:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
