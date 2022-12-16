import * as S from './styles'
import Image from 'next/image'

const About = () => (
  <S.Wrapper>
    <S.Description>
      <S.Title color="rgba(0,0,0,0.8)">Somos uma Sociedade Espírita</S.Title>
      <S.DescriptionText>
        conforme definido nos postulados da Doutrina Espírita, codificada por
        Allan Kardec. Desenvolvemos atividades de caráter integralmente
        filantrópico nas áreas espiritual, educacional, artística e
        assistencial.
      </S.DescriptionText>
      {/* <Button background="transparent">Saiba mais sobre nós</Button> */}
    </S.Description>
    <S.BoxImage>
      <Image
        src="/img/icon-512.png"
        alt="Mapa Deus cristo caridade"
        width={440}
        height={440}
      />
    </S.BoxImage>
  </S.Wrapper>
)

export default About
