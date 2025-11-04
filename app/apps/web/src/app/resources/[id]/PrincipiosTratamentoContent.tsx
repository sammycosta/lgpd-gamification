import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import DefinitionBox from '@/components/resources/DefinitionBox'
import NPCBubble from '@/components/resources/NPCBubble'
import { jadeBubbles, jessicaBubbles, oliverBubbles } from '@/utils/npc/bubbles'
import { Card, List, ListItem, Text, Title, Typography } from '@mantine/core'
import {
  AlertTriangle,
  Book,
  CheckCircle,
  ClipboardCheck,
  Eye,
  Filter,
  Info,
  Lock,
  Scale,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  UserX
} from 'lucide-react'
import Link from 'next/link'

export default function PrincipiosTratamentoContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Princípios de Tratamento
        </Title>

        <NPCBubble {...oliverBubbles.default}>
          Chegou a hora de conhecer o coração da LGPD: os princípios que orientam todo o tratamento
          de dados pessoais. ⚖️ Eles funcionam como "regras de ouro" para quem desenvolve sistemas
          ou trabalha com informações de usuários.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>O que são princípios de tratamento?</Title>
          <p>
            Segundo o <strong>artigo 6º da LGPD</strong>, todas as atividades que envolvem o uso de
            dados pessoais (como coleta, armazenamento, compartilhamento ou exclusão) devem seguir{' '}
            <strong>dez princípios fundamentais</strong>. Esses princípios garantem a boa-fé, a
            transparência e o respeito aos direitos do titular.
          </p>

          <ConceptBox title="Importante lembrar" icon={ShieldCheck} color="green">
            Mesmo quando o tratamento for tecnicamente possível, ele <strong>só é permitido</strong>{' '}
            se respeitar esses princípios.
          </ConceptBox>
        </Card>

        <NPCBubble {...oliverBubbles.default}>Vamos conhecer cada um deles? 👇</NPCBubble>

        <Card withBorder my="lg">
          <DefinitionBox title="1. Finalidade" icon={ClipboardCheck} color="indigo">
            O tratamento deve ter uma{' '}
            <strong>finalidade legítima, específica e informada ao titular</strong>
            <Text size="sm" fs="italic">
              Exemplo: coletar e-mail apenas para enviar notificações do sistema, e não para
              marketing sem autorização.
            </Text>
          </DefinitionBox>

          <DefinitionBox title="2. Adequação" icon={CheckCircle} color="blue">
            O uso dos dados deve ser <strong>compatível com o motivo informado</strong> ao titular.
            <Text size="sm" fs="italic">
              Exemplo: se o usuário forneceu o e-mail para login, não pode ser usado depois para
              outras finalidades.
            </Text>
          </DefinitionBox>

          <DefinitionBox title="3. Necessidade" icon={Filter} color="cyan">
            Coletar apenas os <strong>dados estritamente necessários</strong> para o propósito
            declarado.
            <Text size="sm" fs="italic">
              Exemplo: não é necessário pedir CPF em um cadastro de newsletter.
            </Text>
          </DefinitionBox>

          <DefinitionBox title="4. Livre acesso" icon={Eye} color="orange">
            O titular deve ter <strong>acesso fácil e gratuito</strong> às informações sobre como
            seus dados são tratados.
          </DefinitionBox>

          <DefinitionBox title="5. Qualidade dos dados" icon={Info} color="violet">
            Os dados devem ser <strong>exatos, atualizados e relevantes</strong> de acordo com a
            finalidade.
            <Text size="sm" fs="italic">
              Exemplo: manter cadastros desatualizados pode gerar comunicações incorretas.
            </Text>
          </DefinitionBox>

          <DefinitionBox title="6. Transparência" icon={Scale} color="yellow">
            As informações sobre o tratamento devem ser <strong>claras e acessíveis</strong>, sem
            linguagem ambígua ou técnica demais.
          </DefinitionBox>

          <DefinitionBox title="7. Segurança" icon={Lock} color="teal">
            Devem ser adotadas <strong>medidas técnicas e administrativas</strong> para proteger os
            dados contra vazamentos, acessos indevidos e destruição acidental.
          </DefinitionBox>

          <DefinitionBox title="8. Prevenção" icon={AlertTriangle} color="red">
            Devem ser implementadas <strong>ações preventivas</strong> para evitar que ocorram danos
            aos dados pessoais.
          </DefinitionBox>

          <DefinitionBox title="9. Não discriminação" icon={UserX} color="pink">
            É proibido tratar dados para{' '}
            <strong>fins discriminatórios, ilícitos ou abusivos</strong>.
            <Text size="sm" fs="italic">
              Exemplo: negar uma vaga de emprego com base em informações médicas.
            </Text>
          </DefinitionBox>

          <DefinitionBox
            title="10. Responsabilização e prestação de contas"
            icon={UserCheck}
            color="green"
          >
            O agente de tratamento deve <strong>demonstrar que adota medidas eficazes</strong> de
            conformidade e segurança.
            <Text size="sm" fs="italic">
              Exemplo: manter registros e políticas de privacidade acessíveis aos usuários e à ANPD.
            </Text>
          </DefinitionBox>
        </Card>

        <NPCBubble {...jessicaBubbles.default}>
          🌟 Esses princípios são como um guia ético e técnico para quem desenvolve software.
          Aplicá-los desde o início de um projeto é o primeiro passo para estar em conformidade com
          a LGPD.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Aplicação prática</Title>
          <p>
            Na prática do desenvolvimento de sistemas, esses princípios devem estar presentes desde
            o planejamento do projeto. Isso se relaciona com o conceito de{' '}
            <strong>Privacy by Design</strong>: pensar na privacidade desde a concepção do sistema.
          </p>
          <ConceptBox title="Exemplo prático" icon={ShieldAlert} color="orange">
            Durante a criação de um formulário de cadastro, o desenvolvedor deve se perguntar:
            <List mt="sm" listStyleType="disc">
              <ListItem>Por que preciso de cada campo?</ListItem>
              <ListItem>Esses dados são realmente necessários?</ListItem>
              <ListItem>O usuário entende para que servem?</ListItem>
              <ListItem>O sistema é seguro o suficiente?</ListItem>
            </List>
          </ConceptBox>
        </Card>

        <Title order={2}>Recapitulando e próximos passos</Title>
        <Text mt="lg">
          Os princípios da LGPD são a base de toda a aplicação prática da lei. Eles orientam
          desenvolvedores e empresas a proteger dados de forma ética, segura e transparente.
        </Text>
        <p>
          No próximo módulo, <strong>Inventário de Dados I</strong>, você vai aprender a mapear as
          <strong> operações de tratamento</strong> e identificar as <strong>bases legais</strong>{' '}
          aplicáveis a cada situação.
        </p>

        <NPCBubble {...jadeBubbles.default}>
          Excelente trabalho até aqui! Agora que você domina os princípios, está pronto para testar
          seus conhecimentos nas atividades. 🚀
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
              Texto completo da lei no portal do Planalto, referência oficial para consulta.
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
          <ListItem>
            <Link
              href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi/guia_privacidade_concepcao.pdf"
              target="_blank"
            >
              Guia sobre Privacidade desde a Concepção e por Padrão — Programa de Privacidade e
              Segurança da Informação (PPSI)
            </Link>
            <Text size="sm" c="dimmed">
              Documento elaborado pela Secretaria de Governo Digital (MGI), que orienta a adoção de
              medidas de privacidade desde a concepção e por padrão, conforme o art. 46, §2º da
              LGPD. Baseia-se em referenciais internacionais do CIS, ISO e NIST, traduzidos e
              adaptados para o contexto brasileiro.
            </Text>
          </ListItem>
        </List>
      </Typography>

      <ButtonActivity moduleId={3} />
    </>
  )
}
