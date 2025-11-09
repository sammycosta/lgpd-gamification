import { ActivityTypes } from "@/types/entities";
import { ActivityToInsert } from "@/types/seed";

export const inventarioDadosIIActivities: ActivityToInsert[] = [
  {
    name: "Ação Inicial segundo o Guia de Inventário",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Durante uma revisão de segurança, uma equipe identifica que diversos sistemas tratam dados pessoais, mas nenhum possui registro consolidado sobre essas operações. Qual deve ser a primeira ação segundo o Guia de Inventário?",
    options: [
      "Criar um inventário documentando as operações de tratamento, responsáveis e medidas de proteção",
      "Solicitar consentimento dos titulares para todos os tratamentos realizados",
      "Realizar imediatamente um Relatório de Impacto à Proteção de Dados (RIPD)",
      "Suspender todos os tratamentos até nova avaliação",
    ],
    answer:
      "Criar um inventário documentando as operações de tratamento, responsáveis e medidas de proteção",
    points: 10,
  },
  {
    name: "Inventário por Sistema",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Segundo o Guia de Elaboração de Inventário, o ideal é que cada sistema:",
    options: [
      "Compartilhe o mesmo inventário corporativo",
      "Possua seu próprio inventário de dados pessoais, refletindo suas operações específicas",
      "Tenha um inventário apenas para dados sensíveis",
      "Registre apenas as operações realizadas por terceiros",
    ],
    answer:
      "Possua seu próprio inventário de dados pessoais, refletindo suas operações específicas",
    points: 10,
  },
  {
    name: "Agentes de Tratamento no Inventário",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: 'No campo "Agentes de Tratamento", o inventário deve registrar:',
    options: [
      "O encarregado (DPO) e sua equipe técnica",
      "Apenas o nome do controlador principal",
      "O controlador, operador e encarregado responsáveis pelo tratamento",
      "Os titulares de dados cadastrados no sistema",
    ],
    answer:
      "O controlador, operador e encarregado responsáveis pelo tratamento",
    points: 10,
  },
  {
    name: "Transferência Internacional de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um sistema de gestão utiliza servidores em nuvem localizados na Europa para armazenar dados de usuários brasileiros. Qual campo do inventário deve conter essa informação?",
    options: [
      "Escopo e natureza",
      "Transferência internacional de dados",
      "Categorias de titulares",
      "Contratos e instrumentos jurídicos",
    ],
    answer: "Transferência internacional de dados",
    points: 10,
  },
  {
    name: "Contratos e Operadores Terceirizados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um sistema de gestão acadêmica utiliza uma empresa terceirizada para o serviço de emissão e envio de boletos, o que envolve o tratamento de dados pessoais dos alunos. Qual campo do processo de inventário é destinado a registrar a identificação e o vínculo jurídico dessa contratação de serviço de TI?",
    options: [
      "Compartilhamento de dados",
      "Contratos e instrumentos jurídicos",
      "Categorias de titulares",
      "Escopo e natureza",
    ],
    answer: "Contratos e instrumentos jurídicos",
    points: 10,
  },
  {
    name: "Escopo e Natureza dos Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Durante o mapeamento, um analista identifica que parte dos dados vem de um formulário eletrônico e outra de integrações via API com outro sistema. Em qual campo isso deve ser descrito?",
    options: [
      "Fluxo do tratamento",
      "Escopo e natureza",
      "Categorias de titulares",
      "Finalidade e previsão legal",
    ],
    answer: "Escopo e natureza",
    points: 10,
  },
  {
    name: "Manutenção e Atualização do Inventário",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Sobre a manutenção do inventário de dados pessoais, marque as práticas corretas:",
    options: [
      "Deve ser revisado periodicamente e atualizado sempre que houver mudanças no sistema ou fornecedores",
      "Deve refletir fielmente o cenário atual do tratamento de dados",
      "Deve registrar as datas de atualização e responsáveis pela revisão",
      "Deve ser arquivado sem alterações após a primeira versão",
      "Pode ser auditado por áreas de conformidade interna",
    ],
    answers: [
      "Deve ser revisado periodicamente e atualizado sempre que houver mudanças no sistema ou fornecedores",
      "Deve refletir fielmente o cenário atual do tratamento de dados",
      "Deve registrar as datas de atualização e responsáveis pela revisão",
      "Pode ser auditado por áreas de conformidade interna",
    ],
    points: 10,
  },
  {
    name: "Operações de Tratamento e Exemplos",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Coleta",
        definition: "Recebimento de dados do usuário via formulário",
      },
      {
        concept: "Processamento",
        definition:
          "Geração de número de protocolo a partir dos dados enviados",
      },
      {
        concept: "Armazenamento",
        definition: "Guarda do protocolo no banco de dados por 12 meses",
      },
      {
        concept: "Eliminação",
        definition: "Exclusão automática dos registros após o prazo",
      },
    ],
    points: 10,
  },
  {
    name: "Campo de Finalidade e Base Legal",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: 'No campo "Finalidade e previsão legal", deve-se registrar:',
    options: [
      "Apenas a descrição técnica da coleta",
      "A hipótese de tratamento (Art. 7º ou 11 da LGPD) e a norma que respalda sua execução",
      "O histórico de alterações de código do sistema",
      "O endereço IP dos controladores",
    ],
    answer:
      "A hipótese de tratamento (Art. 7º ou 11 da LGPD) e a norma que respalda sua execução",
    points: 10,
  },
  {
    name: "Base Legal: Obrigação Legal e Contrato",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Em um projeto, a equipe identifica que dados de funcionários são necessários para cumprir obrigações fiscais e trabalhistas. No inventário, essa operação deve ser justificada pela base legal de:",
    options: [
      "Legítimo interesse",
      "Obrigação legal ou regulatória",
      "Estudos por órgão de pesquisa",
      "Proteção da vida",
    ],
    answer: "Obrigação legal ou regulatória",
    points: 10,
  },
  {
    name: "Fonte de Dados e Origem da Informação",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Na etapa de Escopo e Natureza, ao descrever a origem dos dados, a informação 'API CONSULTA CPF' indica que a fonte de obtenção dos dados é:",
    options: [
      "O próprio titular dos dados pessoais",
      "O operador",
      "Uma fonte que não seja o titular (integração ou API de terceiros)",
      "O encarregado (DPO)",
    ],
    answer: "Uma fonte que não seja o titular (integração ou API de terceiros)",
    points: 10,
  },
  {
    name: "Tempo de Retenção e Eliminação",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Na seção de Categorias de Dados, o campo Tempo de Retenção dos Dados é preenchido com o propósito de:",
    options: [
      "Apenas indicar a localização física do servidor",
      "Garantir que os dados não sejam mantidos por mais tempo que o necessário, cumprindo a legislação (eliminação)",
      "Aumentar o impacto de um possível vazamento",
      "Justificar a base legal de Legítimo Interesse",
    ],
    answer:
      "Garantir que os dados não sejam mantidos por mais tempo que o necessário, cumprindo a legislação (eliminação)",
    points: 10,
  },
  {
    name: "Correção de Não Conformidades",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "No processo de elaboração do inventário, se a empresa identifica uma não conformidade (ex.: dado excessivo sendo coletado, uma violação ao princípio da necessidade), o que é indicado fazer antes da elaboração final do Relatório de Impacto (RIPD)?",
    options: [
      "Ignorar a não conformidade, pois o RIPD a corrigirá",
      "Sanar imediatamente a não conformidade e gerar uma nova versão do inventário refletindo o cenário corrigido",
      "Apenas registrar a não conformidade e seguir em frente",
      "Pedir autorização judicial para manter o dado excessivo",
    ],
    answer:
      "Sanar imediatamente a não conformidade e gerar uma nova versão do inventário refletindo o cenário corrigido",
    points: 10,
  },
  {
    name: "Operações de Tratamento: Cadastro de Usuário",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Durante o preenchimento do inventário, o analista precisa identificar as operações de tratamento envolvidas no processo de 'cadastro de novo usuário'. Quais ações a seguir representam operações de tratamento, conforme a LGPD?",
    options: [
      "Coleta do nome e e-mail do usuário no formulário",
      "Armazenamento dos dados no banco de dados",
      "Processamento para gerar o ID de usuário",
      "Comunicação dos dados à API de autenticação",
      "Avaliação de desempenho do servidor",
    ],
    answers: [
      "Coleta do nome e e-mail do usuário no formulário",
      "Armazenamento dos dados no banco de dados",
      "Processamento para gerar o ID de usuário",
      "Comunicação dos dados à API de autenticação",
    ],
    points: 10,
  },
  {
    name: "Significado das Operações de Tratamento",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Armazenamento",
        definition: "Manter ou conservar dados em repositório",
      },
      {
        concept: "Arquivamento",
        definition: "Manter registrado um dado mesmo após perder validade",
      },
      {
        concept: "Extração",
        definition: "Copiar ou retirar dados de um repositório",
      },
      {
        concept: "Transferência",
        definition: "Mover dados entre áreas ou para terceiros",
      },
      {
        concept: "Eliminação",
        definition: "Excluir ou destruir dado do repositório",
      },
    ],
    points: 10,
  },
  {
    name: "Campos do Inventário e Funções",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Fluxo do tratamento",
        definition:
          "Mostra como os dados são coletados, armazenados, processados e eliminados",
      },
      {
        concept: "Categorias de titulares",
        definition:
          "Identifica grupos de pessoas envolvidas (usuários, clientes, servidores etc.)",
      },
      {
        concept: "Contratos e instrumentos jurídicos",
        definition: "Documenta acordos com operadores e fornecedores",
      },
      {
        concept: "Controles de segurança",
        definition:
          "Descreve medidas de proteção técnica e administrativa aplicadas",
      },
    ],
    points: 10,
  },
];
