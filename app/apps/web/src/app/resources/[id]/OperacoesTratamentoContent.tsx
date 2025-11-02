import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import DefinitionBox from '@/components/resources/DefinitionBox'
import {
  Card,
  Grid,
  GridCol,
  Image,
  Indicator,
  List,
  ListItem,
  Text,
  Title,
  Typography
} from '@mantine/core'
import {
  AlertTriangle,
  Book,
  CircleAlert,
  Database,
  DownloadCloud,
  Eye,
  Globe,
  Minimize2,
  Settings,
  Trash2
} from 'lucide-react'
import Link from 'next/link'
import NPCBubble from '../../../components/resources/NPCBubble'
import { jadeBubbles, jadeShocked, jessicaBubbles, oliverBubbles } from './model'

// TODO: Deixar conteúdo mais lúdico no futuro
export default function OperacoesTratamentoContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Operações de Tratamento
        </Title>
        <NPCBubble {...jessicaBubbles.default}>
          Certo! Agora vamos para a parte prática. 👩‍💻 Quando você trabalha com dados no código, está
          realizando operações de tratamento. Vamos entender cada uma delas e como aplicá-las
          corretamente.
        </NPCBubble>
        <Text mt="lg">
          Neste terceiro módulo, você vai compreender o que são as{' '}
          <strong>operações de tratamento de dados pessoais</strong>, isto é, as ações e
          procedimentos realizados desde a coleta até o descarte das informações. Entender essas
          operações é essencial para garantir que o tratamento de dados siga os princípios da LGPD e
          respeite a privacidade do titular.
        </Text>
        <Grid align="center" my="lg">
          <GridCol span={2} pr={0}>
            <Indicator
              inline
              label={<CircleAlert color="#1c7ed6" size={40} />}
              color="transparent"
              position="top-center"
            >
              <Image src={jadeShocked.toDataUri()} />
            </Indicator>
          </GridCol>
          <GridCol span={10} pl={0}>
            <Card withBorder>
              <Title order={2}>O que são operações de tratamento?</Title>
              <p>
                A LGPD define "tratamento" como <em>toda operação realizada com dados pessoais</em>,
                o que inclui atividades de coleta, armazenamento, utilização, compartilhamento,
                modificação e até eliminação. Em resumo,{' '}
                <strong>qualquer ação que envolva dados pessoais é uma forma de tratamento</strong>.
              </p>
              <ConceptBox title="Na prática" icon={Database} color="violet">
                As operações de tratamento englobam um conjunto amplo de ações que ocorrem dentro de
                sistemas, processos e rotinas organizacionais. De acordo com o artigo 5º da LGPD e o
                Guia de Boas Práticas da LGPD, o tratamento pode envolver desde a coleta até a
                eliminação de dados.
              </ConceptBox>
            </Card>
          </GridCol>
        </Grid>

        <NPCBubble {...oliverBubbles.default}>
          Preparado para conhecer todas as operações? Cada uma dessas operações pode representar um
          risco à privacidade se não for conduzida de forma responsável.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Operações de tratamento</Title>

          <List listStyleType="disc">
            <ListItem>
              <strong>Acesso:</strong> ato de ingressar, consultar ou conhecer uma informação,
              incluindo a possibilidade de usar os ativos de informação de uma organização,
              observadas as restrições aplicáveis.
            </ListItem>
            <ListItem>
              <strong>Arquivamento:</strong> ato de manter registrado um dado em qualquer fase do
              ciclo da informação (corrente, intermediária ou permanente) mesmo que já tenha perdido
              a validade.
            </ListItem>
            <ListItem>
              <strong>Avaliação:</strong> análise de dados com o objetivo de gerar informação ou
              embasar uma decisão.
            </ListItem>
            <ListItem>
              <strong>Classificação:</strong> organização de dados segundo critérios definidos, como
              tipo, sensibilidade ou finalidade de uso.
            </ListItem>
            <ListItem>
              <strong>Comunicação:</strong> transmissão de informações relativas às políticas e
              ações sobre os dados pessoais.
            </ListItem>
            <ListItem>
              <strong>Controle:</strong> poder de regular, determinar ou monitorar as ações que
              envolvem o uso dos dados.
            </ListItem>
            <ListItem>
              <strong>Difusão:</strong> divulgação ou propagação de dados para um público amplo,
              como em sites, relatórios ou plataformas abertas.
            </ListItem>
            <ListItem>
              <strong>Distribuição:</strong> disponibilização de dados conforme critérios
              estabelecidos, geralmente dentro de uma organização ou entre parceiros.
            </ListItem>
            <ListItem>
              <strong>Eliminação:</strong> ato de excluir ou destruir permanentemente um dado de um
              repositório.
            </ListItem>
            <ListItem>
              <strong>Extração:</strong> cópia ou retirada de dados de um repositório para outro,
              muitas vezes com fins de análise ou backup.
            </ListItem>
            <ListItem>
              <strong>Modificação:</strong> alteração de dados já existentes, como uma atualização
              de endereço ou correção de cadastro.
            </ListItem>
            <ListItem>
              <strong>Processamento:</strong> organização e manipulação de dados com o objetivo de
              obter resultados ou gerar novas informações.
            </ListItem>
            <ListItem>
              <strong>Produção:</strong> criação de bens, serviços ou relatórios a partir do
              tratamento de dados.
            </ListItem>
            <ListItem>
              <strong>Recepção:</strong> ato de receber dados ao final de uma transmissão ou
              compartilhamento.
            </ListItem>
            <ListItem>
              <strong>Reprodução:</strong> geração de cópias de dados existentes, por qualquer meio
              ou processo.
            </ListItem>
            <ListItem>
              <strong>Transferência:</strong> movimentação de dados de uma área de armazenamento
              para outra (seja interna ou para terceiros) conforme previsto pela lei.
            </ListItem>
            <ListItem>
              <strong>Transmissão:</strong> envio de dados entre dois pontos por meios eletrônicos,
              telefônicos, radioelétricos ou semelhantes.
            </ListItem>
            <ListItem>
              <strong>Utilização:</strong> ato de empregar ou aproveitar dados para atingir uma
              finalidade legítima.
            </ListItem>
          </List>
        </Card>

        <NPCBubble {...jessicaBubbles.tired}>
          Ufa! Foram muitas operações, mas agora você tem um mapa completo de tudo que pode
          acontecer com dados pessoais em um sistema. Esse conhecimento é fundamental para
          desenvolver com responsabilidade! 💪
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Etapas</Title>
          <p>
            Vamos entender melhor como essas operações se aplicam na prática do desenvolvimento de
            sistemas:
          </p>
          <DefinitionBox title="Coleta" icon={DownloadCloud} color="blue">
            ocorre ao capturar informações do usuário, como em um formulário de cadastro.
          </DefinitionBox>
          <DefinitionBox title="Armazenamento" icon={Database} color="violet">
            envolve manter dados em um banco de dados, servidor ou nuvem de forma segura.
          </DefinitionBox>
          <DefinitionBox title="Acesso" icon={Eye} color="cyan">
            quando alguém autorizado visualiza ou consulta as informações armazenadas.
          </DefinitionBox>
          <DefinitionBox title="Processamento" icon={Settings} color="orange">
            uso dos dados para gerar resultados, por exemplo, filtrar clientes por idade.
          </DefinitionBox>
          <DefinitionBox title="Eliminação" icon={Trash2} color="red">
            exclusão definitiva de informações que não são mais necessárias ou cujo consentimento
            foi revogado.
          </DefinitionBox>
        </Card>

        <NPCBubble {...jessicaBubbles.neutral}>
          Na prática do desenvolvimento, essas operações muitas vezes acontecem de forma automática.
          Por isso, precisamos planejar cada etapa com cuidado, respeitando os direitos do titular e
          as bases legais da LGPD! 🔒
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Mais conceitos essenciais</Title>
          <Title order={3}>Anonimização e minimização</Title>
          <p>
            A <strong>anonimização</strong> continua sendo uma prática importante dentro das
            operações de tratamento. Ela consiste em{' '}
            <strong>tornar os dados impossíveis de vincular a uma pessoa</strong>, mesmo que
            cruzados com outras informações. Quando bem aplicada, a anonimização reduz riscos e pode
            até dispensar certas exigências da lei.
          </p>
          <p>
            Outro princípio fundamental é a <strong>minimização</strong>: coletar e manter apenas os
            dados estritamente necessários para a finalidade do tratamento. Isso evita exposição
            desnecessária e reforça a conformidade com a LGPD.
          </p>

          <ConceptBox title="Minimização na prática" icon={Minimize2} color="blue">
            Se você precisa apenas do e-mail para enviar notificações, não colete CPF, endereço
            completo, telefone e data de nascimento. Quanto menos dados, menor o risco!
          </ConceptBox>

          <Title order={3}>Consentimento e uso compartilhado</Title>
          <p>
            O <strong>consentimento</strong> é uma das principais bases legais do tratamento, embora
            existam outras, que você conhecerá em módulos posteriores. Ele ocorre quando o titular{' '}
            <strong>autoriza de forma livre, informada e inequívoca</strong> o uso de seus dados
            para uma finalidade específica.
          </p>
          <ConceptBox title="Atenção" icon={AlertTriangle} color="yellow">
            O consentimento deve ser específico para cada finalidade. Não vale aquele "li e
            concordo" genérico! O usuário precisa saber exatamente para que seus dados serão usados.
          </ConceptBox>
          <Text mt="lg" mb={0}>
            Já o <strong>uso compartilhado de dados</strong> acontece quando informações pessoais
            são trocadas entre diferentes controladores ou organizações. Esse compartilhamento deve
            sempre respeitar a finalidade original e garantir que o titular tenha ciência sobre com
            quem e por que seus dados estão sendo compartilhados.
          </Text>

          <Title order={3}>Bloqueio e eliminação</Title>
          <Text mb={0}>
            Em certas situações, o tratamento de dados deve ser interrompido ou encerrado. O{' '}
            <strong>bloqueio</strong> ocorre quando o uso dos dados é suspenso temporariamente, por
            exemplo, durante uma investigação ou revisão. Já a <strong>eliminação</strong> é a
            exclusão definitiva dos dados, quando eles não são mais necessários ou quando o titular
            solicita sua remoção.
          </Text>

          <Title order={3}>Transferência internacional de dados</Title>
          <p>
            A <strong>transferência internacional de dados</strong> ocorre quando informações
            pessoais são enviadas a outros países, geralmente para armazenamento em servidores
            externos ou uso de serviços em nuvem. Esse processo deve garantir que o país de destino
            possua um nível de proteção de dados compatível com o da LGPD.
          </p>

          <ConceptBox title="Cuidado com serviços internacionais" icon={Globe} color="indigo">
            É essencial avaliar fornecedores e plataformas estrangeiras antes de armazenar ou
            processar dados fora do Brasil, assegurando que sigam padrões equivalentes de
            privacidade e segurança. Serviços como AWS, Google Cloud e Azure possuem regiões
            específicas no Brasil justamente para facilitar a conformidade!
          </ConceptBox>
        </Card>

        <Title order={2}>Recapitulando e próximos passos</Title>
        <p>
          As operações de tratamento representam o <strong>núcleo prático da LGPD</strong>. Elas
          envolvem todas as ações que podem afetar a privacidade de uma pessoa, da coleta ao
          descarte das informações.
        </p>
        <p>
          Entender essas operações ajuda a <strong>mapear os fluxos de dados</strong> dentro de
          sistemas e a<strong>planejar mecanismos de proteção e transparência</strong>. Ao dominar
          essas etapas, o desenvolvedor garante que cada ação sobre os dados ocorra de forma ética,
          segura e conforme a lei.
        </p>

        <p>
          No próximo módulo, você vai conhecer os{' '}
          <strong>princípios de tratamento de dados pessoais</strong>, os fundamentos que orientam
          toda atividade de tratamento segundo a LGPD, e como aplicá-los na prática para garantir
          segurança, transparência e responsabilidade no uso das informações.
        </p>

        <NPCBubble {...jadeBubbles.default}>
          Conteúdo muito denso? Coloque em prática com as atividades! 🎯
        </NPCBubble>

        <Title order={3}>Referências e materiais recomendados</Title>
        <Text c="dimmed" mb="sm">
          Aprofunde o que aprendeu neste módulo consultando materiais confiáveis.
        </Text>

        <List spacing="sm" icon={<Book size={18} />}>
          <ListItem>
            <Link
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm"
              target="_blank"
            >
              Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD)
            </Link>
            <Text size="sm" c="dimmed">
              Texto completo da lei no portal do Planalto, referência oficial para consulta.
            </Text>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd/glossario-de-termos-tecnicos-da-lgpd"
              target="_blank"
            >
              Glossário de Termos Técnicos da LGPD
            </Link>
            <Text size="sm" c="dimmed">
              Definições oficiais de todos os termos técnicos utilizados na lei.
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
              Documento do Governo com orientações de boas práticas para as operações de tratamento
              de dados pessoais.
            </Text>
          </ListItem>
        </List>
      </Typography>
      <ButtonActivity moduleId={3} />
    </>
  )
}
