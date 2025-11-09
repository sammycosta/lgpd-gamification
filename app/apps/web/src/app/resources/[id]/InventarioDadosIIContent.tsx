import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import NPCBubble from '@/components/resources/NPCBubble'
import { jadeBubbles, jessicaBubbles, oliverBubbles } from '@/utils/npc/bubbles'
import { Card, List, ListItem, Text, Title, Typography } from '@mantine/core'
import { Book, ClipboardList, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
export default function InventarioDadosIIContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Inventário de Dados II
        </Title>

        <NPCBubble {...oliverBubbles.default}>
          Neste módulo, vamos aprofundar o processo de construção do
          <strong> inventário de dados pessoais</strong>, detalhando o preenchimento das informações
          conforme as diretrizes do{' '}
          <strong>Guia de Elaboração de Inventário de Dados Pessoais</strong> do Governo Federal.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Do mapeamento à documentação</Title>
          <p>
            No módulo anterior, aprendemos a identificar as <strong>operações de tratamento</strong>{' '}
            e a relacioná-las às <strong>bases legais</strong>. Agora, daremos um passo além:
            transformaremos essas informações em um inventário estruturado e documentado: uma{' '}
            <em>fotografia</em> do tratamento de dados no sistema.
          </p>

          <ConceptBox title="Propósito do inventário" icon={ClipboardList} color="indigo">
            O inventário é o registro formal das operações de tratamento de dados pessoais. Ele
            descreve <strong>o que é feito</strong> com os dados, <strong>por quem</strong>,{' '}
            <strong>para quê</strong> e <strong>com quais medidas de proteção</strong>. Seguindo o
            art. 37 da LGPD, ele demonstra a conformidade da aplicação com os princípios da lei.
          </ConceptBox>
        </Card>

        <NPCBubble {...jessicaBubbles.neutral}>
          O guia oficial recomenda que cada sistema ou serviço tenha seu próprio inventário. Assim,
          é possível entender com clareza como cada operação lida com os dados pessoais, da coleta
          até a eliminação!
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Etapas de elaboração</Title>
          <p>
            O <strong>Guia de Elaboração de Inventário de Dados Pessoais</strong> propõe um modelo
            estruturado em etapas. Essas etapas garantem que todas as informações relevantes sobre o
            tratamento sejam registradas.
          </p>

          <List listStyleType="decimal" spacing="sm">
            <ListItem>
              <strong>Identificação do serviço ou processo:</strong> registre o nome e o
              identificador (ID) do serviço que trata dados pessoais.
            </ListItem>
            <ListItem>
              <strong>Agentes de tratamento:</strong> informe quem é o controlador, operador e
              encarregado responsáveis pelo tratamento.
            </ListItem>
            <ListItem>
              <strong>Fluxo do tratamento:</strong> descreva como os dados são coletados,
              armazenados, processados, compartilhados e eliminados.
            </ListItem>
            <ListItem>
              <strong>Escopo e natureza:</strong> defina a abrangência geográfica e a origem dos
              dados (ex.: formulário eletrônico, API, integração com outro sistema).
            </ListItem>
            <ListItem>
              <strong>Finalidade e previsão legal:</strong> relacione cada operação à sua hipótese
              de tratamento (art. 7º ou 11 da LGPD) e à norma que respalda sua execução.
            </ListItem>
            <ListItem>
              <strong>Categorias de dados:</strong> liste os tipos de dados pessoais e sensíveis
              tratados, bem como o tempo e o local de retenção.
            </ListItem>
            <ListItem>
              <strong>Titulares:</strong> identifique as categorias de pessoas envolvidas (usuários,
              clientes, servidores etc.) e se há dados de grupos vulneráveis ou de crianças e
              adolescentes.
            </ListItem>
            <ListItem>
              <strong>Compartilhamentos:</strong> indique com quem os dados são compartilhados e
              para qual finalidade.
            </ListItem>
            <ListItem>
              <strong>Controles de segurança e privacidade:</strong> descreva as medidas técnicas e
              administrativas aplicadas para proteger os dados.
            </ListItem>
            <ListItem>
              <strong>Transferência internacional de dados:</strong> informe se os dados são
              armazenados ou processados fora do território nacional, indicando o país, a finalidade
              e as garantias adotadas.
            </ListItem>
            <ListItem>
              <strong>Contratos e instrumentos jurídicos:</strong> registre os contratos, termos de
              uso ou acordos firmados com operadores, fornecedores e parceiros que tratam dados
              pessoais em nome do controlador.
            </ListItem>
            <ListItem>
              <strong>Atualização contínua:</strong> revise o inventário periodicamente e atualize-o
              sempre que houver mudanças em sistemas, fornecedores ou processos
            </ListItem>
          </List>
        </Card>

        <NPCBubble {...oliverBubbles.default}>
          Documentar essas etapas ajuda a avaliar se há dados excessivos sendo tratados, se há
          compartilhamentos indevidos e se todas as finalidades estão bem definidas.
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Controles e medidas de segurança</Title>
          <p>
            O guia destaca a importância de registrar os{' '}
            <strong>controles de privacidade e segurança</strong> adotados, tanto técnicos quanto
            administrativos. Isso demonstra o compromisso da organização com a integridade e a
            confidencialidade dos dados.
          </p>

          <List listStyleType="disc">
            <ListItem>Uso de criptografia em repouso e em trânsito;</ListItem>
            <ListItem>Gestão de acessos e autenticação multifator;</ListItem>
            <ListItem>Backups regulares e descarte seguro de mídias;</ListItem>
            <ListItem>
              Políticas de privacidade publicadas e de fácil acesso aos titulares.
            </ListItem>
          </List>

          <ConceptBox title="Dica prática" icon={ShieldCheck} color="teal">
            Sempre relacione os controles de segurança com os riscos identificados. Por exemplo, se
            há dados sensíveis de saúde, deve-se aplicar criptografia e controles de acesso
            reforçados.
          </ConceptBox>
        </Card>

        <NPCBubble {...jadeBubbles.default}>
          Agora que você já conhece as partes que compõem o inventário, é hora de aplicar o
          conhecimento nas atividades! No próximo módulo, vamos explorar o Ciclo de Vida do Dado. 🔄
        </NPCBubble>

        <Title order={3}>Referências e materiais recomendados</Title>
        <List spacing="sm" icon={<Book size={18} />}>
          <ListItem>
            <Link
              href="https://www.gov.br/governodigital/pt-br/seguranca-e-protecao-de-dados/ppsi/guia_inventario_dados_pessoais.pdf"
              target="_blank"
            >
              Guia de Elaboração de Inventário de Dados Pessoais (Versão 2.0 – 2023)
            </Link>
            <Text size="sm" c="dimmed">
              Documento oficial da Secretaria de Governo Digital (SGD/MGI) com os elementos e
              orientações completas para o inventário de dados pessoais.
            </Text>
          </ListItem>
        </List>
      </Typography>

      <ButtonActivity moduleId={6} />
    </>
  )
}
