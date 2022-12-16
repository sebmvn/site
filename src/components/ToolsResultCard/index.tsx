import { Card } from 'components/Card'
import * as S from './styles'

export type ToolsResultCardProps = {
  title: string
  value: string
}

const ToolsResultCard = ({ title, value }: ToolsResultCardProps) => (
  <S.Wrapper>
    <Card>
      <S.Title>{title}</S.Title>
      <S.Value>{value}</S.Value>
    </Card>
  </S.Wrapper>
)

export default ToolsResultCard
