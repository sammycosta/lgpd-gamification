import { ActivityTypes } from "@/types/entities";
import { ActivityToInsert } from "@/types/seed";

export const conceitosBasicosActivities: ActivityToInsert[] = [
  {
    name: "Dado Pessoal",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Qual das alternativas apresenta corretamente a definição de dado pessoal segundo a LGPD?",
    options: [
      "Informação sobre o desempenho de um sistema ou servidor",
      "Qualquer informação que possa identificar, direta ou indiretamente, uma pessoa natural",
      "Apenas informações cadastrais como nome e CPF",
      "Dados utilizados exclusivamente para fins estatísticos",
    ],
    answer:
      "Qualquer informação que possa identificar, direta ou indiretamente, uma pessoa natural",
    points: 10,
  },
  {
    name: "Dado Sensível",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Qual das situações abaixo descreve o uso de dado sensível?",
    options: [
      "Cadastro de e-mail para newsletter",
      "Registro de preferências de cor em um aplicativo",
      "Armazenamento de resultados de exames médicos de pacientes",
      "Histórico de navegação anônimo de um site",
    ],
    answer: "Armazenamento de resultados de exames médicos de pacientes",
    points: 10,
  },
  {
    name: "Dado Pessoal II",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question: "Quais das informações a seguir são dados pessoais?",
    options: [
      "Endereço de e-mail de uma pessoa",
      "Localização registrada por GPS",
      "Número de série de um dispositivo sem vínculo a um usuário",
      "Histórico de compras vinculado a um CPF",
    ],
    answers: [
      "Endereço de e-mail de uma pessoa",
      "Localização registrada por GPS",
      "Histórico de compras vinculado a um CPF",
    ],
    points: 10,
  },
  {
    name: "Dado Sensível II",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Em um banco de dados de usuários, quais dos itens a seguir são classificados como Dados Pessoais Sensíveis?",
    options: [
      "E-mail corporativo (joana.silva@empresa.com)",
      "Convicção religiosa ou opinião política",
      "Histórico de login no sistema",
      "Dados referentes à saúde ou à vida sexual",
    ],
    answers: [
      "Convicção religiosa ou opinião política",
      "Dados genéticos ou biométricos",
      "Dados referentes à saúde ou à vida sexual",
    ],
    points: 10,
  },
  {
    name: "Técnicas de Conformidade",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Em um projeto de pesquisa, nomes de pacientes foram substituídos por códigos aleatórios, impossibilitando a identificação dos indivíduos. Essa técnica é conhecida como:",
    options: ["Criptografia", "Pseudonimização", "Anonimização", "Eliminação"],
    answer: "Anonimização",
    points: 10,
  },
  {
    name: "Técnicas de Conformidade II",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Quando um dado deixa de ser considerado pessoal pela LGPD?",
    options: [
      "Quando o titular autoriza o uso",
      "Quando ele é anonimizado de forma irreversível",
      "Quando é utilizado apenas em empresas públicas",
      "Quando é armazenado fora do Brasil",
    ],
    answer: "Quando ele é anonimizado de forma irreversível",
    points: 10,
  },
  {
    name: "Agentes de Tratamento",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Titular",
        definition: "Pessoa natural a quem os dados se referem",
      },
      {
        concept: "Controlador",
        definition: "Define como e por que os dados são tratados",
      },
      {
        concept: "Operador",
        definition: "Executa o tratamento sob as ordens do controlador",
      },
      {
        concept: "Encarregado (DPO)",
        definition: "Canal de comunicação entre controlador, titulares e ANPD",
      },
    ],
    points: 10,
  },
  {
    name: "Boas Práticas",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais ações representam boas práticas para quem desenvolve sistemas conforme a LGPD?",
    options: [
      "Minimizar a coleta de dados ao estritamente necessário",
      "Armazenar senhas em texto puro",
      "Evitar o uso de dados sensíveis quando não forem necessários",
      "Informar claramente ao usuário a finalidade da coleta",
    ],
    answers: [
      "Minimizar a coleta de dados ao estritamente necessário",
      "Informar claramente ao usuário a finalidade da coleta",
      "Evitar o uso de dados sensíveis quando não forem necessários",
    ],
    points: 10,
  },
  {
    name: "Agentes de Tratamento II",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Uma startup de software armazena dados de seus usuários (coleta, armazenamento, utilização). O CEO da startup é o responsável por determinar o propósito e os limites do uso desses dados. No contexto da LGPD, quem é o CEO/a startup nessa situação?",
    options: ["Titular", "Operador", "Encarregado (DPO)", "Controlador"],
    answer: "Controlador",
    points: 10,
  },
  {
    name: "Agentes de Tratamento III",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um desenvolvedor de software é contratado por uma empresa (Controladora) para criar o módulo de cadastro e banco de dados dos usuários. Neste cenário, o desenvolvedor, ao realizar as operações técnicas de tratamento (coleta, armazenamento), age como:",
    options: [
      "Encarregado, pois faz a mediação de informações",
      "Operador, pois realiza o tratamento em nome do Controlador",
      "Titular, pois manipula os dados",
      "Controlador, pois ele decide sobre as ferramentas tecnológicas",
    ],
    answer: "Operador, pois realiza o tratamento em nome do Controlador",
    points: 10,
  },
  {
    name: "Tipos de Dados",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Dado pessoal",
        definition: "Nome completo e CPF",
      },
      {
        concept: "Dado pessoal sensível",
        definition: "Informações sobre saúde ou religião",
      },
      {
        concept: "Dado anonimizado",
        definition: "Código aleatório que substitui o nome real",
      },
    ],
    points: 10,
  },
  {
    name: "Tipos de Dados II",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept:
          "Um desenvolvedor substitui nomes por IDs em uma base de teste",
        definition: "Anonimização",
      },
      {
        concept:
          "Um aplicativo solicita autorização explícita para coletar dados de saúde",
        definition: "Dado sensível",
      },
      {
        concept: "Um sistema armazena endereços de e-mail de usuários",
        definition: "Dado pessoal",
      },
    ],
    points: 10,
  },
  {
    name: "Boas Práticas II",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Por que a compreensão dos conceitos básicos (tipos de dados, anonimização e agentes) é considerada um passo fundamental para os profissionais de tecnologia no desenvolvimento de software? (Selecione as duas opções mais importantes).",
    options: [
      "Permite que o desenvolvedor tenha mais liberdade para coletar qualquer tipo de dado",
      "É a base para tomar decisões seguras e garantir a conformidade com a LGPD desde o projeto do sistema",
      "O desenvolvedor assume o papel de Encarregado da Proteção de Dados (DPO) automaticamente",
      "Permite diferenciar o dado pessoal do dado sensível, aplicando a proteção adequada para cada tipo de informação",
    ],
    answers: [
      "É a base para tomar decisões seguras e garantir a conformidade com a LGPD desde o projeto do sistema",
      "Permite diferenciar o dado pessoal do dado sensível, aplicando a proteção adequada para cada tipo de informação",
    ],
    points: 10,
  },
];
