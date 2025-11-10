import { ActivityTypes } from "../../../types/entities";
import { ActivityToInsert } from "../../../types/seed";

export const inventarioDadosIActivities: ActivityToInsert[] = [
  {
    name: "Objetivo do Inventário de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Qual é o objetivo principal do Inventário de Dados Pessoais em uma organização?",
    options: [
      "Apenas registrar o nome do Encarregado (DPO)",
      "Determinar a política de preços do serviço",
      "Reunir informações sobre como a organização trata dados pessoais",
      "Mapear apenas o hardware e servidores utilizados para o armazenamento",
    ],
    answer: "Reunir informações sobre como a organização trata dados pessoais",
    points: 10,
  },
  {
    name: "Princípio Relacionado ao Inventário",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "O Inventário de Dados é essencial para demonstrar que o controlador avaliou adequadamente os processos de tratamento e atendeu a qual princípio da LGPD?",
    options: [
      "Princípio da Não discriminação",
      "Princípio da Qualidade dos dados",
      "Princípio da Responsabilização e prestação de contas",
      "Princípio da Adequação",
    ],
    answer: "Princípio da Responsabilização e prestação de contas",
    points: 10,
  },
  {
    name: "Importância do Inventário segundo o Guia",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "De acordo com o Guia de Boas Práticas da LGPD, o inventário é essencial porque:",
    options: [
      "Serve apenas como requisito opcional de compliance",
      "Demonstra que o controlador avaliou os processos de tratamento e adotou medidas de proteção aos titulares",
      "Substitui a necessidade de políticas de privacidade",
      "Autoriza automaticamente o tratamento de dados sensíveis",
    ],
    answer:
      "Demonstra que o controlador avaliou os processos de tratamento e adotou medidas de proteção aos titulares",
    points: 10,
  },
  {
    name: "Primeiro Passo no Mapeamento",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "No contexto do mapeamento, o primeiro passo é:",
    options: [
      "Escolher as medidas de segurança adequadas",
      "Identificar as operações de tratamento realizadas pela aplicação",
      "Registrar o encarregado de dados (DPO)",
      "Solicitar o consentimento dos titulares",
    ],
    answer: "Identificar as operações de tratamento realizadas pela aplicação",
    points: 10,
  },
  {
    name: "Amparo das Operações de Tratamento",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "O que a LGPD exige que esteja amparando cada operação de tratamento (coletar, armazenar, processar) de dados pessoais?",
    options: [
      "Um parecer do DPO",
      "Um limite de tempo de 6 meses",
      "Uma base legal",
      "Apenas o consentimento do titular",
    ],
    answer: "Uma base legal",
    points: 10,
  },
  {
    name: "Aplicação Prática I",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Uma empresa de software precisa coletar o CPF e o endereço do cliente para cumprir a exigência da Receita Federal de emitir notas fiscais. Qual base legal justifica primariamente essa operação?",
    options: [
      "Consentimento",
      "Execução de contrato",
      "Obrigação legal ou regulatória",
      "Legítimo interesse",
    ],
    answer: "Obrigação legal ou regulatória",
    points: 10,
  },
  {
    name: "Múltiplas Bases Legais",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Sobre múltiplas bases legais, é correto afirmar que:",
    options: [
      "Cada operação deve ter apenas uma base legal",
      "Uma mesma operação pode ter mais de uma base legal aplicável",
      "Bases legais diferentes anulam a validade do tratamento",
      "É proibido aplicar duas bases legais no mesmo inventário",
    ],
    answer: "Uma mesma operação pode ter mais de uma base legal aplicável",
    points: 10,
  },
  {
    name: "Aplicação Prática II",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um aplicativo de entrega precisa usar o endereço e o telefone do cliente para executar o serviço de entrega solicitado e cobrado. Qual base legal autoriza esse tratamento?",
    options: [
      "Tutela da saúde",
      "Proteção do crédito",
      "Execução de contrato",
      "Estudos por órgão de pesquisa",
    ],
    answer: "Execução de contrato",
    points: 10,
  },
  {
    name: "Alteração de Finalidade",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Quando há alteração na finalidade do tratamento, o controlador deve:",
    options: [
      "Continuar o tratamento normalmente",
      "Excluir todos os dados",
      "Reavaliar a base legal e informar o titular",
      "Solicitar autorização da ANPD antes de qualquer mudança",
    ],
    answer: "Reavaliar a base legal e informar o titular",
    points: 10,
  },
  {
    name: "Bases Legais de Emergência",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais bases legais estão relacionadas ao tratamento de dados em situações de emergência ou que envolvam informações vitais?",
    options: [
      "Proteção da vida",
      "Execução de contrato",
      "Tutela da saúde",
      "Exercício regular de direitos",
    ],
    answers: ["Proteção da vida", "Tutela da saúde"],
    points: 10,
  },
  {
    name: "Informações no Inventário",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais informações devem constar no inventário de dados pessoais?",
    options: [
      "Finalidade específica do tratamento",
      "Tipos de dados tratados e se há dados sensíveis",
      "Base legal correspondente",
      "Medidas de segurança e tempo de retenção",
      "Endereço de todos os usuários do sistema",
    ],
    answers: [
      "Finalidade específica do tratamento",
      "Tipos de dados tratados e se há dados sensíveis",
      "Base legal correspondente",
      "Medidas de segurança e tempo de retenção",
    ],
    points: 10,
  },
  {
    name: "Critérios para Escolher Base Legal",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question: "Sobre a escolha da base legal, deve-se considerar:",
    options: [
      "A finalidade do tratamento",
      "O contexto da coleta",
      "O vínculo com o titular",
      "A natureza dos dados",
      "As expectativas do titular",
    ],
    answers: [
      "A finalidade do tratamento",
      "O contexto da coleta",
      "O vínculo com o titular",
      "A natureza dos dados",
      "As expectativas do titular",
    ],
    points: 10,
  },
  {
    name: "Aplicação Prática  III",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "A base legal do Legítimo Interesse pode ser utilizada pelo controlador quando o uso é:",
    options: [
      "Necessário para o Governo Federal",
      "Necessário para fins legítimos do controlador, desde que não viole direitos e liberdades fundamentais do titular",
      "Apenas para coleta de dados biométricos",
      "Exclusivamente para análises de crédito",
    ],
    answer:
      "Necessário para fins legítimos do controlador, desde que não viole direitos e liberdades fundamentais do titular",
    points: 10,
  },
  {
    name: "Documentação do Inventário",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Segundo o material de apoio, quais informações essenciais devem ser registradas no inventário de dados sobre cada operação de tratamento?",
    options: [
      "Base legal correspondente (hipótese do Art. 7º ou Art. 11)",
      "O nome e cargo de todos os funcionários da empresa",
      "Tempo de retenção (prazo de armazenamento e critérios para eliminação)",
      "Tipos de dados envolvidos (indicando se há dados sensíveis)",
    ],
    answers: [
      "Base legal correspondente (hipótese do Art. 7º ou Art. 11)",
      "Tempo de retenção (prazo de armazenamento e critérios para eliminação)",
      "Tipos de dados envolvidos (indicando se há dados sensíveis)",
    ],
    points: 10,
  },
  {
    name: "Documento Complementar ao Inventário",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Segundo o Guia de Boas Práticas da LGPD, para tratamentos que possam gerar riscos significativos aos titulares, sugere-se a elaboração de qual documento complementar ao inventário?",
    options: [
      "Checklist de Conformidade da ANPD",
      "Termo de Uso Simplificado",
      "Relatório de Impacto à Proteção de Dados Pessoais (RIPD)",
      "Inventário de Ativos de TI",
    ],
    answer: "Relatório de Impacto à Proteção de Dados Pessoais (RIPD)",
    points: 10,
  },
  {
    name: "Base Legal e Exemplo Prático",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Consentimento",
        definition:
          "Autorização livre, informada e inequívoca para finalidade determinada",
      },
      {
        concept: "Execução de contrato",
        definition:
          "Necessário para cumprir um contrato ou procedimentos preliminares com o titular",
      },
      {
        concept: "Obrigação legal ou regulatória",
        definition:
          "Tratamento exigido por lei ou regulamento (ex.: emissão de nota fiscal)",
      },
      {
        concept: "Legítimo interesse",
        definition:
          "Uso necessário para fins legítimos do controlador, sem violar direitos fundamentais do titular",
      },
    ],
    points: 10,
  },
  {
    name: "Itens do Inventário",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Identificação da operação",
        definition: "Nome e descrição do processo de tratamento",
      },
      {
        concept: "Finalidade específica",
        definition: "Motivo pelo qual os dados são usados",
      },
      {
        concept: "Base legal correspondente",
        definition: "Hipótese do Art. 7º que autoriza o uso",
      },
      {
        concept: "Tempo de retenção",
        definition: "Período em que os dados permanecem armazenados",
      },
    ],
    points: 10,
  },
  {
    name: "Conceitos Importantes no Mapeamento",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Inventário de dados",
        definition: "Organiza e documenta todas as operações de tratamento",
      },
      {
        concept: "RIPD (Relatório de Impacto à Proteção de Dados)",
        definition:
          "Avalia riscos e impactos de tratamentos com maior potencial de dano",
      },
      {
        concept: "Princípio da responsabilização",
        definition:
          "Exige comprovar que a organização adota medidas efetivas de proteção",
      },
      {
        concept: "Ferramentas de apoio",
        definition:
          "Planilhas e sistemas que registram o ciclo de vida dos dados",
      },
    ],
    points: 10,
  },
];
