import { Button, Code, Group, List, ListItem, Text, Title, Typography } from '@mantine/core'
import { Book } from 'lucide-react'
import Link from 'next/link'

// TODO: Deixar conteúdo mais lúdico no futuro
export default function ConceitosBasicosContent() {
  return (
    <>
      <Typography>
        <Title order={1}>Conceitos Básicos</Title>
        <p>
          Neste módulo, o objetivo é compreender os principais conceitos da Lei Geral de Proteção de
          Dados (LGPD). Aqui, você vai aprender o que são <strong>dados pessoais</strong>,{' '}
          <strong>dados sensíveis</strong>, o que significa <strong>anonimizar</strong> informações
          e quem são os <strong>agentes responsáveis pelo tratamento de dados</strong>. Essas
          definições são a base para entender como aplicar a lei de forma correta em qualquer
          sistema ou aplicação tecnológica.
        </p>

        <Title order={2}>O que são dados pessoais?</Title>
        <p>
          De forma simples, <strong>dados pessoais</strong> são todas as informações que podem{' '}
          <strong>identificar uma pessoa</strong>, direta ou indiretamente.
        </p>
        <p>
          Isso inclui desde dados óbvios, como nome, CPF, RG e endereço, até informações que, quando
          combinadas, permitem reconhecer alguém, como <strong>histórico de navegação</strong>,{' '}
          <strong>localização</strong>, ou <strong>preferências de consumo</strong>.
        </p>
        <p>
          Exemplo: o e-mail <Code>joana.silva@empresa.com</Code> é um dado pessoal, pois permite
          identificar uma pessoa específica.
        </p>
        <p>
          Esses dados merecem atenção, pois o uso inadequado pode gerar exposição, discriminação ou
          até fraudes.
        </p>

        <Title order={2}>O que são dados sensíveis?</Title>
        <p>
          Os <strong>dados sensíveis</strong> são um tipo especial de dado pessoal que, se divulgado
          ou tratado de forma inadequada, pode causar{' '}
          <strong>danos à liberdade, à privacidade ou à segurança da pessoa</strong>. A LGPD define
          como sensíveis informações sobre:
        </p>
        <List listStyleType="disc">
          <ListItem>Origem racial ou étnica</ListItem>
          <ListItem>Convicção religiosa ou opinião política</ListItem>
          <ListItem>Filiação sindical</ListItem>
          <ListItem>Dados referentes à saúde ou à vida sexual</ListItem>
          <ListItem>Dados genéticos ou biométricos</ListItem>
        </List>
        <p>
          Por exemplo, armazenar o histórico médico de um usuário exige{' '}
          <strong>cuidados e bases legais</strong> específicas, já que esse tipo de informação pode
          revelar aspectos íntimos da pessoa.
        </p>
        <Title order={2}>Anonimização: quando o dado deixa de identificar alguém</Title>
        <p>
          A <strong>anonimização</strong> é o processo de{' '}
          <strong>remover ou alterar informações </strong>de modo que não seja mais possível{' '}
          <strong>identificar o titular dos dados</strong>, mesmo que o conjunto seja analisado em
          conjunto com outras bases. Um dado anonimizado deixa de ser considerado "pessoal" pela
          LGPD, desde que <strong>não possa ser revertido</strong> com meios técnicos razoáveis.
        </p>
        <p>Exemplo: substituir nomes por códigos aleatórios em um banco de dados de pesquisa.</p>
        <p>
          Mas atenção: se for possível "reidentificar" a pessoa com alguma técnica, o dado{' '}
          <strong>ainda é pessoal</strong>.
        </p>

        <Title order={2}>Quem são os agentes de tratamento?</Title>
        <p>A LGPD define quatro principais agentes, cada um com funções específicas:</p>
        <List listStyleType="disc">
          <ListItem>
            <strong>Titular:</strong> é o dono dos dados, ou seja, a pessoa natural a quem as
            informações se referem.
          </ListItem>
          <ListItem>
            <strong>Controlador:</strong> é quem decide como e por que os dados serão tratados.
          </ListItem>
          <ListItem>
            <strong>Operador:</strong> é quem realiza o tratamento de dados em nome do controlador
            (por exemplo, uma empresa terceirizada).
          </ListItem>
          <ListItem>
            <strong>Encarregado (DPO):</strong> torna pública a violação cometida, afetando a imagem
            da organização.
          </ListItem>
        </List>
        <p>
          Esses papéis formam o ecossistema da proteção de dados. Em sistemas de software, entender
          essa divisão ajuda a identificar <strong>quem é responsável por cada ação</strong> e{' '}
          <strong>como garantir a conformidade com a LGPD</strong>.
        </p>

        <Title order={2}>Conclusão</Title>
        <p>
          Compreender os conceitos básicos da LGPD é essencial para quem desenvolve sistemas. Saber
          diferenciar um dado pessoal de um dado sensível, entender quando é necessário o
          consentimento do titular e reconhecer as responsabilidades de cada agente (controlador,
          operador e encarregado) são passos fundamentais para tomar decisões seguras no
          desenvolvimento de software.
        </p>
        <p>
          Esses conceitos formam o <strong>alicerce</strong> de todas as práticas de proteção de
          dados. Ao dominar o que são dados pessoais e sensíveis, o que significa anonimizar
          informações e como ocorre o tratamento de dados, você estará mais preparado para aplicar a
          lei com responsabilidade, segurança e ética profissional.
        </p>
        <p>
          No próximo módulo, você vai conhecer as <strong>operações de tratamento de dados</strong>,
          entendendo, na prática, como essas atividades acontecem dentro de sistemas e quais
          cuidados devem ser adotados para manter a conformidade com a LGPD.
        </p>

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
          </ListItem>
        </List>
      </Typography>
      <Group mt="lg" justify="flex-end">
        <Button
          size="md"
          component={Link}
          href={{
            pathname: `/module/2`
          }}
        >
          Ir para as atividades do módulo
        </Button>
      </Group>
    </>
  )
}
