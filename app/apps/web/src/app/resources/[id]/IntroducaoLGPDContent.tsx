import {
  Button,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Text,
  Title,
  Typography
} from '@mantine/core'
import { Book } from 'lucide-react'
import Link from 'next/link'

// TODO: Deixar conteúdo mais lúdico no futuro
export default function IntroducaoLGPDContent() {
  return (
    <>
      <Typography>
        <Title order={1}>Introdução à LGPD</Title>
        <p>
          Neste primeiro módulo, o objetivo é que você entenda o que é a LGPD, como ela surgiu e
          porque é importante que profissionais de tecnologia entendam os conceitos relacionados à
          LGPD.
        </p>
        <Grid>
          <GridCol span={2}>
            {/* Avatar com dúvida, talvez editar com uma interrogação */}
            <img
              src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jack&flip=true"
              alt="avatar"
            />
          </GridCol>
          <GridCol span={10}>
            <Title order={2}>Afinal, o que é a LGPD?</Title>
            <p>
              A LGPD, ou Lei Geral de Proteção de Dados, é a norma brasileira criada para proteger
              sua privacidade e sua liberdade como pessoa. Ela estabelece regras claras sobre como
              qualquer empresa ou pessoa (física ou jurídica) deve realizar o{' '}
              <strong>tratamento de dados pessoais</strong>, ou seja, qualquer operação feita com
              esses dados, como a coleta, o armazenamento e a utilização. Essa lei garante o
              controle e a segurança das suas informações, estejam elas em meio físico ou digital.
            </p>
            <p>
              Portanto, cabe a quem desenvolve e gerencia sistemas, os profissionais de tecnologia,
              garantir que esse tratamento de dados siga as regras da lei para proteger os direitos
              de todos.
            </p>
          </GridCol>
        </Grid>
        <Title order={2}>Origens</Title>
        <p>
          Com o avanço da internet e o uso crescente de tecnologias digitais, ficou cada vez mais
          comum que empresas e pessoas coletem, armazenem e compartilhem grandes quantidades de
          informações pessoais: como nomes, e-mails, endereços e até hábitos de navegação.
        </p>
        <p>
          Esses dados passaram a ser usados para as mais diversas finalidades: personalizar
          anúncios, melhorar serviços ou até realizar análises de comportamento. No entanto, também
          começaram a surgir preocupações com o uso indevido dessas informações: como vazamentos,
          perfis de usuários sendo vendidos sem consentimento ou a falta de transparência sobre o
          que é feito com nossos dados.
        </p>
        <p>
          Para enfrentar esses desafios, diversos países criaram leis específicas de proteção de
          dados. A mais conhecida é o <strong>GDPR</strong> (Regulamento Geral de Proteção de
          Dados), criada pela União Europeia em 2018. Inspirado por essa tendência mundial, o Brasil
          aprovou no mesmo ano a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, que passou
          a valer em 2020. Ela foi um passo importante para garantir que o tratamento de informações
          pessoais siga princípios de segurança, transparência e respeito à privacidade.
        </p>

        <Title order={2}>E se a legislação não for seguida?</Title>

        <p>
          A <strong>Lei Geral de Proteção de Dados (LGPD)</strong> não é apenas um conjunto de boas
          práticas: ela possui força de lei e define sanções para quem descumprir suas regras.
          Quando uma empresa, organização ou órgão público realiza o tratamento de dados pessoais de
          forma irregular, pode ser responsabilizada pela{' '}
          <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>.
        </p>

        <p>
          As <strong>sanções administrativas</strong> estão previstas no{' '}
          <strong>artigo 52 da LGPD</strong> e podem variar conforme a gravidade da infração e o
          histórico da instituição. O objetivo principal dessas penalidades é incentivar o
          cumprimento da lei e promover o uso responsável dos dados pessoais.
        </p>

        <p>Entre as sanções previstas, estão:</p>

        <List listStyleType="disc">
          <ListItem>
            <strong>Advertência:</strong> aplicada em casos leves, serve como alerta para corrigir
            irregularidades.
          </ListItem>
          <ListItem>
            <strong>Multa simples:</strong> pode chegar a 2% do faturamento da empresa, limitada a
            R$ 50 milhões por infração.
          </ListItem>
          <ListItem>
            <strong>Multa diária:</strong> aplicada enquanto a irregularidade não for resolvida.
          </ListItem>
          <ListItem>
            <strong>Publicização da infração:</strong> torna pública a violação cometida, afetando a
            imagem da organização.
          </ListItem>
          <ListItem>
            <strong>Bloqueio ou eliminação dos dados pessoais:</strong> impede o uso ou exige a
            exclusão dos dados obtidos de forma irregular.
          </ListItem>
        </List>

        <p>
          Essas penalidades são aplicadas apenas após análise da ANPD e garantia do direito de
          defesa da organização. Ainda assim, podem gerar grandes impactos financeiros e de
          reputação. Por isso, é fundamental que profissionais e empresas da área de tecnologia
          adotem práticas seguras e transparentes no tratamento de dados pessoais.
        </p>

        <Title order={2}>Direitos dos titulares</Title>

        <p>
          O <strong>Capítulo III da Lei Geral de Proteção de Dados (LGPD)</strong>, que vai do
          artigo 17 ao 22, descreve os direitos das pessoas em relação aos seus dados pessoais.
          Esses direitos garantem que cada indivíduo tenha mais controle sobre as informações que
          fornece a empresas, órgãos públicos ou qualquer outra instituição.
        </p>

        <p>
          O titular dos dados pessoais é toda pessoa que tem suas informações coletadas, armazenadas
          ou utilizadas por alguém. A LGPD assegura que esse titular saiba{' '}
          <strong>quais dados</strong> estão sendo tratados, <strong>por que</strong> estão sendo
          usados e <strong>com quem</strong> podem ser compartilhados. Além disso, ele pode
          solicitar diversas ações sobre essas informações.
        </p>

        <p>Entre os principais direitos previstos na LGPD estão:</p>

        <List listStyleType="disc">
          <ListItem>
            <strong>Acesso:</strong> saber se uma organização possui dados pessoais seus e consultar
            quais são.
          </ListItem>
          <ListItem>
            <strong>Correção:</strong> pedir a atualização ou a retificação de informações
            incorretas ou desatualizadas.
          </ListItem>
          <ListItem>
            <strong>Eliminação:</strong> solicitar a exclusão de dados tratados de forma irregular
            ou quando o consentimento for retirado.
          </ListItem>
          <ListItem>
            <strong>Portabilidade:</strong> transferir seus dados para outro serviço, quando
            tecnicamente possível.
          </ListItem>
          <ListItem>
            <strong>Informação:</strong> saber com quem os dados foram compartilhados e para quais
            finalidades.
          </ListItem>
          <ListItem>
            <strong>Revogação do consentimento:</strong> retirar a autorização concedida para o uso
            de seus dados pessoais.
          </ListItem>
        </List>

        <p>
          Esses direitos fortalecem a confiança entre usuários e organizações. Para profissionais de
          tecnologia, compreender e aplicar esses princípios é essencial, tanto para criar sistemas
          alinhados à LGPD quanto para garantir transparência e segurança aos usuários.
        </p>

        <Title order={2}>Conclusão</Title>

        <p>
          Portanto, compreender a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> é essencial
          para qualquer profissional que atua com tecnologia. Entender seus princípios, direitos e
          sanções ajuda a desenvolver sistemas mais seguros, éticos e confiáveis, valores cada vez
          mais valorizados no mercado.
        </p>

        <p>
          No próximo módulo, você vai conhecer com mais profundidade os
          <strong> conceitos básicos da LGPD</strong>, como o que são <em>dados pessoais</em>,{' '}
          <em>dados sensíveis</em> e quem são os <em>agentes de tratamento</em>. Esses conhecimentos
          são a base para aplicar a lei de forma prática no desenvolvimento de aplicações e no dia a
          dia profissional.
        </p>

        <Title order={3}>Leituras e materiais recomendados</Title>

        <Text c="dimmed" mb="sm">
          Aprofunde o que aprendeu neste módulo consultando materiais confiáveis e de fácil leitura.
          Esses recursos ajudam a compreender melhor a aplicação prática da LGPD e a importância da
          proteção de dados no desenvolvimento de sistemas.
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

      <Group mt="lg" justify="flex-end">
        <Button
          size="md"
          component={Link}
          href={{
            pathname: `/module/1`
          }}
        >
          Ir para as atividades do módulo
        </Button>
      </Group>
    </>
  )
}
