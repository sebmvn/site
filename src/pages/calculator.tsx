import { ChartTypes } from 'components/Chart'
import { TableProps } from 'components/Table'
import { ToolsResultCardProps } from 'components/ToolsResultCard'
import { useCalc } from 'hooks/use-calc'
import { useEffect, useState } from 'react'
import CompoundInterestCalculatorTemplate, {
  CompoundInterestCalculatorTemplateChartTypes
} from 'templates/CompoundInterestCalculator'
import { formatPriceNotation } from 'utils/formatNumber'

const CalculatorPage = () => {
  const {
    isClear,
    finalTotalValue,
    totalAmountInvested,
    totalInInterest,
    calcCompoundInterest,
    calcAmountMonthly
  } = useCalc()

  const [compoundInterestResults, setCompoundInterestResults] = useState<
    ToolsResultCardProps[]
  >([])

  const [datasetsChart, setDatasetsChart] = useState<
    CompoundInterestCalculatorTemplateChartTypes[]
  >({} as CompoundInterestCalculatorTemplateChartTypes[])

  const [dataTable, setDataTable] = useState<TableProps>({
    columns: [
      'Mês',
      'Juros',
      'Total Investido',
      'Total Juros',
      'Total Acumulado'
    ],
    data: []
  })

  useEffect(() => {
    if (!isClear) {
      calcCompoundInterest()
      setCompoundInterestResults([
        {
          title: 'Valor total final',
          value: `R$ ${
            isFinite(finalTotalValue)
              ? formatPriceNotation(finalTotalValue.toFixed(2))
              : '∞'
          }`
        },
        {
          title: 'Valor total investido',
          value: `R$ ${
            isFinite(totalAmountInvested)
              ? formatPriceNotation(totalAmountInvested.toFixed(2))
              : '∞'
          }`
        },
        {
          title: 'Total em juros',
          value: `R$ ${
            isFinite(totalInInterest)
              ? formatPriceNotation(totalInInterest.toFixed(2))
              : '∞'
          }`
        }
      ])

      const amount = calcAmountMonthly()
      const labels = Object.keys(amount.values)
      setDatasetsChart([
        {
          labels,
          chartType: 'bar' as ChartTypes,
          datasets: [
            { label: 'Valor investido', data: amount.values },
            { label: 'Valor em Juros', data: amount.interestRates }
          ]
        },
        {
          labels: ['Valor investido', 'Valor em juros'],
          chartType: 'pie' as ChartTypes,
          datasets: [
            {
              data: [
                amount.values[amount.values.length - 1],
                amount.interestRates[amount.interestRates.length - 1]
              ]
            }
          ]
        }
      ])

      setDataTable({
        ...dataTable,
        data: labels.map((label, index) => {
          return {
            id: `${index}`,
            month: `${label}`,
            interestRateMonthly:
              index === 0
                ? '--'
                : formatPriceNotation(
                    (
                      amount.interestRates[index] -
                      amount.interestRates[index - 1]
                    ).toFixed(2)
                  ),
            totalValue: formatPriceNotation(amount.values[index].toFixed(2)),
            totalInInterest: formatPriceNotation(
              amount.interestRates[index].toFixed(2)
            ),
            totalAmountInvested: formatPriceNotation(
              (amount.values[index] + amount.interestRates[index]).toFixed(2)
            )
          }
        })
      })
    }
  }, [
    isClear,
    calcCompoundInterest,
    calcAmountMonthly,
    finalTotalValue,
    totalAmountInvested,
    totalInInterest,
    dataTable
  ])

  return (
    <CompoundInterestCalculatorTemplate
      {...{ isClear, compoundInterestResults, datasetsChart, dataTable }}
    />
  )
}

export default CalculatorPage
