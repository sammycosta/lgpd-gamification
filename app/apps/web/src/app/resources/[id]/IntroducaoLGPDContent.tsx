import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import DefinitionBox from '@/components/resources/DefinitionBox'
import NPCBubble from '@/components/resources/NPCBubble'
import { jessicaDoubt } from '@/utils/npc/avatar'
import { jadeBubbles, oliverBubbles } from '@/utils/npc/bubbles'
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
  AlertCircle,
  ArrowRightLeft,
  Ban,
  Book,
  Clock,
  Database,
  HandCoins,
  Info,
  Megaphone,
  MessageCircleQuestion,
  Pencil,
  Scale,
  Search,
  Trash2,
  XCircle
} from 'lucide-react'
import Link from 'next/link'

export default function IntroducaoLGPDContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Introdução à LGPD
        </Title>
        <NPCBubble {...jadeBubbles.default}>
          Oi! 👋 Vamos começar uma jornada pelo mundo da proteção de dados. Neste primeiro módulo, o
          objetivo é que você entenda o que é a LGPD, como ela surgiu e porque é importante que
          profissionais de tecnologia entendam os conceitos relacionados à LGPD.
        </NPCBubble>
        <Grid align="center" my="lg">
          <GridCol span={10} pr={0}>
            <Card withBorder>
              <Title order={2}>Afinal, o que é a LGPD?</Title>
              <p>
                A LGPD, ou <strong>Lei Geral de Proteção de Dados</strong>, é a norma brasileira
                criada para proteger sua privacidade e sua liberdade como pessoa. Ela estabelece
                regras claras sobre como qualquer empresa ou pessoa (física ou jurídica) deve
                realizar o <strong>tratamento de dados pessoais</strong>.
              </p>
              <ConceptBox title="Tratamento de dados" icon={Database}>
                Qualquer operação feita com dados pessoais: coleta, armazenamento, utilização,
                compartilhamento, etc.
              </ConceptBox>
              <Text mt="lg">
                Essa lei garante o controle e a segurança das suas informações, estejam elas em meio
                físico ou digital. Portanto, cabe a quem desenvolve e gerencia sistemas, os
                profissionais de tecnologia, garantir que esse tratamento de dados siga as regras da
                lei para proteger os direitos de todos.
              </Text>
            </Card>
          </GridCol>
          <GridCol span={2} pl={0}>
            <Indicator
              inline
              label={<MessageCircleQuestion color="#cb6820" size={40} />}
              color="transparent"
            >
              <Image src={jessicaDoubt.toDataUri()} />
            </Indicator>
          </GridCol>
        </Grid>
        <NPCBubble {...oliverBubbles.default}>
          Para entender a LGPD, precisamos voltar um pouco no tempo. Como chegamos até aqui?
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Origens</Title>
          <p>
            Com o avanço da internet e o uso crescente de tecnologias digitais, ficou cada vez mais
            comum que empresas e pessoas coletem, armazenem e compartilhem grandes quantidades de
            informações pessoais: como nomes, e-mails, endereços e até hábitos de navegação.
          </p>

          <p>
            Esses dados passaram a ser usados para as mais diversas finalidades: personalizar
            anúncios, melhorar serviços ou até realizar análises de comportamento. No entanto,
            também começaram a surgir preocupações com o uso indevido dessas informações: como
            vazamentos, perfis de usuários sendo vendidos sem consentimento ou a falta de
            transparência sobre o que é feito com nossos dados.
          </p>
          <p>
            Para enfrentar esses desafios, diversos países criaram leis específicas de proteção de
            dados, um passo importante para garantir que o tratamento de informações pessoais siga
            princípios de segurança, transparência e respeito à privacidade.
          </p>
          <ConceptBox title="Linha do Tempo" color="indigo" icon={Scale}>
            <List spacing={1} listStyleType="disc" mb={0}>
              <ListItem>
                <strong>2014 - Marco Civil da Internet</strong>: Primeiro marco regulatório da
                internet no Brasil, estabelecendo direitos e deveres para usuários e provedores.
              </ListItem>
              <ListItem>
                <strong>2016 - GDPR publicado</strong>: A União Europeia aprova o Regulamento Geral
                de Proteção de Dados (GDPR), referência mundial em privacidade e proteção de dados.
              </ListItem>
              <ListItem>
                <strong>2018 - LGPD aprovada</strong>: Inspirada no GDPR, a Lei Geral de Proteção de
                Dados foi aprovada no Brasil.
              </ListItem>
              <ListItem>
                <strong>2020 - LGPD em vigor</strong>: A lei passou a valer oficialmente em todo o
                território nacional.
              </ListItem>
              <ListItem>
                <strong>2021 - Aplicação das sanções</strong>: Início da possibilidade de aplicação
                de penalidades pela Autoridade Nacional de Proteção de Dados (ANPD).
              </ListItem>
              <ListItem>
                <strong>2022 - Emenda Constitucional 115</strong>: Inclui o direito à proteção de
                dados pessoais, inclusive nos meios digitais, como direito fundamental no artigo 5º
                da Constituição Federal.
              </ListItem>
            </List>
          </ConceptBox>
        </Card>

        <NPCBubble {...oliverBubbles.worried}>
          ⚠️ Importante: a LGPD não é só teoria. Ela tem força de lei e penalidades reais para quem
          não cumprir!
        </NPCBubble>
        <Card withBorder my="lg">
          <Title order={2}>E se a legislação não for seguida?</Title>

          <p>
            A <strong>Lei Geral de Proteção de Dados (LGPD)</strong> não é apenas um conjunto de
            boas práticas: ela possui força de lei e define sanções para quem descumprir suas
            regras. Quando uma empresa, organização ou órgão público realiza o tratamento de dados
            pessoais de forma irregular, pode ser responsabilizada pela{' '}
            <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>.
          </p>
          <ConceptBox icon={Scale} title="Base Legal" color="yellow">
            As sanções administrativas estão previstas no <strong>artigo 52 da LGPD</strong> e podem
            variar conforme a gravidade da infração e o histórico da instituição.
          </ConceptBox>
          <Text mt="lg">
            O objetivo principal dessas penalidades é incentivar o cumprimento da lei e promover o
            uso responsável dos dados pessoais. Entre as sanções previstas, estão:
          </Text>

          <DefinitionBox title="Advertência" icon={AlertCircle} color="yellow">
            aplicada em casos leves, serve como alerta para corrigir irregularidades.
          </DefinitionBox>
          <DefinitionBox title="Multa simples" icon={HandCoins} color="orange">
            pode chegar a 2% do faturamento da empresa, limitada a R$ 50 milhões por infração.
          </DefinitionBox>
          <DefinitionBox title="Multa diária" icon={Clock} color="blue">
            aplicada enquanto a irregularidade não for resolvida.
          </DefinitionBox>
          <DefinitionBox title="Publicização da infração" icon={Megaphone} color="indigo">
            torna pública a violação cometida, afetando a imagem da organização.
          </DefinitionBox>
          <DefinitionBox title="Bloqueio ou eliminação dos dados pessoais" icon={Ban} color="red">
            impede o uso ou exige a exclusão dos dados obtidos de forma irregular.
          </DefinitionBox>
          <p>
            Essas penalidades são aplicadas apenas após análise da ANPD e garantia do direito de
            defesa da organização. Ainda assim, podem gerar grandes impactos financeiros e de
            reputação. Por isso, é fundamental que profissionais e empresas da área de tecnologia
            adotem práticas seguras e transparentes no tratamento de dados pessoais.
          </p>
        </Card>

        <NPCBubble {...jadeBubbles.happy}>
          Chegou a hora de conhecer a parte mais importante para as pessoas: os direitos dos
          titulares. 💪 São eles que garantem o controle sobre os próprios dados e tornam a proteção
          de dados realmente efetiva.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Direitos dos titulares</Title>
          <p>
            O <strong>Capítulo III da Lei Geral de Proteção de Dados (LGPD)</strong>, que vai do
            artigo 17 ao 22, descreve os direitos das pessoas em relação aos seus dados pessoais.
            Esses direitos garantem que cada indivíduo tenha mais controle sobre as informações que
            fornece a empresas, órgãos públicos ou qualquer outra instituição.
          </p>
          <ConceptBox icon={Scale} title="Titular dos dados" color="pink">
            O titular dos dados pessoais é toda pessoa que tem suas informações coletadas,
            armazenadas ou utilizadas por alguém. A LGPD assegura que esse titular saiba{' '}
            <strong>quais dados</strong> estão sendo tratados, <strong>por que</strong> estão sendo
            usados e <strong>com quem</strong> podem ser compartilhados. Além disso, o titular pode
            solicitar diversas ações sobre esses dados, como correção, exclusão ou portabilidade.
          </ConceptBox>

          <Text mt="lg">Entre os principais direitos previstos na LGPD, estão:</Text>

          <DefinitionBox title="Acesso" icon={Search} color="blue">
            saber se uma organização possui dados pessoais seus e consultar quais são.
          </DefinitionBox>
          <DefinitionBox title="Correção" icon={Pencil} color="cyan">
            pedir a atualização ou a retificação de informações incorretas ou desatualizadas.
          </DefinitionBox>
          <DefinitionBox title="Eliminação" icon={Trash2} color="red">
            solicitar a exclusão de dados tratados de forma irregular ou quando o consentimento for
            retirado.
          </DefinitionBox>
          <DefinitionBox title="Portabilidade" icon={ArrowRightLeft} color="violet">
            transferir seus dados para outro serviço, quando tecnicamente possível.
          </DefinitionBox>
          <DefinitionBox title="Informação" icon={Info} color="orange">
            saber com quem os dados foram compartilhados e para quais finalidades.
          </DefinitionBox>
          <DefinitionBox title="Revogação do consentimento" icon={XCircle} color="pink">
            retirar a autorização concedida para o uso de seus dados pessoais.
          </DefinitionBox>

          <p>
            Esses direitos fortalecem a confiança entre usuários e organizações. Para profissionais
            de tecnologia, compreender e aplicar esses princípios é essencial, tanto para criar
            sistemas alinhados à LGPD quanto para garantir transparência e segurança aos usuários.
          </p>
        </Card>

        <Title order={2}>Recapitulando e próximos passos</Title>
        <Text mt="lg">
          Compreender a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> é essencial para
          qualquer profissional que atua com tecnologia. Entender seus princípios, direitos e
          sanções ajuda a desenvolver sistemas mais seguros, éticos e confiáveis, valores cada vez
          mais valorizados no mercado.
        </Text>
        <p>
          No próximo módulo, você vai conhecer com mais profundidade os
          <strong> conceitos básicos da LGPD</strong>, como o que são <em>dados pessoais</em>,{' '}
          <em>dados sensíveis</em> e quem são os <em>agentes de tratamento</em>. Esses conhecimentos
          são a base para aplicar a lei de forma prática no desenvolvimento de aplicações e no dia a
          dia profissional.
        </p>

        <NPCBubble {...jadeBubbles.default}>
          Você visitou os materiais de apoio do módulo de Introdução à LGPD! Agora está pronto para
          responder as atividades e colocar em prática o que aprendeu.
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
              href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares"
              target="_blank"
            >
              Autoridade Nacional de Proteção de Dados (ANPD) – Direitos dos Titulares
            </Link>
            <Text size="sm" c="dimmed">
              Página da ANPD com explicações e exemplos sobre como exercer seus direitos.
            </Text>
          </ListItem>
        </List>
      </Typography>
      <ButtonActivity moduleId={1} />
    </>
  )
}
