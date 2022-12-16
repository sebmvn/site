import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Menu />

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Footer />
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
