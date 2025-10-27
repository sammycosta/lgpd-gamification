import { ActivityTypes } from "@/types/entities";
import { ActivityToInsert } from "@/types/seed";

export const operacoesTratamentoActivities: ActivityToInsert[] = [
  {
    name: "Tratamento de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "De acordo com a LGPD, o termo “tratamento de dados” se refere a:",
    options: [
      "Apenas ao armazenamento seguro das informações",
      "À coleta e utilização de dados exclusivamente sensíveis",
      "A qualquer operação realizada com dados pessoais, do recebimento à eliminação",
      "Somente às atividades que envolvem compartilhamento entre empresas",
    ],
    answer:
      "A qualquer operação realizada com dados pessoais, do recebimento à eliminação",
    points: 10,
  },
  {
    name: "Importância das Operações de Tratamento",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Qual a importância de um desenvolvedor de software compreender o conceito de Operações de Tratamento?",
    options: [
      "Ajuda a mapear os fluxos de dados dentro dos sistemas",
      "Permite planejar mecanismos de proteção e transparência em cada etapa",
      "É uma exigência exclusiva para a área de Marketing",
      "Permite identificar as ações que podem representar um risco à privacidade se não forem conduzidas com responsabilidade",
    ],
    answers: [
      "Ajuda a mapear os fluxos de dados dentro dos sistemas",
      "Permite planejar mecanismos de proteção e transparência em cada etapa",
      "Permite identificar as ações que podem representar um risco à privacidade se não forem conduzidas com responsabilidade",
    ],
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Quando um banco de dados gera relatórios automáticos de clientes ativos com base em filtros de idade e localização, qual operação está sendo realizada?",
    options: ["Extração", "Processamento", "Controle", "Comunicação"],
    answer: "Processamento",
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento II",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Excluir permanentemente dados que não são mais necessários caracteriza a operação de:",
    options: ["Bloqueio", "Eliminação", "Arquivamento", "Transferência"],
    answer: "Eliminação",
    points: 10,
  },
  {
    name: "Operações de Coleta de Dados",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais das situações abaixo representam operações de coleta de dados?",
    options: [
      "Um formulário de cadastro solicita nome e e-mail do usuário",
      "Um aplicativo pede permissão para acessar a localização do dispositivo",
      "O sistema faz backup diário das informações cadastradas",
      "Um analista exclui registros duplicados de uma planilha",
    ],
    answers: [
      "Um formulário de cadastro solicita nome e e-mail do usuário",
      "Um aplicativo pede permissão para acessar a localização do dispositivo",
    ],
    points: 10,
  },
  {
    name: "Tratamento de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Uma API recebe dados de usuários que se cadastraram por meio de um aplicativo externo (terceiro) que os enviou. A operação realizada pela API ao receber esses dados é a:",
    options: [
      "Coleta (ato de recolher dados com uma finalidade específica)",
      "Transmissão (envio de dados entre dois pontos)",
      "Recepção (ato de receber dados ao final de uma transmissão ou compartilhamento)",
      "Reprodução (geração de cópias)",
    ],
    answer:
      "Recepção (ato de receber dados ao final de uma transmissão ou compartilhamento)",
    points: 10,
  },
  {
    name: "Situação Prática à Operação Correspondente",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Um analista consulta o cadastro de um cliente",
        definition: "Acesso",
      },
      {
        concept: "O sistema salva dados inseridos no banco de dados",
        definition: "Armazenamento",
      },
      {
        concept: "Um servidor envia informações a outro sistema",
        definition: "Transmissão",
      },
      {
        concept: "Um funcionário atualiza o telefone de um cliente",
        definition: "Modificação",
      },
    ],
    points: 10,
  },
  {
    name: "Etapas do Ciclo de Tratamento",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Formulário coleta informações",
        definition: "Coleta",
      },
      {
        concept: "Dados são mantidos no sistema",
        definition: "Armazenamento",
      },
      {
        concept: "Informações são processadas para gerar estatísticas",
        definition: "Processamento",
      },
      {
        concept: "Registros são apagados após o prazo legal",
        definition: "Eliminação",
      },
    ],
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento III",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um sistema de e-commerce mantém o histórico de pedidos e notas fiscais de clientes, mesmo após o término do uso do serviço, para cumprir obrigações fiscais e legais. A operação de tratamento que melhor descreve essa manutenção de dados é:",
    options: [
      "Bloqueio (suspensão temporária)",
      "Arquivamento (manter registrado um dado em qualquer fase do ciclo da informação)",
      "Eliminação (exclusão definitiva)",
      "Processamento (organização e manipulação)",
    ],
    answer:
      "Arquivamento (manter registrado um dado em qualquer fase do ciclo da informação)",
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento III",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um analista de dados cria uma cópia de uma porção do banco de dados de produção para um ambiente isolado (sandbox), a fim de realizar testes sem afetar o sistema principal. A criação dessa cópia é caracterizada como:",
    options: [
      "Processamento (organização e manipulação)",
      "Transmissão (envio entre dois pontos)",
      "Extração (cópia ou retirada de dados de um repositório para outro, muitas vezes com fins de análise ou backup)",
      "Distribuição (disponibilização de dados conforme critérios)",
    ],
    answer:
      "Extração (cópia ou retirada de dados de um repositório para outro, muitas vezes com fins de análise ou backup)",
    points: 10,
  },
  {
    name: "Operações de Difusão ou Comunicação",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Assinale as opções que configuram operações de difusão ou comunicação:",
    options: [
      "Armazenar logs internos de segurança",
      "Publicar resultados de pesquisa com dados estatísticos em um portal público",
      "Enviar uma notificação de política de privacidade aos usuários",
      "Compartilhar publicamente um relatório com informações anonimizadas",
    ],
    answers: [
      "Publicar resultados de pesquisa com dados estatísticos em um portal público",
      "Enviar uma notificação de política de privacidade aos usuários",
      "Compartilhar publicamente um relatório com informações anonimizadas",
    ],
    points: 10,
  },
  {
    name: "Operações de Difusão ou Comunicação",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Um mesmo evento pode envolver mais de uma operação de tratamento. Em quais casos abaixo isso ocorre?",
    options: [
      "Gerar e enviar um relatório com dados atualizados de clientes (processamento + comunicação)",
      "Apagar registros do sistema enquanto mantém cópias intactas em backups (eliminação + armazenamento)",
      "Realizar backup periódico do banco de dados (extração + armazenamento)",
      "Migrar registros entre dois servidores (transferência + recepção)",
    ],
    answers: [
      "Gerar e enviar um relatório com dados atualizados de clientes (processamento + comunicação)",
      "Realizar backup periódico do banco de dados (extração + armazenamento)",
      "Migrar registros entre dois servidores (transferência + recepção)",
    ],
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento IV",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "A ação de empregar ou aproveitar dados pessoais de clientes para atingir a finalidade de enviar e-mails promocionais autorizados pelo titular é a operação de:",
    options: [
      "Produção (criação de bens, serviços ou relatórios)",
      "Utilização (ato de empregar ou aproveitar dados para atingir uma finalidade legítima)",
      "Avaliação (análise para gerar informação ou embasar uma decisão)",
      "Comunicação (transmissão de políticas e ações)",
    ],
    answer:
      "Utilização (ato de empregar ou aproveitar dados para atingir uma finalidade legítima)",
    points: 10,
  },
  {
    name: "Minimização de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "A minimização é um princípio fundamental associado às operações de tratamento. O que ela defende na prática?",
    options: [
      "Coletar o máximo de dados possível para futuras análises",
      "Compartilhar dados apenas entre empresas do mesmo grupo",
      "Coletar e manter apenas os dados estritamente necessários para a finalidade do tratamento, evitando exposição desnecessária",
      "Garantir que todos os dados sejam criptografados, mesmo que não seja necessário",
    ],
    answer:
      "Coletar e manter apenas os dados estritamente necessários para a finalidade do tratamento, evitando exposição desnecessária",
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento V",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Durante uma auditoria, o uso dos dados é suspenso temporariamente até o término da verificação. Isso corresponde a:",
    options: ["Bloqueio", "Armazenamento", "Recepção", "Difusão"],
    answer: "Bloqueio",
    points: 10,
  },
  {
    name: "Operações: Controle, Avaliação, Classificação e Produção",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept:
          "A equipe de segurança monitora quem acessa e altera registros no sistema",
        definition:
          "Controle (ação ou poder de regular, determinar ou monitorar as ações sobre o dado)",
      },
      {
        concept:
          "Um analista de dados examina informações para extrair padrões de comportamento dos usuários",
        definition:
          "Avaliação (analisar o dado com o objetivo de produzir informação)",
      },
      {
        concept:
          'Os dados são organizados por categoria, como "dados sensíveis", "dados cadastrais" e "dados de uso"',
        definition:
          "Classificação (maneira de ordenar os dados conforme algum critério estabelecido)",
      },
      {
        concept:
          "Uma equipe utiliza dados tratados para criar relatórios e novos serviços digitais",
        definition:
          "Produção (criação de bens e serviços a partir do tratamento de dados)",
      },
    ],
    points: 10,
  },
  {
    name: "Operações: Transferência, Transmissão, Recepção e Difusão",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept:
          "Uma empresa envia dados de clientes para um parceiro comercial que atuará como operador do tratamento",
        definition:
          "Transferência (mudança de dados de uma área de armazenamento para outra, ou para terceiro)",
      },
      {
        concept:
          "Um servidor envia informações para outro sistema por meio de uma API",
        definition:
          "Transmissão (movimentação de dados entre dois pontos por meios eletrônicos, telefônicos ou similares)",
      },
      {
        concept:
          "Um sistema recebe dados transmitidos de um aplicativo externo e os armazena localmente",
        definition:
          "Recepção (ato de receber os dados ao final de uma transmissão ou compartilhamento)",
      },
      {
        concept:
          "Um órgão público publica estatísticas agregadas sobre cidadãos em um portal aberto",
        definition:
          "Difusão (ato ou efeito de divulgação ou propagação de dados para um público amplo)",
      },
    ],
    points: 10,
  },
  {
    name: "Tratamento de Dados",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Qual é o principal benefício da anonimização, quando bem aplicada (irreversível com meios razoáveis), no contexto das operações de tratamento de dados? (Selecione a opção mais relevante de acordo com o texto).",
    options: [
      "Substituir a necessidade de criptografia",
      "Aumentar o volume de dados que podem ser coletados",
      "Transformar dados sensíveis em dados pessoais comuns",
      "Reduzir riscos e, em alguns casos, dispensar certas exigências da lei",
    ],
    answer:
      "Reduzir riscos e, em alguns casos, dispensar certas exigências da lei",
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento VI",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Uma empresa brasileira utiliza um serviço de armazenamento em nuvem cuja infraestrutura está localizada em outro país. Segundo a LGPD, essa ação é caracterizada como:",
    options: [
      "Uso compartilhado de dados (disponibilização de dados entre diferentes agentes dentro do território nacional)",
      "Transferência internacional de dados (movimentação de dados pessoais para país estrangeiro)",
      "Transmissão (envio de dados entre dois pontos dentro da mesma organização)",
      "Comunicação (divulgação pública de informações anonimizadas)",
    ],
    answer:
      "Transferência internacional de dados (movimentação de dados pessoais para país estrangeiro)",
    points: 10,
  },
  {
    name: "Casos de Operações de Tratamento VII",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      'A empresa "A" transfere um conjunto de dados pessoais de seus clientes para a empresa "B", uma parceira de negócios, para que "B" realize uma análise de mercado, respeitando a finalidade original informada aos titulares. Essa troca de informações entre os dois controladores (A e B) caracteriza a operação de:',
    options: [
      "Transferência Internacional de Dados",
      "Distribuição",
      "Uso Compartilhado de Dados",
      "Transmissão",
    ],
    answer: "Uso Compartilhado de Dados",
    points: 10,
  },
];
