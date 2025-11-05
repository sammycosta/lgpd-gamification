import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import NPCBubble from '@/components/resources/NPCBubble'
import { jadeBubbles, jessicaBubbles, oliverBubbles } from '@/utils/npc/bubbles'
import { Card, List, ListItem, Text, Title, Typography } from '@mantine/core'
import {
  AlertTriangle,
  Book,
  ClipboardList,
  Database,
  FileSpreadsheet,
  Lightbulb,
  ListChecks,
  ShieldCheck
} from 'lucide-react'
import Link from 'next/link'

export default function InventarioDadosIContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Inventário de Dados I
        </Title>

        <NPCBubble {...jessicaBubbles.default}>
          Chegou a hora de colocar em prática os princípios que aprendemos! 🧩 Neste módulo, vamos
          entender como mapear as <strong>operações de tratamento de dados pessoais</strong> e
          identificar as <strong>bases legais</strong> que justificam cada uma delas.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>O que é um inventário de dados?</Title>
          <p>
            O <strong>inventário de dados pessoais</strong> é um documento ou ferramenta que reúne
            as informações sobre como uma organização trata dados pessoais: onde são coletados, por
            quem, com que finalidade, e qual a base legal que autoriza o uso.
          </p>

          <ConceptBox title="Por que é importante?" icon={Database} color="teal">
            O inventário permite visualizar todo o ciclo de vida dos dados dentro de um sistema,
            ajudando a <strong>identificar riscos</strong>, <strong>garantir conformidade</strong>{' '}
            com a LGPD e atender ao princípio da{' '}
            <strong>responsabilização e prestação de contas</strong>.
          </ConceptBox>

          <Text mt="lg">
            De acordo com o Guia de Boas Práticas da LGPD, o inventário é essencial para demonstrar
            que o controlador realizou uma avaliação adequada dos processos de tratamento e adotou
            medidas de proteção aos direitos dos titulares.
          </Text>
        </Card>

        <NPCBubble {...jessicaBubbles.neutral}>
          Quando criamos ou mantemos um sistema, o inventário é como um "mapa de rotas" que mostra
          onde e por que os dados passam por cada processo. É fundamental para cumprir o princípio
          da responsabilização previsto no Art. 6º, inciso X da LGPD! 💡
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Como iniciar o mapeamento</Title>
          <p>
            O primeiro passo para construir um inventário é identificar as{' '}
            <strong>operações de tratamento</strong> de dados realizadas pela aplicação ou serviço.
            Elas podem incluir ações como coletar, armazenar, processar ou compartilhar informações.
          </p>

          <ConceptBox title="Exemplo prático" icon={ClipboardList} color="indigo">
            Em um sistema de cadastro de usuários, é possível identificar as seguintes operações:
            <List mt="sm" listStyleType="disc">
              <ListItem>
                <strong>Coleta</strong>: quando o usuário preenche o formulário de cadastro.
              </ListItem>
              <ListItem>
                <strong>Armazenamento</strong>: quando os dados são gravados no banco de dados.
              </ListItem>
              <ListItem>
                <strong>Uso</strong>: quando o sistema autentica o usuário ou envia notificações.
              </ListItem>
              <ListItem>
                <strong>Compartilhamento</strong>: quando o dado é repassado a um serviço de
                terceiros, como envio de e-mails.
              </ListItem>
            </List>
          </ConceptBox>
        </Card>

        <Card withBorder my="lg">
          <Title order={2}>Bases legais: o que autorizam o tratamento</Title>
          <p>
            Cada operação de tratamento deve estar <strong>amparada por uma base legal</strong>, ou
            seja, uma justificativa prevista na LGPD que permite o uso dos dados pessoais. Segundo o
            Art. 7º da Lei, existem <strong>dez hipóteses</strong> que autorizam o tratamento de
            dados pessoais.
          </p>

          <NPCBubble {...oliverBubbles.default}>
            As bases legais funcionam como "fundamentos jurídicos" para o tratamento de dados. ⚖️
            Elas dizem quando uma organização pode usar informações pessoais de forma legítima,
            mesmo sem o consentimento do titular em alguns casos específicos.
          </NPCBubble>

          <List spacing="sm" mt="lg" listStyleType="upper-roman">
            <ListItem>
              <strong>Consentimento</strong>: o titular autoriza o uso dos dados de forma livre,
              informada e inequívoca para finalidade determinada.
            </ListItem>
            <ListItem>
              <strong>Obrigação legal ou regulatória</strong>: quando a lei ou regulamento exige o
              tratamento (ex.: emissão de nota fiscal, registros trabalhistas).
            </ListItem>
            <ListItem>
              <strong>Execução de políticas públicas</strong>: pela administração pública, para
              políticas previstas em leis, regulamentos ou contratos (ex.: programas sociais, saúde
              pública).
            </ListItem>
            <ListItem>
              <strong>Estudos por órgão de pesquisa</strong>: para realização de pesquisas,
              garantindo, sempre que possível, a anonimização dos dados.
            </ListItem>
            <ListItem>
              <strong>Execução de contrato</strong>: o tratamento é necessário para cumprir um
              contrato com o titular ou procedimentos preliminares (ex.: cadastro em plataforma).
            </ListItem>
            <ListItem>
              <strong>Exercício regular de direitos</strong>: em processo judicial, administrativo
              ou arbitral.
            </ListItem>
            <ListItem>
              <strong>Proteção da vida</strong>: para proteger a vida ou incolumidade física do
              titular ou de terceiro.
            </ListItem>
            <ListItem>
              <strong>Tutela da saúde</strong>: por profissionais de saúde, serviços de saúde ou
              autoridade sanitária.
            </ListItem>
            <ListItem>
              <strong>Legítimo interesse</strong>: quando o uso é necessário para fins legítimos do
              controlador, desde que não viole direitos e liberdades fundamentais do titular.
            </ListItem>
            <ListItem>
              <strong>Proteção do crédito</strong>: uso de dados para análises de crédito, conforme
              legislação pertinente.
            </ListItem>
          </List>

          <ConceptBox title="Atenção especial!" icon={AlertTriangle} color="orange" mt="lg">
            <p>
              Para <strong>dados pessoais sensíveis</strong> (origem racial/étnica, convicção
              religiosa, opinião política, dados de saúde, vida sexual, genéticos ou biométricos),
              as hipóteses de tratamento são mais restritas e estão previstas no{' '}
              <strong>Art. 11 da LGPD</strong>.
            </p>
            <p>
              O tratamento de dados sensíveis requer cuidados adicionais, como consentimento
              específico e destacado, ou deve estar vinculado a obrigação legal, exercício de
              direitos, proteção da vida ou tutela da saúde.
            </p>
          </ConceptBox>

          <ConceptBox title="Dica de boas práticas" icon={ListChecks} color="green" mt="lg">
            <strong>Sempre documente a base legal escolhida para cada operação.</strong> Isso evita
            dúvidas em auditorias, facilita futuras atualizações no sistema e atende ao princípio da
            responsabilização e prestação de contas. O Guia de Boas Práticas da LGPD recomenda o uso
            de checklists para verificar a conformidade de cada hipótese aplicada.
          </ConceptBox>
        </Card>

        <NPCBubble {...jessicaBubbles.default}>
          Ou seja, o inventário conecta cada ação do sistema com uma base legal que a justifica. É
          como garantir que cada "porta de entrada e saída" de dados esteja devidamente autorizada e
          documentada! 🔐
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Escolhendo a base legal adequada</Title>
          <p>
            Não existe uma "receita pronta" para escolher a base legal. Cada situação deve ser
            avaliada considerando:
          </p>

          <List listStyleType="disc">
            <ListItem>
              <strong>A finalidade do tratamento</strong>: por que os dados são necessários?
            </ListItem>
            <ListItem>
              <strong>O contexto da coleta</strong>: como e onde os dados foram obtidos?
            </ListItem>
            <ListItem>
              <strong>A relação com o titular</strong>: qual é o vínculo entre a organização e a
              pessoa?
            </ListItem>
            <ListItem>
              <strong>A natureza dos dados</strong>: são dados comuns ou sensíveis?
            </ListItem>
            <ListItem>
              <strong>As expectativas do titular</strong>: o uso está alinhado com o que a pessoa
              espera?
            </ListItem>
          </List>

          <ConceptBox title="Exemplo prático" icon={Lightbulb} color="indigo">
            <p>
              <strong>Situação:</strong> Um sistema de RH precisa tratar dados de funcionários para
              processar a folha de pagamento.
            </p>
            <p>
              <strong>Base legal aplicável:</strong> Execução de contrato (Art. 7º, V) - o
              tratamento é necessário para cumprir as obrigações trabalhistas. Também pode haver
              obrigação legal (Art. 7º, II) para cumprir exigências da Receita Federal e Ministério
              do Trabalho.
            </p>
            <p>
              <strong>Documentação:</strong> No inventário, deve constar: "Dados de folha de
              pagamento - Base legal: Execução de contrato e obrigação legal (CLT, Instruções
              Normativas da RFB)".
            </p>
          </ConceptBox>

          <ConceptBox title="Importante!" icon={AlertTriangle} color="red" mt="lg">
            <p>
              <strong>Múltiplas bases legais:</strong> É possível que uma mesma operação tenha mais
              de uma base legal aplicável. Por exemplo, o tratamento de dados de saúde de um
              servidor público pode ter como base tanto a obrigação legal (para perícia médica)
              quanto a proteção da vida (em emergências).
            </p>
            <p>
              <strong>Mudança de base legal:</strong> Se houver alteração na finalidade do
              tratamento, pode ser necessário reavaliar a base legal. Nesse caso, o titular deve ser
              informado sobre as mudanças.
            </p>
          </ConceptBox>
        </Card>

        <Card withBorder my="lg">
          <Title order={2}>Mapeando na prática</Title>
          <p>
            Para iniciar o mapeamento, é recomendável usar uma planilha ou ferramenta de gestão de
            dados contendo as informações essenciais sobre cada operação de tratamento:
          </p>

          <List listStyleType="disc">
            <ListItem>
              <strong>Identificação da operação</strong>: nome e descrição (ex.: "Coleta de e-mail
              para cadastro de usuários")
            </ListItem>
            <ListItem>
              <strong>Finalidade específica</strong>: objetivo claro do tratamento (ex.:
              "Autenticação e comunicação com o usuário")
            </ListItem>
            <ListItem>
              <strong>Tipos de dados envolvidos</strong>: categorias de dados pessoais tratados,
              indicando se há dados sensíveis (ex.: "Nome, e-mail, CPF")
            </ListItem>
            <ListItem>
              <strong>Base legal correspondente</strong>: hipótese do Art. 7º (ou Art. 11 para dados
              sensíveis) que autoriza o tratamento
            </ListItem>
            <ListItem>
              <strong>Agentes de tratamento</strong>: identificação do controlador e, se houver, do
              operador responsável
            </ListItem>
            <ListItem>
              <strong>Tempo de retenção</strong>: prazo de armazenamento e critérios para eliminação
            </ListItem>
            <ListItem>
              <strong>Medidas de segurança</strong>: controles técnicos e administrativos aplicados
            </ListItem>
            <ListItem>
              <strong>Compartilhamento</strong>: se os dados são compartilhados e com quem (interno
              ou externo)
            </ListItem>
          </List>

          <ConceptBox title="Ferramentas úteis" icon={FileSpreadsheet} color="cyan">
            Planilhas de controle, sistemas de governança de dados e formulários digitais podem ser
            usados para registrar as operações de forma organizada. O Guia de Boas Práticas da LGPD
            sugere a elaboração de um{' '}
            <strong>Relatório de Impacto à Proteção de Dados Pessoais (RIPD)</strong> para
            tratamentos que possam gerar riscos significativos aos titulares.
          </ConceptBox>

          <ConceptBox
            title="Princípios a observar no mapeamento"
            icon={ShieldCheck}
            color="gray"
            mt="lg"
          >
            <p>
              Ao mapear as operações, é essencial garantir a conformidade com os princípios da LGPD
              (Art. 6º): Finalidade, Adequação, Necessidade, Transparência, Segurança,
              Responsabilização. Ver{' '}
              <Link href="/resources/4">material de apoio sobre os princípios de tratamento</Link>.
            </p>
          </ConceptBox>
        </Card>

        <NPCBubble {...jadeBubbles.happy}>
          🌟 No próximo módulo, você vai aprofundar o mapeamento e aprender a construir um
          inventário completo, detalhando as operações de tratamento conforme a LGPD. Por agora,
          revise as bases legais e pratique o que aprendeu nas atividades deste módulo!
        </NPCBubble>

        <Title order={3}>Referências e materiais recomendados</Title>
        <List spacing="sm" icon={<Book size={18} />}>
          <ListItem>
            <Link
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm"
              target="_blank"
            >
              Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD)
            </Link>
            <Text size="sm" c="dimmed">
              Texto legal completo com as definições e bases do tratamento de dados pessoais.
            </Text>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/guias/guia_lgpd.pdf"
              target="_blank"
            >
              Guia de Boas Práticas para Implementação da LGPD
            </Link>
            <Text size="sm" c="dimmed">
              Material oficial do Governo Federal com recomendações sobre mapeamento e gestão de
              dados pessoais.
            </Text>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi/guia_privacidade_concepcao.pdf"
              target="_blank"
            >
              Guia sobre Privacidade desde a Concepção e por Padrão — PPSI
            </Link>
            <Text size="sm" c="dimmed">
              Documento que complementa o planejamento do inventário, destacando a importância de
              medidas de privacidade aplicadas desde o design do sistema.
            </Text>
          </ListItem>
        </List>
      </Typography>

      <ButtonActivity moduleId={5} />
    </>
  )
}
