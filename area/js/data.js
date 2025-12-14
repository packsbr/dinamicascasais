const dinamicasData = [
  {
    "id": 1,
    "title": "Teste de Percepção",
    "category": "Quebra-Gelo",
    "description": "Os casais se colocam em pé, um de costas para o outro, e tem que responder perguntas sobre o que o outro está vestindo. Ótimo para testar a atenção aos detalhes!",
    "instructions": [
      "Fiquem de pé, um de costas para o outro.",
      "Responda (sem olhar): Qual a cor da meia/sapato do seu par?",
      "Cada um muda algo em si mesmo discretamente.",
      "Virem-se e tentem descobrir o que mudou."
    ],
    "application": "Cada cônjuge deve prestar atenção mesmo que nas mínimas coisas que se passa com o seu par."
  },
  {
    "id": 2,
    "title": "Como sou visto?",
    "category": "Profundo",
    "description": "Uma oportunidade de reflexão sobre o que o seu cônjuge pensa a seu respeito, e o que pode ser melhorado no seu relacionamento.",
    "instructions": [
      "Escreva 5 características do seu cônjuge em um papel.",
      "Troquem os papéis ou leiam em voz alta.",
      "Discutam sobre como essas características impactam a relação."
    ],
    "application": "Melhorar a auto-percepção e a comunicação do casal."
  },
  {
    "id": 3,
    "title": "Cinderela",
    "category": "Diversão",
    "description": "Uma brincadeira divertida para testar se o marido conhece bem os sapatos da esposa.",
    "instructions": [
      "Maridos saem do local.",
      "Esposas misturam seus sapatos no centro da sala.",
      "Ao sinal, o marido deve encontrar o par correto e calçar na esposa."
    ],
    "application": "Diversão e leveza para o casal."
  },
  {
    "id": 4,
    "title": "União e Confiança",
    "category": "Confiança",
    "description": "Um desenho colaborativo onde um não vê e o outro não pode usar as mãos.",
    "instructions": [
      "Um fica vendado (mãos livres) e o outro com mãos amarradas (olhos livres).",
      "O que vê dá as instruções.",
      "O vendado desenha seguindo os comandos."
    ],
    "application": "Exercita a confiança e a clareza na comunicação."
  },
  {
    "id": 5,
    "title": "Quiz do Amor",
    "category": "Conhecimento",
    "description": "Um jogo de perguntas e respostas para ver quem conhece mais a história do casal.",
    "instructions": [
      "Fiquem lado a lado em uma linha de partida.",
      "Respondam perguntas sobre o relacionamento (ex: data do primeiro beijo).",
      "Quem acertar dá um passo à frente.",
      "Vence quem chegar primeiro na linha final."
    ],
    "application": "Relembrar momentos importantes e celebrar a história juntos."
  },
  {
    "id": 6,
    "title": "Ouça Bem",
    "category": "Confiança",
    "description": "A esposa vendada deve encontrar o marido guiando-se apenas pela voz dele em meio ao barulho.",
    "instructions": [
      "Esposa é vendada.",
      "Marido fica do outro lado da sala.",
      "Marido chama e guia a esposa até ele.",
      "Esposa deve focar apenas na voz do seu amor."
    ],
    "application": "Aprender a ouvir a voz do parceiro em meio ao caos."
  },
  {
    "id": 7,
    "title": "Teste do Romantismo",
    "category": "Romance",
    "description": "Improviso romântico usando objetos do cotidiano.",
    "instructions": [
      "Coloque vários objetos numa cesta (colher, controle, caneta).",
      "Pegue um objeto aleatório.",
      "Faça uma declaração de amor usando esse objeto na frase."
    ],
    "application": "Criatividade e demonstrar que tudo é motivo para amar."
  },
  {
    "id": 8,
    "title": "Cartão Invertido",
    "category": "Surpresa",
    "description": "Uma leitura que parece ruim no começo, mas se revela uma linda declaração.",
    "instructions": [
      "Escreva um texto que lido de cima para baixo é negativo, mas de baixo para cima é amoroso.",
      "Peça para o parceiro ler normalmente (susto!).",
      "Depois peça para ler de baixo para cima (surpresa!)."
    ],
    "application": "Quebrar expectativas e surpreender."
  },
  {
    "id": 9,
    "title": "Tarefa Surpresa",
    "category": "Ação",
    "description": "Uma missão secreta para sair da rotina durante a semana.",
    "instructions": [
      "Escreva uma tarefa num envelope (ex: preparar jantar romântico).",
      "Entregue ao parceiro como 'lição de casa'.",
      "Executem durante a semana e compartilhem como foi."
    ],
    "application": "Sair da rotina e servir ao outro."
  },
  {
    "id": 10,
    "title": "Um Colinho para Você",
    "category": "Diversão",
    "description": "Uma variação da dança das cadeiras, mas o assento é o colo do parceiro.",
    "instructions": [
      "Esposas sentam em cadeiras em círculo.",
      "Maridos dançam em volta.",
      "Quando a música parar, marido senta no colo da esposa.",
      "Último a sentar sai."
    ],
    "application": "Quebrar o gelo e contato físico divertido."
  },
  {
    "id": 11,
    "title": "Pera, Uva ou Maçã",
    "category": "Agilidade",
    "description": "Dinâmica de agilidade e beijos.",
    "instructions": [
      "Definam uma fruta secreta para cada casal.",
      "Quando o narrador falar a fruta, o casal deve levantar e se beijar.",
      "Se falar 'Salada de Frutas', todos se beijam."
    ],
    "application": "Atenção e carinho rápido."
  },
  {
    "id": 12,
    "title": "Jogo dos Bilhetes",
    "category": "Interação",
    "description": "Cumpra o que está escrito nas costas do outro sem falar nada.",
    "instructions": [
      "Cole um bilhete nas costas de cada um (ex: 'Me faça um carinho').",
      "Circulem pela sala lendo e executando as ações nos outros.",
      "Tentem adivinhar o que está escrito nas suas costas."
    ],
    "application": "Linguagem não-verbal e sensibilidade."
  },
  {
    "id": 13,
    "title": "O Feitiço Virou",
    "category": "Reflexão",
    "description": "O que você deseja para o outro, acaba fazendo para si mesmo.",
    "instructions": [
      "Escreva num papel o que gostaria que seu par fizesse agora.",
      "Revele o papel.",
      "A regra é: você mesmo deve fazer o que escreveu para o outro."
    ],
    "application": "Empatia e fazer ao outro o que gostaria que fizessem a você."
  },
  {
    "id": 14,
    "title": "Anel no Palito",
    "category": "Agilidade",
    "description": "Passar um anel usando apenas um palito na boca.",
    "instructions": [
      "Palito de dente ou churrasco na boca.",
      "Passem uma aliança de um para o outro sem usar as mãos.",
      "Se cair, começa de novo."
    ],
    "application": "Trabalho em equipe e proximidade física."
  },
  {
    "id": 15,
    "title": "Pênaltis do Amor",
    "category": "Diversão",
    "description": "Acerte o gol ou pague uma prenda romântica.",
    "instructions": [
      "Chute ao gol (pode ser improvisado).",
      "Se errar, paga uma prenda (beijo, elogio, massagem).",
      "Se acertar, ganha um prêmio."
    ],
    "application": "Transformar erros em momentos divertidos."
  },
  {
    "id": 16,
    "title": "Se eu fosse um produto",
    "category": "Autoconhecimento",
    "description": "Como você se descreveria se fosse um produto na prateleira?",
    "instructions": [
      "Escolha um rótulo: 'Frágil', 'Conteúdo Explosivo', 'Agite antes de usar'.",
      "Explique o porquê para seu parceiro."
    ],
    "application": "Entender o estado emocional e temperamento do outro."
  },
  {
    "id": 17,
    "title": "Água na Colher",
    "category": "Cuidado",
    "description": "Dar água ao outro sem derramar, exigindo paciência e cuidado.",
    "instructions": [
      "Um copo d'água e uma colher.",
      "O marido deve dar toda a água para a esposa, colher por colher.",
      "Sem derramar nenhuma gota."
    ],
    "application": "Paciência, cuidado e servir."
  },
  {
    "id": 18,
    "title": "Renovação de Promessas",
    "category": "Profundo",
    "description": "Atualizando os votos de casamento para a realidade do dia a dia.",
    "instructions": [
      "Criem novas promessas engraçadas ou sérias.",
      "Ex: 'Prometo te amar mesmo na TPM' ou 'Prometo não reclamar do futebol'.",
      "Leiam um para o outro."
    ],
    "application": "Recompromisso com bom humor."
  },
  {
    "id": 19,
    "title": "Dinâmica do Complemento",
    "category": "Romance",
    "description": "Encontre a metade da sua frase.",
    "instructions": [
      "Um diz: 'Eu sou o café sem leite...'",
      "O outro completa: 'Eu sou o leite do seu café!'.",
      "Criem suas próprias metáforas de casal."
    ],
    "application": "Sintonia e romance poético."
  },
  {
    "id": 20,
    "title": "Nó de Gravata",
    "category": "Habilidade",
    "description": "A esposa deve dar o nó na gravata do marido (ou vice-versa).",
    "instructions": [
      "Esposa tenta dar o nó na gravata no pescoço do marido.",
      "Marido tenta passar linha na agulha que a esposa segura.",
      "Quem terminar primeiro vence."
    ],
    "application": "Inverter papéis e ajuda mútua."
  },
  {
    "id": 21,
    "title": "Desafio do Batom",
    "category": "Intimidade",
    "description": "O marido deve maquiar a esposa.",
    "instructions": [
      "Marido pega o batom.",
      "Tenta passar na boca da esposa perfeitamente.",
      "Sem borrar!"
    ],
    "application": "Delicadeza e toque."
  },
  {
    "id": 22,
    "title": "Troca de Lugares",
    "category": "Empatia",
    "description": "Em qual situação você gostaria que o outro estivesse no seu lugar?",
    "instructions": [
      "Escreva num papel uma situação difícil que você passa.",
      "Entregue para o outro ler e refletir.",
      "Conversem sobre como podem se ajudar."
    ],
    "application": "Gerar empatia pelas dificuldades do parceiro."
  },
  {
    "id": 23,
    "title": "Jogo das Frases",
    "category": "Criatividade",
    "description": "Montar frases românticas ou engraçadas com palavras sorteadas.",
    "instructions": [
      "Recortem várias palavras de revistas.",
      "Sorteiem 5 palavras cada.",
      "Montem uma frase para o outro usando essas palavras."
    ],
    "application": "Criatividade e humor."
  },
  {
    "id": 24,
    "title": "Baú de Memórias",
    "category": "Nostalgia",
    "description": "Relembrar fatos marcantes da história do casal.",
    "instructions": [
      "Sorteiem temas: 'Primeiro beijo', 'Mico juntos', 'Viagem inesquecível'.",
      "Cada um conta sua versão da história.",
      "Vejam como as memórias se complementam."
    ],
    "application": "Valorizar a história construída juntos."
  },
  {
    "id": 25,
    "title": "Renovação de Votos (Agilidade)",
    "category": "Agilidade",
    "description": "Trocar as alianças usando apenas a boca e um palito.",
    "instructions": [
      "Palito na boca.",
      "Aliança no palito.",
      "Corra até o parceiro e passe a aliança para o palito dele.",
      "Sem usar as mãos!"
    ],
    "application": "Diversão e celebração da união."
  },
  {
    "id": 26,
    "title": "Quando meu amor chegar",
    "category": "Expectativa",
    "description": "Planejar uma recepção especial para o parceiro.",
    "instructions": [
      "Complete a frase: 'Quando meu amor chegar eu vou...'",
      "Planeje uma ação real para a próxima chegada dele(a).",
      "Pode ser um abraço demorado, um suco, um beijo."
    ],
    "application": "Tornar a rotina de chegada em casa mais amorosa."
  },
  {
    "id": 27,
    "title": "Autógrafos",
    "category": "Interação",
    "description": "Descobrir características no parceiro como se fosse um fã.",
    "instructions": [
      "Faça uma lista de requisitos (ex: 'Alguém que beija bem').",
      "Peça um autógrafo do seu parceiro ao lado desse requisito.",
      "Elogie-o enquanto ele assina."
    ],
    "application": "Admiração mútua e validação."
  }
];