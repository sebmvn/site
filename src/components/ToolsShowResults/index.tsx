import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import ToolsResultCard, {
  ToolsResultCardProps
} from 'components/ToolsResultCard'
import * as S from './styles'

export type ToolsShowResultsProps = {
  title?: string
  columns?: 'one' | 'two' | 'three' | 'default'
  items: ToolsResultCardProps[]
}

const ToolsShowResults = ({
  title = 'Resultados',
  columns = 'default',
  items
}: ToolsShowResultsProps) => {
  const valueOverflow = () => {
    return !!items.find((item) => item.value.length > 18)
  }

  return (
    <S.Wrapper columns={valueOverflow() ? 'one' : columns}>
      <Heading size="medium">{title}</Heading>
      <Grid>
        {items.map((item, index) => (
          <ToolsResultCard key={index} {...item} />
        ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ToolsShowResults
