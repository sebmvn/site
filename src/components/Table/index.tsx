import DataTable, { TableColumn } from 'react-data-table-component'

export type DataRow = Record<string, string>
export type TableProps = {
  columns: string[]
  data: DataRow[]
}

const Table = ({ columns, data }: TableProps) => {
  const keys = Object.keys(data[0])
  const tableColumns: TableColumn<DataRow>[] = keys.map((key, index) => {
    return {
      name: columns[index],
      selector: (row) => row[key]
    }
  })

  return <DataTable columns={tableColumns} data={data} />
}

export default Table
