// Lista de frases e expressões em inglês com suas traduções
const flashcards = [
  { phrase: "Hello", translation: "Olá" },
  { phrase: "Goodbye", translation: "Adeus" },
  { phrase: "Please", translation: "Por favor" },
  { phrase: "Thank you", translation: "Obrigado(a)" },
  { phrase: "Yes", translation: "Sim" },
  { phrase: "No", translation: "Não" },
  { phrase: "Excuse me", translation: "Com licença" },
  { phrase: "I'm sorry", translation: "Desculpe-me" },
  { phrase: "Good morning", translation: "Bom dia" },
  { phrase: "Good night", translation: "Boa noite" },
  { phrase: "How are you?", translation: "Como você está?" },
  { phrase: "Fine, thank you", translation: "Bem, obrigado(a)" },
  { phrase: "My name is...", translation: "Meu nome é..." },
  { phrase: "What's your name?", translation: "Qual é o seu nome?" },
  { phrase: "Nice to meet you", translation: "Prazer em conhecê-lo(a)" },
  { phrase: "How old are you?", translation: "Quantos anos você tem?" },
  { phrase: "Where are you from?", translation: "De onde você é?" },
  { phrase: "I am from...", translation: "Eu sou de..." },
  { phrase: "I like...", translation: "Eu gosto de..." },
  { phrase: "I don't like...", translation: "Eu não gosto de..." },
  { phrase: "Can I help you?", translation: "Posso ajudar você?" },
  { phrase: "What is this?", translation: "O que é isso?" },
  { phrase: "How much is this?", translation: "Quanto custa isso?" },
  { phrase: "Where is the bathroom?", translation: "Onde fica o banheiro?" },
  { phrase: "I don't understand", translation: "Eu não entendo" },
  { phrase: "Could you repeat, please?", translation: "Você poderia repetir, por favor?" },
  { phrase: "Do you speak English?", translation: "Você fala inglês?" },
  { phrase: "I speak a little", translation: "Eu falo um pouco" },
  { phrase: "What time is it?", translation: "Que horas são?" },
  { phrase: "See you later", translation: "Até mais" },
  { phrase: "See you tomorrow", translation: "Até amanhã" },
  { phrase: "Good luck", translation: "Boa sorte" },
  { phrase: "Be careful", translation: "Tenha cuidado" },
  { phrase: "Take care", translation: "Cuide-se" },
  { phrase: "Let's go", translation: "Vamos" },
  { phrase: "Wait a moment", translation: "Espere um momento" },
  { phrase: "Come here", translation: "Venha aqui" },
  { phrase: "I'm lost", translation: "Estou perdido(a)" },
  { phrase: "I need help", translation: "Eu preciso de ajuda" },
  { phrase: "I'm looking for...", translation: "Estou procurando..." },
  { phrase: "Can I have...", translation: "Posso ter..." },
  { phrase: "I'm hungry", translation: "Estou com fome" },
  { phrase: "I'm thirsty", translation: "Estou com sede" },
  { phrase: "I'm tired", translation: "Estou cansado(a)" },
  { phrase: "I'm happy", translation: "Estou feliz" },
  { phrase: "I'm sad", translation: "Estou triste" },
  { phrase: "It's hot", translation: "Está quente" },
  { phrase: "It's cold", translation: "Está frio" },
  { phrase: "It's raining", translation: "Está chovendo" },
  { phrase: "I'm busy", translation: "Estou ocupado(a)" },
  { phrase: "Congratulations", translation: "Parabéns" },
  { phrase: "You're welcome", translation: "De nada" },
  { phrase: "Come in", translation: "Entre" },
  { phrase: "Open the door", translation: "Abra a porta" },
  { phrase: "Close the door", translation: "Feche a porta" },
  { phrase: "Sit down", translation: "Sente-se" },
  { phrase: "Stand up", translation: "Levante-se" },
  { phrase: "Turn left", translation: "Vire à esquerda" },
  { phrase: "Turn right", translation: "Vire à direita" },
  { phrase: "Go straight", translation: "Siga em frente" },
  { phrase: "I don't know", translation: "Eu não sei" },
  { phrase: "I love you", translation: "Eu te amo" },
  { phrase: "I miss you", translation: "Sinto sua falta" },
  { phrase: "See you soon", translation: "Até logo" },
  { phrase: "Good evening", translation: "Boa noite (ao encontrar)" },
  { phrase: "Enjoy your meal", translation: "Bom apetite" },
  { phrase: "Have a nice day", translation: "Tenha um bom dia" },
  { phrase: "How can I help you?", translation: "Como posso ajudá-lo(a)?" },
  { phrase: "What happened?", translation: "O que aconteceu?" },
  { phrase: "It's okay", translation: "Está tudo bem" },
  { phrase: "Calm down", translation: "Acalme-se" },
  { phrase: "I'm ready", translation: "Estou pronto(a)" },
  { phrase: "I'm leaving", translation: "Estou indo embora" },
  { phrase: "See you next time", translation: "Vejo você na próxima" },
  { phrase: "Can I ask you something?", translation: "Posso te perguntar algo?" },
  { phrase: "Do you need help?", translation: "Você precisa de ajuda?" },
  { phrase: "I'm here for you", translation: "Estou aqui para você" },
  { phrase: "How was your day?", translation: "Como foi o seu dia?" },
  { phrase: "Can you help me?", translation: "Você pode me ajudar?" },
  { phrase: "What do you mean?", translation: "O que você quer dizer?" },
  { phrase: "I think so", translation: "Eu acho que sim" },
  { phrase: "I don't think so", translation: "Eu acho que não" },
  { phrase: "It doesn't matter", translation: "Não importa" },
  { phrase: "Maybe", translation: "Talvez" },
  { phrase: "Of course", translation: "Claro" },
  { phrase: "I agree", translation: "Eu concordo" },
  { phrase: "I disagree", translation: "Eu discordo" },
  { phrase: "It depends", translation: "Depende" },
  { phrase: "As soon as possible", translation: "O mais rápido possível" },
  { phrase: "I'm not sure", translation: "Eu não tenho certeza" },
  { phrase: "That's a good idea", translation: "Essa é uma boa ideia" },
  { phrase: "That's enough", translation: "Isso é suficiente" },
  { phrase: "Let's try", translation: "Vamos tentar" },
  { phrase: "It's up to you", translation: "Você decide" },
  { phrase: "How about...?", translation: "Que tal...?" },
  { phrase: "Long time no see", translation: "Há quanto tempo" },
  { phrase: "That sounds good", translation: "Parece bom" },
  { phrase: "Welcome", translation: "Bem-vindo(a)" }
];

// Inicializando índice do cartão
let currentCard = 0;

// Função para exibir o cartão atual
function showCard() {
  const phraseElement = document.getElementById("phrase");
  const translationElement = document.getElementById("translation");
  phraseElement.innerText = flashcards[currentCard].phrase;
  translationElement.innerText = flashcards[currentCard].translation;
  document.querySelector(".card").classList.remove("flipped");
}

// Função para virar o cartão
function flipCard() {
  document.querySelector(".card").classList.toggle("flipped");
}

// Função para o próximo cartão
function nextCard() {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    showCard();
  }
}

// Função para o cartão anterior
function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    showCard();
  }
}

// Exibe o primeiro cartão ao carregar a página
showCard();
