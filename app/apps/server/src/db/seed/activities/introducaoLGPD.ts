import { ActivityTypes } from "../../../types/entities";
import { ActivityToInsert } from "../../../types/seed";

export const introducaoLGPDActivities: ActivityToInsert[] = [
  {
    name: "Objetivo da LGPD",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "A LGPD foi criada com o principal objetivo de:",
    options: [
      "Garantir o acesso livre a qualquer tipo de dado disponível na internet",
      "Regular o uso de dados pessoais e proteger os direitos de privacidade e liberdade",
      "Permitir que empresas coletem dados sem consentimento",
      "Substituir completamente o Código de Defesa do Consumidor",
    ],
    answer:
      "Regular o uso de dados pessoais e proteger os direitos de privacidade e liberdade",
    points: 10,
  },
  {
    name: "Responsabilidade da aplicação da LGPD",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "A quem cabe a responsabilidade de garantir que o tratamento de dados pessoais em sistemas e aplicações siga as regras da LGPD?",
    options: [
      "Apenas à Autoridade Nacional de Proteção de Dados (ANPD)",
      "Apenas aos usuários (titulares dos dados) que fornecem suas informações",
      "Aos órgãos do Governo Federal responsáveis pela fiscalização",
      "Aos profissionais de tecnologia (quem desenvolve e gerencia sistemas) e às empresas (controladores/operadores) que realizam o tratamento",
    ],
    answer:
      "Aos profissionais de tecnologia (quem desenvolve e gerencia sistemas) e às empresas (controladores/operadores) que realizam o tratamento",
    points: 10,
  },
  {
    name: "Órgão responsável",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Qual órgão é responsável por fiscalizar e aplicar sanções relacionadas à LGPD?",
    options: [
      "O Ministério Público",
      "O Congresso Nacional",
      "A Autoridade Nacional de Proteção de Dados (ANPD)",
      "O Procon",
    ],
    answer: "A Autoridade Nacional de Proteção de Dados (ANPD)",
    points: 10,
  },
  {
    name: "Sanções",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Além das multas, quais outras consequências o descumprimento da LGPD pode gerar para uma empresa ou organização?",
    options: [
      "Apenas suspensão das atividades por tempo indeterminado",
      "Apenas pagamento de taxas e impostos adicionais",
      "Publicização da infração, que afeta a reputação, e bloqueio ou eliminação dos dados pessoais irregulares",
      "Somente a obrigação de refazer todo o sistema de software",
    ],
    answer:
      "Publicização da infração, que afeta a reputação, e bloqueio ou eliminação dos dados pessoais irregulares",
    points: 10,
  },
  {
    name: "Direitos dos Titulares",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "O Capítulo III da LGPD define os direitos do titular dos dados. Qual destes direitos permite ao usuário transferir seus dados para outro serviço, se for tecnicamente possível?",
    options: [
      "Direito de Acesso",
      "Direito de Correção",
      "Direito de Eliminação",
      "Direito de Portabilidade",
    ],
    answer: "Direito de Portabilidade",
    points: 10,
  },
  {
    name: "Sanções II",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Advertência",
        definition: "Alerta para correção de irregularidades leves",
      },
      {
        concept: "Multa simples",
        definition: "Percentual sobre o faturamento da empresa",
      },
      {
        concept: "Publicização da infração",
        definition: "Tornar pública a violação cometida",
      },
      {
        concept: "Bloqueio de dados",
        definition: "Impedir o uso dos dados até correção da falha",
      },
    ],
    points: 10,
  },
  {
    name: "Conformidade com a LGPD",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais situações representam conformidade com a LGPD no tratamento de dados?",
    options: [
      "Solicitar consentimento informado antes de coletar dados sensíveis",
      "Garantir ao usuário o direito de revogar o consentimento",
      "Manter dados pessoais indefinidamente, mesmo após a exclusão da conta",
      "Informar com quem os dados poderão ser compartilhados",
    ],
    answers: [
      "Solicitar consentimento informado antes de coletar dados sensíveis",
      "Garantir ao usuário o direito de revogar o consentimento",
      "Informar com quem os dados poderão ser compartilhados",
    ],
    points: 10,
  },
  {
    name: "Direitos dos Titulares II",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Acesso",
        definition:
          "Saber se uma organização possui dados pessoais seus e consultar quais são",
      },
      {
        concept: "Correção",
        definition:
          "Pedir a atualização ou retificação de informações incorretas ou desatualizadas",
      },
      {
        concept: "Eliminação",
        definition: "Solicitar a exclusão de dados tratados de forma irregular",
      },
      {
        concept: "Informação",
        definition:
          "Saber com quem os dados foram compartilhados e para quais finalidades",
      },
    ],
    points: 10,
  },
];
