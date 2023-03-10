import Button from 'components/Button'
import * as S from './styles'
import { Flag } from '@styled-icons/feather'

const FixedButtonOnBottom = () => (
  <S.Wrapper>
    <Button as="a" href="#" size="large" icon={<Flag />}>
      Inscreva-se no DIJ
    </Button>
  </S.Wrapper>
)

export default FixedButtonOnBottom
