import Button from 'components/Button'
import * as S from './styles'

const HeroBanner = () => (
  <S.Wrapper>
    <S.Title>
      Sociedade Espírita Beneficente <br /> Miguel Vieira de Novaes
    </S.Title>
    <S.MutedText>Fundada em 3 de outubro de 1934.</S.MutedText>
    <S.Description>
      Nascer, morrer, renascer ainda e{' '}
      <S.FeaturedText>progredir sempre</S.FeaturedText>, tal é a lei.
      <br />
      Fora da caridade não há salvação!
    </S.Description>
    <Button
      as="a"
      href="https://api.whatsapp.com/send?phone=5553981118888"
      target="_blank"
    >
      Entre em contato
    </Button>
  </S.Wrapper>
)

export default HeroBanner
