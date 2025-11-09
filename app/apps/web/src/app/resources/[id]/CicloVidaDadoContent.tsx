import ButtonActivity from '@/components/resources/ButtonActivity'
import ConceptBox from '@/components/resources/ConceptBox'
import DefinitionBox from '@/components/resources/DefinitionBox'
import NPCBubble from '@/components/resources/NPCBubble'
import { jadeBubbles, jessicaBubbles, oliverBubbles } from '@/utils/npc/bubbles'
import { Card, List, ListItem, Text, Title, Typography } from '@mantine/core'
import {
  AlertTriangle,
  Archive,
  Book,
  Database,
  Eye,
  GitBranch,
  Lock,
  RefreshCw,
  Shield,
  Trash2,
  Upload
} from 'lucide-react'
import Link from 'next/link'

export default function CicloVidaDadoContent() {
  return (
    <>
      <Typography>
        <Title order={1} mb="lg">
          Ciclo de Vida do Dado
        </Title>

        <NPCBubble {...jessicaBubbles.default}>
          Chegamos ao módulo final! 🎓 Aqui você vai compreender todo o{' '}
          <strong>ciclo de vida do dado pessoal</strong>, desde a coleta até o descarte seguro.
          Vamos integrar tudo o que aprendemos sobre princípios, bases legais e inventários para
          garantir a proteção de dados em cada etapa!
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>O que é o ciclo de vida do dado?</Title>
          <p>
            O dado pessoal é coletado para atender a uma <strong>finalidade específica</strong> e
            percorre um ciclo que determina sua "existência" durante um período de tempo. Esse ciclo
            se inicia com a coleta e pode terminar por eliminação a pedido do titular (Art. 18, IV),
            por cumprimento de uma sanção da ANPD (Art. 52, VI) ou pelo término natural do
            tratamento (Art. 16).
          </p>

          <ConceptBox title="Importância do ciclo de vida" icon={RefreshCw} color="blue">
            A LGPD considera como <strong>tratamento</strong> todas as operações realizadas com
            dados pessoais, sem segregação. Ou seja, tanto a coleta quanto o armazenamento são
            formas de tratamento, mesmo tendo propósitos diferentes. Para orientar a prática e
            apresentar os ativos institucionais envolvidos, o Guia de Boas Práticas divide o ciclo
            em cinco fases principais.
          </ConceptBox>
        </Card>

        <Card withBorder my="lg">
          <Title order={2}>As cinco fases do ciclo de vida</Title>
          <Text>
            De acordo com o Guia de Boas Práticas da LGPD (Capítulo 3), o ciclo de vida do
            tratamento dos dados pessoais é dividido em cinco fases fundamentais:
          </Text>

          <DefinitionBox title="Fase 1 - Coleta" icon={Upload} color="violet">
            Obtenção, recepção ou produção de dados pessoais, independente do meio utilizado
            (documento em papel, documento eletrônico, sistema de informação, formulário web, API
            etc.).
            <Text mb={0}>
              <strong>Operações envolvidas:</strong> Coleta, Produção, Recepção
            </Text>
            <List listStyleType="disc">
              <ListItem>
                <strong>Atenção:</strong> A coleta deve ser legal e limitada ao necessário para os
                fins especificados (princípio da necessidade)
              </ListItem>
              <ListItem>
                <strong>Documentar:</strong> fonte dos dados, método de coleta, base legal
                aplicável, consentimento obtido (quando aplicável)
              </ListItem>
              <ListItem>
                <strong>Boas práticas:</strong> minimizar dados coletados, informar finalidade ao
                titular antes da coleta, validar dados na entrada
              </ListItem>
            </List>
          </DefinitionBox>

          <DefinitionBox title="Fase 2 - Retenção" icon={Archive} color="blue">
            Arquivamento ou armazenamento de dados pessoais, independente do meio utilizado
            (documento em papel, banco de dados, arquivo de aço, cloud storage etc.).
            <Text mb={0}>
              <strong>Operações envolvidas:</strong> Arquivamento, Armazenamento
            </Text>
            <List listStyleType="disc">
              <ListItem>
                <strong>Atenção:</strong> Definir período de retenção adequado e critérios claros
                para eliminação
              </ListItem>
              <ListItem>
                <strong>Documentar:</strong> local de armazenamento (físico ou lógico), tempo de
                retenção, responsável pela guarda, medidas de segurança aplicadas
              </ListItem>
              <ListItem>
                <strong>Boas práticas:</strong> criptografia em repouso, backups regulares, controle
                de acesso físico e lógico, segregação de ambientes
              </ListItem>
            </List>
          </DefinitionBox>

          <DefinitionBox title="Fase 3 - Processamento" icon={GitBranch} color="cyan">
            Qualquer operação que envolva o uso dos dados pessoais para gerar valor, informação ou
            cumprir uma finalidade específica.
            <Text mb={0}>
              <strong>Operações envolvidas:</strong> Classificação, Utilização, Reprodução,
              Processamento, Avaliação, Controle da informação, Extração, Modificação
            </Text>
            <List listStyleType="disc">
              <ListItem>
                <strong>Atenção:</strong> Garantir que o processamento está alinhado com a
                finalidade declarada ao titular
              </ListItem>
              <ListItem>
                <strong>Documentar:</strong> finalidade específica de cada processamento, sistemas
                utilizados, frequência de uso, transformações aplicadas aos dados
              </ListItem>
              <ListItem>
                <strong>Boas práticas:</strong> logs de auditoria, controles de qualidade de dados,
                validação de regras de negócio, testes de segurança
              </ListItem>
            </List>
          </DefinitionBox>

          <DefinitionBox title="Fase 4 - Compartilhamento" icon={GitBranch} color="orange">
            Qualquer operação que transfira, distribua ou divulgue dados pessoais para terceiros
            (internos ou externos à organização).
            <Text mb={0}>
              <strong>Operações envolvidas:</strong> Transmissão, Distribuição, Comunicação,
              Transferência, Difusão
            </Text>
            <List listStyleType="disc">
              <ListItem>
                <strong>Atenção:</strong> Compartilhamento requer base legal específica e informação
                ao titular (Art. 7º, §5º)
              </ListItem>
              <ListItem>
                <strong>Documentar:</strong> destinatários (nome e papel), finalidade do
                compartilhamento, base legal, medidas de proteção aplicadas, contratos firmados
              </ListItem>
              <ListItem>
                <strong>Boas práticas:</strong> criptografia em trânsito, contratos com cláusulas de
                proteção de dados, canais seguros de transmissão, minimização de dados
                compartilhados
              </ListItem>
            </List>
          </DefinitionBox>

          <DefinitionBox title="Fase 5 - Eliminação" icon={Trash2} color="red">
            Qualquer operação que visa apagar ou destruir dados pessoais de forma definitiva e
            segura, incluindo descarte de ativos organizacionais quando necessário.
            <p>
              <strong>Operações envolvidas:</strong> Eliminação
            </p>
            <List listStyleType="disc">
              <ListItem>
                <strong>Atenção:</strong> Art. 16 da LGPD define exceções em que dados devem ser
                mantidos (obrigação legal, transferência a terceiro, uso exclusivo pelo controlador)
              </ListItem>
              <ListItem>
                <strong>Documentar:</strong> critérios para eliminação, método de descarte seguro,
                data da eliminação, responsável pela operação, exceções aplicáveis
              </ListItem>
              <ListItem>
                <strong>Boas práticas:</strong> eliminação irreversível, destruição física de
                mídias, limpeza de backups, certificados de destruição, políticas de retenção
                documentadas
              </ListItem>
            </List>
          </DefinitionBox>

          <ConceptBox title="Importante!" icon={AlertTriangle} color="orange" mt="lg">
            A operação de <strong>ACESSO</strong> (Art. 5º, X da LGPD) está presente em{' '}
            <strong>todas as fases</strong> do ciclo de vida, pois é necessária para viabilizar as
            demais operações. Por isso, controles de acesso robustos são fundamentais em cada etapa!
          </ConceptBox>
        </Card>

        <NPCBubble {...oliverBubbles.default}>
          Agora que você conhece as cinco fases, é importante entender que cada uma delas envolve
          diferentes <strong>ativos organizacionais</strong>. Identificar quais recursos (sistemas,
          pessoas, locais) participam de cada fase é fundamental para aplicar as medidas de
          segurança corretas! 🔍
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Ativos organizacionais no ciclo de vida</Title>
          <p>
            Para implementar o correto tratamento dos dados e as medidas correlatas, é essencial
            identificar quais <strong>ativos organizacionais</strong> estão envolvidos em cada fase
            do ciclo de vida. O Guia destaca os seguintes ativos principais:
          </p>

          <List listStyleType="disc">
            <ListItem>
              <strong>Bases de dados:</strong> coleções de dados logicamente relacionados,
              projetadas para um propósito específico
            </ListItem>
            <ListItem>
              <strong>Documentos:</strong> unidades de registro de informações, qualquer que seja o
              suporte e formato
            </ListItem>
            <ListItem>
              <strong>Equipamentos:</strong> objetos necessários para o exercício de uma atividade
              (servidores, computadores, storages)
            </ListItem>
            <ListItem>
              <strong>Locais físicos:</strong> lugares onde residem informações de forma definitiva
              ou temporária (salas, data centers, arquivos)
            </ListItem>
            <ListItem>
              <strong>Pessoas:</strong> indivíduos que executam ou participam de operações de
              tratamento de dados
            </ListItem>
            <ListItem>
              <strong>Sistemas:</strong> aplicações, softwares ou soluções de TI envolvidas com as
              fases do ciclo de vida
            </ListItem>
            <ListItem>
              <strong>Unidades organizacionais:</strong> órgãos e entidades responsáveis pelo
              tratamento
            </ListItem>
          </List>

          <ConceptBox title="Mapeamento de ativos" icon={Database} color="gray">
            <p>
              Para cada fase do ciclo, identifique os ativos envolvidos e analise quais medidas
              técnicas de segurança estão implementadas. O resultado dessa análise determinará quais
              medidas devem ser implementadas ou ajustadas para garantir o grau adequado de proteção
              exigido pela LGPD.
            </p>
            <p>
              <strong>Recomendação:</strong> Use frameworks reconhecidos como ISO/IEC 27001, ISO/IEC
              27002, ISO/IEC 27701 e ISO/IEC 29151, além das Instruções Normativas do GSI/PR
              (obrigatórias para a APF).
            </p>
          </ConceptBox>
        </Card>

        <Card withBorder my="lg">
          <Title order={2}>Privacy by Design: Privacidade desde a Concepção</Title>
          <p>
            O Art. 46, §2º da LGPD estabelece que as medidas de segurança, técnicas e
            administrativas para proteção de dados pessoais{' '}
            <strong>
              deverão ser observadas desde a fase de concepção do produto ou do serviço até a sua
              execução
            </strong>
            . Este é o conceito de <strong>Privacidade desde a Concepção</strong> (Privacy by
            Design).
          </p>

          <ConceptBox
            title="Os 7 Princípios Fundamentais do Privacy by Design"
            icon={Shield}
            color="indigo"
          >
            <List spacing="sm">
              <ListItem>
                <strong>Proativo, não reativo; Preventivo, não corretivo</strong>
                <Text size="sm" c="indigo.9">
                  Antecipa e evita eventos invasivos de privacidade antes que aconteçam, em vez de
                  remediar depois
                </Text>
              </ListItem>
              <ListItem>
                <strong>Privacidade como configuração padrão</strong>
                <Text size="sm" c="indigo.9">
                  Proteção automática - o titular não precisa agir para proteger sua privacidade,
                  ela já está embutida no sistema
                </Text>
              </ListItem>
              <ListItem>
                <strong>Privacidade incorporada ao design</strong>
                <Text size="sm" c="indigo.9">
                  Não é um complemento adicional, mas parte integrante da funcionalidade principal
                  do sistema
                </Text>
              </ListItem>
              <ListItem>
                <strong>Funcionalidade total (Soma positiva, não soma zero)</strong>
                <Text size="sm" c="indigo.9">
                  Satisfaz todos os objetivos do projeto, não apenas os de privacidade. Demonstra
                  que é possível ter privacidade E segurança
                </Text>
              </ListItem>
              <ListItem>
                <strong>Segurança de ponta a ponta (proteção durante todo o ciclo de vida)</strong>
                <Text size="sm" c="indigo.9">
                  Medidas fortes de segurança do início ao fim, garantindo confidencialidade,
                  integridade e disponibilidade
                </Text>
              </ListItem>
              <ListItem>
                <strong>Visibilidade e Transparência</strong>
                <Text size="sm" c="indigo.9">
                  Garantir que todas as práticas sejam verificáveis independentemente. Confie, mas
                  verifique!
                </Text>
              </ListItem>
              <ListItem>
                <strong>Respeito pela privacidade do usuário</strong>
                <Text size="sm" c="indigo.9">
                  Empoderar os titulares a desempenhar papel ativo no gerenciamento de seus próprios
                  dados
                </Text>
              </ListItem>
            </List>
          </ConceptBox>
        </Card>

        <NPCBubble {...jessicaBubbles.neutral}>
          Privacy by Design significa que a privacidade e a proteção de dados devem ser consideradas
          desde o início do projeto e durante todo o ciclo de vida do sistema, serviço ou produto.
          Não é algo que se adiciona depois, mas sim algo intrínseco ao design! 🎨
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Privacy by Default: Privacidade por Padrão</Title>
          <p>
            Relacionado ao <strong>princípio da necessidade</strong> (Art. 6º, III), Privacy by
            Default significa que os agentes de tratamento devem implementar medidas para garantir
            que, <strong>por padrão</strong>, apenas serão processados os dados pessoais necessários
            para cumprimento da finalidade específica.
          </p>

          <ConceptBox title="Práticas de Privacy by Default" icon={Lock} color="teal">
            <List>
              <ListItem>
                <strong>Especificação da finalidade:</strong> objetivos claros, limitados e
                relevantes comunicados ao titular antes da coleta
              </ListItem>
              <ListItem>
                <strong>Limitação da coleta:</strong> coleta legal e limitada ao necessário para os
                fins especificados
              </ListItem>
              <ListItem>
                <strong>Minimização dos dados:</strong> obter o mínimo necessário de informações
                pessoais; começar com interações não identificáveis
              </ListItem>
              <ListItem>
                <strong>Limitação de uso, retenção e divulgação:</strong> dados retidos apenas pelo
                tempo necessário e eliminados com segurança depois
              </ListItem>
            </List>
          </ConceptBox>

          <ConceptBox title="Princípio da precaução" icon={AlertTriangle} color="yellow" mt="lg">
            Quando a necessidade ou uso de dados pessoais não forem claros, deve haver uma{' '}
            <strong>presunção de privacidade</strong> e o princípio da precaução deve ser aplicado.
            Dessa forma, as configurações padrão devem ser as de <strong>maior proteção</strong> à
            privacidade.
          </ConceptBox>
        </Card>

        <Card withBorder my="lg">
          <Title order={2}>Boas práticas de segurança da informação</Title>
          <p>
            O Guia de Boas Práticas (Capítulo 4) destaca a importância de seguir padrões, frameworks
            e controles de segurança reconhecidos. Aqui estão os principais:
          </p>

          <List spacing="sm" type="ordered">
            <ListItem>
              <strong>E-ping - Padrões de Interoperabilidade de Governo Eletrônico</strong>
              <Text size="sm" c="dimmed">
                Define premissas, políticas e especificações técnicas para TIC na interoperabilidade
                de serviços de governo eletrônico
              </Text>
            </ListItem>
            <ListItem>
              <strong>
                ABNT NBR ISO/IEC 27001:2013 - Sistemas de gestão da segurança da informação
              </strong>
              <Text size="sm" c="dimmed">
                Requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI
              </Text>
            </ListItem>
            <ListItem>
              <strong>
                ABNT NBR ISO/IEC 27002:2013 - Código de Prática para controles de segurança
              </strong>
              <Text size="sm" c="dimmed">
                Diretrizes para práticas de gestão de segurança (14 seções, 35 objetivos, 114
                controles)
              </Text>
            </ListItem>
            <ListItem>
              <strong>
                ABNT NBR ISO/IEC 27005:2019 - Gestão de riscos de segurança da informação
              </strong>
              <Text size="sm" c="dimmed">
                Diretrizes para o processo de gestão de riscos de segurança da informação
              </Text>
            </ListItem>
            <ListItem>
              <strong>ABNT NBR ISO/IEC 27701:2019 - Gestão da privacidade da informação</strong>
              <Text size="sm" c="dimmed">
                Extensão das ISO/IEC 27001 e 27002 especificamente para gestão da privacidade
              </Text>
            </ListItem>
            <ListItem>
              <strong>Instruções Normativas GSI/PR</strong>
              <Text size="sm" c="dimmed">
                Obrigatórias para APF - disciplinam segurança da informação e comunicações (IN
                GSI/PR nº 1/2020)
              </Text>
            </ListItem>
            <ListItem>
              <strong>Resoluções CONARQ (nº 25/2007 e nº 39/2014)</strong>
              <Text size="sm" c="dimmed">
                Para gestão arquivística de documentos digitais e repositórios arquivísticos
                digitais confiáveis
              </Text>
            </ListItem>
          </List>
        </Card>

        <NPCBubble {...oliverBubbles.default}>
          Lembre-se: a conformidade com a LGPD não é um projeto com data de término, mas um{' '}
          <strong>processo contínuo</strong> de adequação, monitoramento e melhoria. À medida que
          sistemas evoluem, novos riscos surgem e a legislação se desenvolve, é preciso revisar e
          atualizar as práticas! 🔄
        </NPCBubble>

        <Card withBorder my="lg">
          <Title order={2}>Integrando tudo: do princípio à prática</Title>
          <p>
            Chegamos ao final da nossa jornada! Vamos recapitular como todos os conceitos se
            conectam na prática do desenvolvimento de software conforme a LGPD:
          </p>

          <ConceptBox title="Fluxo completo de conformidade" icon={Eye} color="green">
            <List type="ordered">
              <ListItem>
                <strong>Entenda o contexto:</strong> LGPD surge para proteger direitos fundamentais
                (Módulo 1)
              </ListItem>
              <ListItem>
                <strong>Domine os conceitos:</strong> dados pessoais, sensíveis, agentes de
                tratamento (Módulo 2)
              </ListItem>
              <ListItem>
                <strong>Conheça as operações:</strong> 20 tipos de tratamento definidos na lei
                (Módulo 3)
              </ListItem>
              <ListItem>
                <strong>Aplique os princípios:</strong> finalidade, necessidade, transparência,
                segurança etc. (Módulo 4)
              </ListItem>
              <ListItem>
                <strong>Identifique bases legais:</strong> determine qual hipótese autoriza cada
                tratamento (Módulo 5)
              </ListItem>
              <ListItem>
                <strong>Construa o inventário:</strong> documente todas as operações e controles
                (Módulo 6)
              </ListItem>
              <ListItem>
                <strong>Gerencie o ciclo de vida:</strong> proteja dados da coleta ao descarte com
                Privacy by Design (Módulo 7)
              </ListItem>
            </List>
          </ConceptBox>

          <ConceptBox
            title="Checklist final para desenvolvedores"
            icon={Shield}
            color="indigo"
            mt="lg"
          >
            <List>
              <ListItem>✅ Mapeei todas as operações de tratamento no meu sistema</ListItem>
              <ListItem>✅ Identifiquei e documentei a base legal para cada operação</ListItem>
              <ListItem>✅ Implementei controles de acesso adequados em todas as fases</ListItem>
              <ListItem>
                ✅ Adotei Privacy by Design e Privacy by Default no desenvolvimento
              </ListItem>
              <ListItem>✅ Documentei medidas de segurança técnicas e administrativas</ListItem>
              <ListItem>✅ Estabeleci períodos de retenção e procedimentos de eliminação</ListItem>
              <ListItem>✅ Criei mecanismos para o titular exercer seus direitos</ListItem>
              <ListItem>✅ Mantive o inventário de dados atualizado</ListItem>
              <ListItem>✅ Implementei logs de auditoria e controles de monitoramento</ListItem>
              <ListItem>✅ Preparei procedimentos de resposta a incidentes</ListItem>
            </List>
          </ConceptBox>
        </Card>

        <NPCBubble {...jadeBubbles.happy}>
          🎉 Parabéns por chegar ao último módulo! Você agora tem uma base para desenvolver sistemas
          em conformidade com a LGPD. Continue estudando, pratique nas atividades e, acima de tudo,
          coloque a privacidade dos usuários no centro de suas decisões de desenvolvimento. Boa
          sorte na sua jornada como desenvolvedor responsável! 🚀
        </NPCBubble>

        <Title order={3}>Referências e materiais recomendados</Title>
        <List spacing="sm" icon={<Book size={18} />}>
          <ListItem>
            <Link
              href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/guias/guia_lgpd.pdf"
              target="_blank"
            >
              Guia de Boas Práticas para Implementação da LGPD
            </Link>
            <Text size="sm" c="dimmed">
              Capítulo 3 (Ciclo de Vida do Tratamento) e Capítulo 4 (Boas Práticas em Segurança)
            </Text>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi/guia_privacidade_concepcao.pdf"
              target="_blank"
            >
              Guia sobre Privacidade desde a Concepção e por Padrão
            </Link>
            <Text size="sm" c="dimmed">
              Documento completo sobre Privacy by Design aplicado ao desenvolvimento de sistemas
            </Text>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm"
              target="_blank"
            >
              Lei nº 13.709/2018 – LGPD (texto completo)
            </Link>
            <Text size="sm" c="dimmed">
              Especialmente Arts. 6º (princípios), 46 (medidas de segurança) e 48 (comunicação de
              incidentes)
            </Text>
          </ListItem>
          <ListItem>
            <Link href="http://eping.governoeletronico.gov.br/" target="_blank">
              e-PING - Padrões de Interoperabilidade de Governo Eletrônico
            </Link>
            <Text size="sm" c="dimmed">
              Especificações técnicas para TIC na interoperabilidade de serviços de governo
            </Text>
          </ListItem>
          <ListItem>
            <Link href="http://dsic.planalto.gov.br/" target="_blank">
              Instruções Normativas do GSI/PR
            </Link>
            <Text size="sm" c="dimmed">
              Normas obrigatórias de segurança da informação para a Administração Pública Federal
            </Text>
          </ListItem>
          <ListItem>
            <Link href="https://www.gov.br/conarq/pt-br" target="_blank">
              CONARQ - Conselho Nacional de Arquivos
            </Link>
            <Text size="sm" c="dimmed">
              Resoluções sobre gestão de documentos arquivísticos digitais (e-ARQ Brasil e RDC-Arq)
            </Text>
          </ListItem>
        </List>
      </Typography>

      <ButtonActivity moduleId={7} />
    </>
  )
}
