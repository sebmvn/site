import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
} from 'chart.js'

import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
)

export type DatasetsTypes = {
  data: number[]
  label?: string
  style?: {
    backgroundColor?: string | string[]
    borderColor?: string | string[]
  }
}

export type ChartTypes = 'bar' | 'pie'

export type ChartProps = {
  chartType: ChartTypes
  labels: string[]
  datasets: DatasetsTypes[]
}

const Chart = ({ chartType, labels, datasets }: ChartProps) => {
  const optionsBarStacked = {
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked'
      }
    },
    mantainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
  const backgroundColors = ['#193241', '#0ADC7D']
  const dataBarStacked = {
    labels,
    datasets: datasets.map(({ label, data }, index) => {
      return {
        label,
        data: data.map((data) => data),
        backgroundColor: backgroundColors[index % 2],
        stack: 'Stack 0'
      }
    })
  }

  const dataPie = {
    labels,
    datasets: datasets.map(({ label, data }) => {
      return {
        label,
        data: data.map((data) => data),
        backgroundColor: data.map((_, index) => backgroundColors[index % 2]),
        borderColor: data.map((_, index) => backgroundColors[index % 2]),
        borderWidth: 1
      }
    })
  }

  const renderChartType = {
    bar: <Bar options={optionsBarStacked} data={dataBarStacked} />,
    pie: <Pie data={dataPie} />
  }

  return <>{renderChartType[chartType]}</>
}

export default Chart
