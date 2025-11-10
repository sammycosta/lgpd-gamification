import { ActivityTypes } from "../../../types/entities";
import { ActivityToInsert } from "../../../types/seed";

export const cicloVidaDadoActivities: ActivityToInsert[] = [
  {
    name: "Fase do Ciclo e Boas Práticas",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Implementar criptografia em repouso (encryption at rest) no banco de dados, backups regulares e controle de acesso físico e lógico são boas práticas essenciais para qual fase do ciclo de vida?",
    options: [
      "Fase 1 - Coleta",
      "Fase 2 - Retenção",
      "Fase 4 - Compartilhamento",
      "Fase 5 - Eliminação",
    ],
    answer: "Fase 2 - Retenção",
    points: 10,
  },
  {
    name: "Finalidade do Ciclo de Vida do Dado",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Por que é importante compreender o ciclo de vida do dado dentro de um sistema?",
    options: [
      "Para aplicar medidas de segurança apenas na fase de coleta",
      "Para determinar quando o dado pode ser monetizado",
      "Para aplicar medidas de proteção e controle em todas as fases do tratamento",
      "Para eliminar a necessidade de bases legais",
    ],
    answer:
      "Para aplicar medidas de proteção e controle em todas as fases do tratamento",
    points: 10,
  },
  {
    name: "Conceito de Ciclo de Vida do Dado",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "O ciclo de vida do dado pessoal começa e termina, respectivamente, com:",
    options: [
      "Coleta e armazenamento",
      "Coleta e eliminação",
      "Processamento e compartilhamento",
      "Compartilhamento e arquivamento",
    ],
    answer: "Coleta e eliminação",
    points: 10,
  },
  {
    name: "Exceções à Eliminação de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Segundo a LGPD (Art. 16), em qual situação o Controlador não é obrigado a eliminar os dados pessoais, mesmo após o término do tratamento?",
    options: [
      "Quando o titular revoga o consentimento para marketing",
      "Quando a base legal utilizada era o Legítimo Interesse",
      "Para cumprimento de obrigação legal ou regulatória",
      "Apenas quando o dado for transferido a outro país",
    ],
    answer: "Para cumprimento de obrigação legal ou regulatória",
    points: 10,
  },
  {
    name: "Operações da Fase de Processamento",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais das operações de tratamento listadas abaixo pertencem primariamente à Fase 3: Processamento do ciclo de vida?",
    options: [
      "Classificação (Organização de dados por critérios)",
      "Transmissão (Compartilhamento)",
      "Avaliação (Análise dos dados para gerar informação)",
      "Modificação (Alteração dos dados existentes)",
      "Arquivamento (Retenção)",
    ],
    answers: [
      "Classificação (Organização de dados por critérios)",
      "Avaliação (Análise dos dados para gerar informação)",
      "Modificação (Alteração dos dados existentes)",
    ],
    points: 10,
  },
  {
    name: "Ativos Organizacionais no Tratamento de Dados",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Equipamentos",
        definition: "Servidores e storages (armazenamento físico)",
      },
      {
        concept: "Locais físicos",
        definition: "Data centers ou salas de arquivos",
      },
      {
        concept: "Sistemas",
        definition:
          "Aplicações, softwares ou soluções de TI envolvidas nas fases do ciclo",
      },
      {
        concept: "Bases de dados",
        definition:
          "Coleções de dados logicamente relacionadas e projetadas para um propósito específico",
      },
    ],
    points: 10,
  },
  {
    name: "Operações na Fase de Coleta",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais operações de tratamento estão associadas à fase de Coleta no ciclo de vida do dado?",
    options: ["Coleta", "Produção", "Recepção", "Difusão", "Transmissão"],
    answers: ["Coleta", "Produção", "Recepção"],
    points: 10,
  },
  {
    name: "Eliminação de Dados Pessoais",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Segundo a LGPD, qual é o destino final esperado para os dados pessoais quando cessar a finalidade do tratamento?",
    options: [
      "Armazenamento indefinido",
      "Transferência a terceiros",
      "Eliminação segura e definitiva",
      "Difusão para órgãos públicos",
    ],
    answer: "Eliminação segura e definitiva",
    points: 10,
  },
  {
    name: "Princípios de Privacy by Design",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Proativo, não reativo",
        definition:
          "Prevê incidentes antes que ocorram, em vez de remediar após o dano",
      },
      {
        concept: "Privacidade por padrão",
        definition:
          "Garante que apenas os dados necessários sejam tratados automaticamente",
      },
      {
        concept: "Funcionalidade total",
        definition:
          "Assegura que privacidade e usabilidade coexistam sem prejuízo das funções",
      },
      {
        concept: "Visibilidade e transparência",
        definition:
          "Permite auditoria independente das práticas de privacidade e segurança",
      },
    ],
    points: 10,
  },
  {
    name: "Privacy by Design e Privacy by Default",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Privacy by Design",
        definition:
          "Integrar medidas de segurança e privacidade desde o início do projeto",
      },
      {
        concept: "Privacy by Default",
        definition:
          "Garantir que, por padrão, apenas o mínimo de dados necessários será processado",
      },
    ],
    points: 10,
  },
  {
    name: "Ciclo Contínuo de Conformidade",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "A conformidade com a LGPD é descrita como um processo contínuo de adequação, monitoramento e melhoria. Isso significa que, à medida que os sistemas evoluem e novos riscos surgem, é preciso:",
    options: [
      "Apenas eliminar todos os dados a cada ano",
      "Ignorar os riscos se o software for de código aberto",
      "Revisar e atualizar as práticas de tratamento e segurança constantemente",
      "Manter o inventário em sua primeira versão para sempre",
    ],
    answer:
      "Revisar e atualizar as práticas de tratamento e segurança constantemente",
    points: 10,
  },
];
