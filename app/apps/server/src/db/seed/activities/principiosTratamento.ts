import { ActivityTypes } from "@/types/entities";
import { ActivityToInsert } from "@/types/seed";

export const principiosTratamentoActivities: ActivityToInsert[] = [
  {
    name: "Objetivo dos Princípios",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Qual é o principal objetivo dos princípios da LGPD?",
    options: [
      "Definir as penalidades aplicáveis a vazamentos de dados",
      "Orientar a coleta e o uso de dados pessoais de forma ética e segura",
      "Garantir a exclusividade de acesso aos sistemas da Administração Pública",
      "Autorizar o compartilhamento de dados com terceiros",
    ],
    answer:
      "Orientar a coleta e o uso de dados pessoais de forma ética e segura",
    points: 10,
  },
  {
    name: "Casos de Princípios de Tratamento",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um formulário de cadastro coleta o e-mail do usuário e informa que o dado será usado apenas para login e notificações de segurança. Posteriormente, a empresa decide usar o mesmo e-mail para enviar publicidade sem pedir autorização. Qual princípio foi violado?",
    options: [
      "Princípio da Qualidade dos dados",
      "Princípio da Não discriminação",
      "Princípio da Finalidade",
      "Princípio da Prevenção",
    ],
    answer: "Princípio da Finalidade",
    points: 10,
  },
  {
    name: "Casos de Princípios de Tratamento II",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Um desenvolvedor remove o campo de CPF de um cadastro de newsletter (informativo por e-mail), justificando que o CPF não é essencial para o envio de e-mails. Essa ação está alinhada principalmente com o:",
    options: [
      "Princípio da Adequação (O uso deve ser compatível com o motivo informado)",
      "Princípio da Livre acesso (O titular deve ter acesso fácil às informações)",
      "Princípio da Necessidade (Coletar apenas os dados estritamente necessários)",
      "Princípio da Transparência (As informações devem ser claras e acessíveis)",
    ],
    answer:
      "Princípio da Necessidade (Coletar apenas os dados estritamente necessários)",
    points: 10,
  },
  {
    name: "Definição dos Princípios",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Livre acesso",
        definition:
          "O titular deve ter acesso fácil e gratuito às informações sobre como seus dados são tratados",
      },
      {
        concept: "Transparência",
        definition:
          "As informações sobre o tratamento devem ser claras e acessíveis, sem linguagem ambígua ou técnica demais",
      },
      {
        concept: "Qualidade dos dados",
        definition:
          "Os dados devem ser exatos, atualizados e relevantes de acordo com a finalidade",
      },
    ],
    points: 10,
  },
  {
    name: "Casos de Princípios de Tratamento III",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Manter o backend do sistema com rotinas de verificação para corrigir endereços desatualizados ou incompletos dos clientes é uma prática de desenvolvimento que visa atender ao:",
    options: [
      "Princípio da Prevenção",
      "Princípio da Finalidade",
      "Princípio da Não discriminação",
      "Princípio da Qualidade dos dados",
    ],
    answer: "Princípio da Qualidade dos dados",
    points: 10,
  },
  {
    name: "Aplicação Prática dos Princípios",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais ações de design e desenvolvimento ajudam a garantir a Transparência e o Livre Acesso para o titular?",
    options: [
      "Manter um portal de privacidade onde o usuário pode consultar quais dados estão sendo tratados e por quem",
      "Coletar apenas o mínimo de dados",
      "Usar linguagem clara e acessível na política de privacidade e termos de uso",
      "Excluir dados sensíveis que não são mais necessários",
    ],
    answers: [
      "Manter um portal de privacidade onde o usuário pode consultar quais dados estão sendo tratados e por quem",
      "Usar linguagem clara e acessível na política de privacidade e termos de uso",
    ],
    points: 10,
  },
  {
    name: "Casos de Princípios de Tratamento IV",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "A realização de treinamentos regulares com a equipe de desenvolvimento sobre a importância da LGPD e as vulnerabilidades de segurança mais comuns é uma ação alinhada ao:",
    options: [
      "Princípio da Qualidade dos dados",
      "Princípio da Não discriminação",
      "Princípio da Prevenção",
      "Princípio da Finalidade",
    ],
    answer: "Princípio da Prevenção",
    points: 10,
  },
  {
    name: "Registros e Conformidade",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Qual princípio seria violado caso um algoritmo de análise de dados de clientes fosse programado para negar um serviço financeiro a usuários com base em sua origem étnica, mesmo que o dado fosse coletado legalmente?",
    options: [
      "Princípio da Adequação",
      "Princípio da Finalidade",
      "Princípio da Não discriminação",
      "Princípio da Livre acesso",
    ],
    answer: "Princípio da Não discriminação",
    points: 10,
  },
  {
    name: "Segurança no Tratamento",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Quais medidas abaixo estão alinhadas ao Princípio da Segurança previsto na LGPD?",
    options: [
      "Criptografar dados sensíveis armazenados no banco de dados",
      "Restringir o acesso às informações pessoais apenas a usuários autorizados",
      "Publicar informações pessoais em painéis internos para agilizar a comunicação",
      "Manter registros de logs de acesso e atividades no sistema",
    ],
    answers: [
      "Criptografar dados sensíveis armazenados no banco de dados",
      "Restringir o acesso às informações pessoais apenas a usuários autorizados",
      "Manter registros de logs de acesso e atividades no sistema",
    ],
    points: 10,
  },
  {
    name: "Aplicação da Adequação",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Uma empresa informa que coletará o e-mail dos usuários para autenticação, mas depois o utiliza para campanhas de marketing. Qual princípio é violado?",
    options: ["Finalidade", "Adequação", "Transparência", "Necessidade"],
    answer: "Adequação",
    points: 10,
  },
  {
    name: "Casos de Princípios de Tratamento V",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Qual princípio exige que os agentes de tratamento (Controlador/Operador) mantenham registros e políticas de privacidade acessíveis para demonstrar que adotam medidas eficazes de conformidade e segurança?",
    options: [
      "Princípio da Transparência",
      "Princípio da Segurança",
      "Princípio da Prevenção",
      "Princípio da Responsabilização e prestação de contas",
    ],
    answer: "Princípio da Responsabilização e prestação de contas",
    points: 10,
  },
  {
    name: "Privacidade desde a concepção",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question:
      "Pensar na privacidade desde a concepção do sistema (Privacy by Design) é fundamental. Quais perguntas abaixo um desenvolvedor deve se fazer ao criar um formulário de cadastro, em alinhamento com os princípios da LGPD?",
    options: [
      "Esses dados são realmente necessários?",
      "O sistema está utilizando a tecnologia mais recente do mercado?",
      "O usuário entende para que servem esses dados?",
      "O sistema é seguro o suficiente?",
    ],
    answers: [
      "Esses dados são realmente necessários?",
      "O usuário entende para que servem esses dados?",
      "O sistema é seguro o suficiente?",
    ],
    points: 10,
  },
  {
    name: "Aplicação dos Princípios",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Não pedir o CPF em um cadastro de newsletter",
        definition: "Necessidade",
      },
      {
        concept:
          "Manter cadastros desatualizados pode gerar comunicações incorretas",
        definition: "Qualidade dos dados",
      },
      {
        concept:
          "Manter registros e políticas de privacidade acessíveis à ANPD",
        definition: "Responsabilização",
      },
      {
        concept:
          "Não negar uma vaga de emprego com base em informações médicas",
        definition: "Não discriminação",
      },
    ],
    points: 10,
  },
  {
    name: "Aplicação Prática dos Princípios II",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question:
      "Em qual dos casos a seguir a empresa está em conformidade com os princípios de Finalidade, Adequação e Necessidade?",
    options: [
      "Uma loja de roupas coleta a biometria dos clientes (dado sensível) para realizar apenas o envio de e-mail marketing",
      "Um aplicativo de táxi solicita o CPF, informa que é para fins de segurança, e usa o dado para verificar o crédito do cliente",
      "Um sistema de recrutamento solicita apenas o histórico profissional e o e-mail do candidato, informando que os dados serão usados apenas para o processo seletivo e não para outros fins",
      "Uma rede social pede o endereço completo do usuário para exibir anúncios mais segmentados, sem explicar a finalidade",
    ],
    answer:
      "Um sistema de recrutamento solicita apenas o histórico profissional e o e-mail do candidato, informando que os dados serão usados apenas para o processo seletivo e não para outros fins",
    points: 10,
  },
  {
    name: "Livre Acesso na Prática",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question: "Quais exemplos refletem o Princípio do Livre Acesso?",
    options: [
      "Permitir que o usuário consulte seus dados e histórico de consentimentos",
      "Oferecer opção de atualização ou exclusão de dados pessoais",
      "Utilizar dados de navegação sem informar o usuário",
      "Exigir pagamento para acessar informações sobre o tratamento",
    ],
    answers: [
      "Permitir que o usuário consulte seus dados e histórico de consentimentos",
      "Oferecer opção de atualização ou exclusão de dados pessoais",
    ],
    points: 10,
  },
  {
    name: "Definição dos Princípios II",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Segurança",
        definition:
          "Adoção de medidas técnicas e administrativas para proteger dados contra acessos indevidos",
      },
      {
        concept: "Prevenção",
        definition:
          "Implementação de práticas para evitar incidentes e reduzir riscos antes que ocorram",
      },
      {
        concept: "Responsabilização",
        definition:
          "Demonstração de que medidas eficazes de conformidade e proteção estão sendo aplicadas",
      },
    ],
    points: 10,
  },
  {
    name: "Aplicação dos Princípios II",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      {
        concept: "Adequação",
        definition:
          "O uso dos dados deve ser compatível com o motivo informado ao titular",
      },
      {
        concept: "Necessidade",
        definition: "Solicitar apenas informações estritamente essenciais",
      },
      {
        concept: "Transparência",
        definition:
          "Fornecer informações claras e acessíveis sobre o tratamento",
      },
      {
        concept: "Livre acesso",
        definition:
          "Garantir ao titular acesso fácil e gratuito aos seus dados e registros",
      },
    ],
    points: 10,
  },
];
