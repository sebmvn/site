import { Card } from 'components/Card'
import Chart, { ChartTypes, DatasetsTypes } from 'components/Chart'
import { Container } from 'components/Container'
import FormCalculator from 'components/FormCalculator'
import Heading from 'components/Heading'
import Table, { TableProps } from 'components/Table'
import Tabs from 'components/Tabs'
import { ToolsResultCardProps } from 'components/ToolsResultCard'
import ToolsShowResults from 'components/ToolsShowResults'
import Image from 'next/image'
import Base from 'templates/Base'
import * as S from './styles'

export type CompoundInterestCalculatorTemplateChartTypes = {
  chartType: ChartTypes
  labels: string[]
  datasets: DatasetsTypes[]
}
export type CompoundInterestCalculatorTemplateProps = {
  isClear?: boolean
  compoundInterestResults?: ToolsResultCardProps[]
  datasetsChart?: CompoundInterestCalculatorTemplateChartTypes[]
  dataTable?: TableProps
}

const CompoundInterestCalculator = ({
  isClear = true,
  compoundInterestResults = [],
  datasetsChart = [],
  dataTable
}: CompoundInterestCalculatorTemplateProps) => (
  <Base>
    <Container>
      <S.Wrapper>
        <Card>
          <Heading size="medium">Simulador de Juros Composto</Heading>
          <FormCalculator />
        </Card>
        <S.Aside>
          <Image
            src="https://hubdoinvestidor.com.br/wp-content/uploads/2022/07/cdb_bancoxp.png"
            alt=""
          />
        </S.Aside>

        <S.Result>
          {!isClear && <ToolsShowResults items={compoundInterestResults} />}
          {!isClear && datasetsChart.length > 0 && dataTable && (
            <Tabs
              components={[
                {
                  title: 'Tabela',
                  content: <Table {...dataTable} />
                },
                {
                  title: 'Gráficos',
                  content: (
                    <S.ChartBox>
                      {datasetsChart.map((props, index) => (
                        <Chart key={index} {...props} />
                      ))}
                    </S.ChartBox>
                  )
                }
              ]}
            />
          )}
        </S.Result>

        <S.Info>
          <Heading size="large" lineBottom>
            Juros Compostos{' '}
          </Heading>
          <S.Steps>
            <p>
              Os juros são um fator muito importante na vida de qualquer pessoa,
              não somente do investidor, eles conseguem te atrapalhar em caso de
              dívidas, mas são um grande aliado na hora de investir,
              principalmente no longo prazo.
              <a
                href="https://hubdoinvestidor.com.br/conheca-o-verdadeiro-poder-do-investimento-a-longo-prazo/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Conheça o verdadeiro poder do investimento a longo prazo! I Hub
                do Investidor.
              </a>
            </p>
            <Heading lineLeft>O que são Juros?</Heading>
            <p>
              Os juros, basicamente, são a rentabilidade de uma aplicação,
              geralmente quando se empresta dinheiro a alguma instituição ou a
              alguém. Dessa forma, quando você se endivida, está recebendo esse
              “empréstimo” e quem recebe os juros é a instituição financeira que
              te forneceu o crédito. Já quando você investe em um CDB ou Tesouro
              Direto, quem recebe os juros é você. Esse fator é ainda mais
              potencializado se os juros forem compostos, já que nessa
              modalidade, o tempo é crucial e consegue deixar seus investimentos
              em um exponencial.
            </p>
            <Heading lineLeft>
              Qual a diferença entre os Juros Compostos e os Juros Simples?
            </Heading>
            <p>
              Essa diferença, na hora de calcular, é pouca, mas a diferença no
              final de um investimento ou endividamento é gigantesca. Nos juros
              simples, a rentabilidade é calculada com base no montante inicial,
              ou seja, a rentabilidade será a “mesma” até o fim do período. Por
              exemplo, se R$1.000,00 são investidos a uma taxa de juros de 10%
              ao ano, por 5 anos, na modalidade juros simples, o montante final
              será de R$1.500, pois terá rendido o juros simples de R$100,00 ao
              ano. Já os Juros compostos, são calculados com base no montante
              total. Utilizando o mesmo exemplo, o montante final seria de
              R$1.610,50. Nominalmente, a diferença parece pouca, mas o
              rendimento foi de 22% maior do que a primeira simulação e nos
              investimentos, isso se intensifica ainda mais com períodos maiores
              e aportes regulares.
            </p>
            <Heading lineLeft>Qual a Fórmula dos Juros Compostos? </Heading>
            <p>
              A fórmula dos juros compostos é: M = C*(1+i)^t Onde o M é o
              Montante, o C o capital, o i a taxa de juros e o t é o tempo.
            </p>
            <div>
              <Image src="" alt="Fórmula de juros composto" />
            </div>
            <p>
              Observe que nessa fórmula, a única coisa exponencial é o tempo, ou
              seja, por mais que aportar muito e ter uma melhor rentabilidade
              ajude muito, <strong>o mais importante é o tempo.</strong>
            </p>
            <Heading lineLeft>Como investir em Juros Compostos?</Heading>
            <p>
              Existem várias formas de colocar os juros compostos a favor da sua
              carteira de investimentos, tanto em Renda Fixa quanto em Renda
              variável. Na Renda Fixa, existem opções como CDBs, Tesouro Selic,
              LCI, Debêntures, etc. Não conhece essas opções? Confira qual a
              melhor para o seu perfil aqui:{' '}
              <a
                href="https://hubdoinvestidor.com.br/qual-e-o-melhor-investimento-em-renda-fixa/"
                target="_blank"
                rel="noreferrer"
              >
                Qual é o melhor investimento em renda fixa? I Hub do Investidor
              </a>{' '}
              Já na Renda Variável, é possível pensar em ações que pagam
              dividendos regulares, e utilizar esses proventos para o
              reinvestimento, fazendo com que haja um efeito bola de neve, onde
              após vários anos, os proventos recebidos são iguais ou até maiores
              do que os aportes iniciais. Este movimento acontecerá, pois, se o
              provento é utilizado para adquirir mais ações da companhia, no
              próximo anúncio de dividendos, o investidor receberá com base em
              um mais ações. Confira 3 ações para receber até R$1.000,00 por mês
              no Insight:{' '}
              <a
                href="https://hubdoinvestidor.com.br/3-acoes-para-receber-r-1-000-em-dividendos-por-mes/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                ações para receber R$ 1.000 em dividendos por mês I Hub do
                Investidor.
              </a>
            </p>
          </S.Steps>
        </S.Info>
      </S.Wrapper>
    </Container>
  </Base>
)
export default CompoundInterestCalculator
