import { Story, Meta } from '@storybook/react/types-6-0'
import Table, { TableProps } from '.'

export default {
  title: 'Table',
  component: Table,
  args: {
    columns: [
      'Mês',
      'Juros',
      'Total Investido',
      'Total Juros',
      'Total Acumulado'
    ],
    data: [
      {
        month: '0',
        interestRateMonthly: '--',
        totalValue: 'R$ 5.000,0',
        totalInInterest: 'R$ 0,00',
        totalAmountInvested: 'R$ 5.000,00'
      },
      {
        month: '1',
        interestRateMonthly: 'R$ 50,00',
        totalValue: 'R$ 7.000,0',
        totalInInterest: 'R$ 50,00',
        totalAmountInvested: 'R$ 7.050,00'
      },
      {
        month: '2',
        interestRateMonthly: 'R$ 70,50',
        totalValue: 'R$ 9.000,0',
        totalInInterest: 'R$ 120,50',
        totalAmountInvested: 'R$ 9.120,50'
      }
    ]
  }
} as Meta

export const Default: Story<TableProps> = (args) => <Table {...args} />
