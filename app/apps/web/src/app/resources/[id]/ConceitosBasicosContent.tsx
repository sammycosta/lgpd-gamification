import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import DefinitionBox from '@/components/resources/DefinitionBox'
import { jadeBubbles, jessicaBubbles, oliverBubbles } from '@/utils/npc/bubbles'
import { Card, Code, List, ListItem, Text, Title, Typography } from '@mantine/core'
import {
  AlertTriangle,
  Book,
  Crown,
  Fingerprint,
  Globe,
  Handshake,
  HardHat,
  HeartPulse,
  Lightbulb,
  ShieldAlert,
  ShieldCheck,
  User,
  Users
} from 'lucide-react'
import Link from 'next/link'
import NPCBubble from '../../../components/resources/NPCBubble'

export default function ConceitosBasicosContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Conceitos Básicos
        </Title>
        <NPCBubble {...oliverBubbles.default}>
          Agora que você já conhece o contexto da LGPD, vamos entender os conceitos fundamentais que
          sustentam toda a lei. Esses são os pilares que você precisa dominar para trabalhar com
          proteção de dados! 📚
        </NPCBubble>
        <Text mt="lg">
          Neste módulo, o objetivo é compreender os principais conceitos da Lei Geral de Proteção de
          Dados (LGPD). Aqui, você vai aprender o que são <strong>dados pessoais</strong>,{' '}
          <strong>dados sensíveis</strong>, o que significa <strong>anonimizar</strong> informações
          e quem são os <strong>agentes responsáveis pelo tratamento de dados</strong>. Essas
          definições são a base para entender como aplicar a lei de forma correta em qualquer
          sistema ou aplicação tecnológica.
        </Text>

        <Card withBorder my="lg">
          <Title order={2}>O que são dados pessoais?</Title>
          <p>
            De forma simples, <strong>dados pessoais</strong> são todas as informações que podem{' '}
            <strong>identificar uma pessoa</strong>, direta ou indiretamente.
          </p>
          <p>
            Isso inclui desde dados óbvios, como nome, CPF, RG e endereço, até informações que,
            quando combinadas, permitem reconhecer alguém, como{' '}
            <strong>histórico de navegação</strong>, <strong>localização</strong>, ou{' '}
            <strong>preferências de consumo</strong>.
          </p>
          <ConceptBox title="Exemplo" icon={Lightbulb} color="blue">
            O e-mail <Code>joana.silva@empresa.com</Code> é um dado pessoal, pois permite
            identificar uma pessoa específica.
          </ConceptBox>
          <Text mt="lg">
            Esses dados merecem atenção, pois o uso inadequado pode gerar exposição, discriminação
            ou até fraudes.
          </Text>
        </Card>

        <NPCBubble {...oliverBubbles.worried}>
          ⚠️ Mas atenção: existem dados que exigem cuidados ainda mais especiais por serem mais
          sensíveis à pessoa!
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>O que são dados sensíveis?</Title>
          <p>
            Os <strong>dados sensíveis</strong> são um tipo especial de dado pessoal que, se
            divulgado ou tratado de forma inadequada, pode causar{' '}
            <strong>danos à liberdade, à privacidade ou à segurança da pessoa</strong>. A LGPD
            define como sensíveis informações sobre:
          </p>
          <DefinitionBox title="Origem racial ou étnica" icon={Users} color="violet">
            Informações que revelam a origem racial ou étnica de uma pessoa.
          </DefinitionBox>
          <DefinitionBox title="Convicção religiosa ou opinião política" icon={Globe} color="blue">
            Dados sobre crenças religiosas, filiação política ou convicções filosóficas.
          </DefinitionBox>
          <DefinitionBox title="Filiação sindical" icon={Handshake} color="cyan">
            Informações sobre participação em organizações sindicais.
          </DefinitionBox>
          <DefinitionBox title="Dados de saúde ou vida sexual" icon={HeartPulse} color="pink">
            Histórico médico, exames, condições de saúde, orientação sexual ou vida íntima.
          </DefinitionBox>
          <DefinitionBox title="Dados genéticos ou biométricos" icon={Fingerprint} color="red">
            Informações de DNA, impressões digitais, reconhecimento facial ou íris.
          </DefinitionBox>
          <ConceptBox title="Por que são tão importantes?" icon={ShieldAlert} color="orange">
            Por exemplo, armazenar o <strong>histórico médico</strong> de um usuário exige{' '}
            <strong>cuidados e bases legais</strong> específicas, já que esse tipo de informação
            pode revelar aspectos íntimos da pessoa e gerar discriminação se mal utilizado.
          </ConceptBox>
        </Card>

        <NPCBubble {...jessicaBubbles.default}>
          Você sabia que existe uma forma de trabalhar com dados sem identificar pessoas? É a
          anonimização!
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Anonimização: quando o dado deixa de identificar alguém</Title>
          <p>
            A <strong>anonimização</strong> é o processo de{' '}
            <strong>remover ou alterar informações </strong>de modo que não seja mais possível{' '}
            <strong>identificar o titular dos dados</strong>, mesmo que o conjunto seja analisado em
            conjunto com outras bases. Um dado anonimizado deixa de ser considerado "pessoal" pela
            LGPD, desde que <strong>não possa ser revertido</strong> com meios técnicos razoáveis.
          </p>

          <ConceptBox title="Exemplo" icon={Lightbulb} color="blue">
            Substituir nomes por códigos aleatórios em um banco de dados de pesquisa:
            <Code block mt="sm">
              {`Antes: João Silva, 32 anos, São Paulo\nDepois: USR_8X9K2, 32 anos, Região Sudeste`}
            </Code>
          </ConceptBox>
          <ConceptBox mt="lg" title="Atenção" color="yellow" icon={AlertTriangle}>
            Se for possível "reidentificar" a pessoa com alguma técnica (por exemplo, cruzando com
            outras bases de dados), o dado <strong>ainda é considerado pessoal</strong> e segue sob
            as regras da LGPD.
          </ConceptBox>
        </Card>

        <NPCBubble {...oliverBubbles.default}>
          Agora vem uma parte crucial: entender quem faz o quê no tratamento de dados. Essa divisão
          de responsabilidades é essencial! 👔
        </NPCBubble>
        <Card withBorder my="lg">
          <Title order={2}>Quem são os agentes de tratamento?</Title>
          <p>A LGPD define quatro principais agentes, cada um com funções específicas:</p>

          <DefinitionBox title="Titular" icon={User} color="blue">
            É o <strong>dono dos dados</strong>, ou seja, a pessoa natural a quem as informações se
            referem. É quem tem os direitos garantidos pela LGPD (acesso, correção, eliminação,
            etc.).
          </DefinitionBox>

          <DefinitionBox title="Controlador" icon={Crown} color="violet">
            É quem <strong>decide como e por que</strong> os dados serão tratados. Define as
            finalidades, toma as decisões estratégicas e é o principal responsável perante a ANPD.
            <Text size="sm" fs="italic">
              Exemplo: Uma empresa de e-commerce que decide coletar dados de clientes para processar
              vendas.
            </Text>
          </DefinitionBox>

          <DefinitionBox title="Operador" icon={HardHat} color="orange">
            É quem <strong>realiza o tratamento de dados em nome do controlador</strong>. Executa as
            operações técnicas seguindo as instruções do controlador.
            <Text size="sm" fs="italic">
              Exemplo: Uma empresa terceirizada de cloud storage que armazena os dados da empresa de
              e-commerce.
            </Text>
          </DefinitionBox>

          <DefinitionBox
            title="Encarregado (DPO - Data Protection Officer)"
            icon={ShieldCheck}
            color="cyan"
          >
            É o <strong>canal de comunicação</strong> entre a organização, os titulares de dados e a
            ANPD. Orienta sobre práticas de proteção, recebe reclamações e atua como ponto focal de
            conformidade.
            <Text size="sm" fs="italic">
              Exemplo: O profissional responsável por responder solicitações de titulares e garantir
              que a empresa siga a LGPD.
            </Text>
          </DefinitionBox>

          <p>
            Esses papéis formam o ecossistema da proteção de dados. Em sistemas de software,
            entender essa divisão ajuda a identificar{' '}
            <strong>quem é responsável por cada ação</strong> e{' '}
            <strong>como garantir a conformidade com a LGPD</strong>.
          </p>
        </Card>

        <Title order={2}>Recapitulando e próximos passos</Title>
        <p>
          Compreender os conceitos básicos da LGPD é essencial para quem desenvolve sistemas. Saber
          diferenciar um dado pessoal de um dado sensível, entender quando é necessário o
          consentimento do titular e reconhecer as responsabilidades de cada agente (controlador,
          operador e encarregado) são passos fundamentais para tomar decisões seguras no
          desenvolvimento de software.
        </p>
        <p>
          Esses conceitos são a base para todas as práticas de proteção de dados. Ao dominar o que
          são dados pessoais e sensíveis, o que significa anonimizar informações e como ocorre o
          tratamento de dados, você estará mais preparado para aplicar a lei com responsabilidade,
          segurança e ética profissional.
        </p>
        <p>
          No próximo módulo, você vai conhecer as <strong>operações de tratamento de dados</strong>,
          entendendo, na prática, como essas atividades acontecem dentro de sistemas e quais
          cuidados devem ser adotados para manter a conformidade com a LGPD.
        </p>
        <NPCBubble {...jadeBubbles.default}>
          Agora que você domina os conceitos básicos, está pronto para responder as atividades!
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
              href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd/classificacao-dos-dados"
              target="_blank"
            >
              Classificação dos Dados
            </Link>
            <Text size="sm" c="dimmed">
              Guia oficial sobre os conceitos de classificação de dados.
            </Text>
          </ListItem>
        </List>
      </Typography>

      <ButtonActivity moduleId={2} />
    </>
  )
}
