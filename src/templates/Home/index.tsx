import { Container } from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'
import { BannerProps } from 'components/Banner'
import HeroBanner from 'components/HeroBanner'
import About from 'components/About'
import CardAtivity from 'components/CardAtivity'
import Books from 'components/Books'

export type HomeTemplateProps = {
  banners: BannerProps[]
}

const Home = ({ banners }: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner id="sobre">
          <HeroBanner />
          <About />
          <S.Cards id="atividades">
            <CardAtivity
              ativity="Doutrina e Passe"
              image="/img/img-doutrina-e-passe.png"
              altImage="Imagem doutrina e passe"
              content={
                <S.CardContent>
                  Palestra com base em um dos capítulos de{' '}
                  <span>O Evangelho Segundo o Espiritismo</span>, obra que
                  explica os{' '}
                  <span>ensinamentos de Jesus à luz da Doutrina Espírita</span>,
                  relacionando-os aos problemas atuais por que passam as
                  individualidades e a sociedade humana de forma a apresentar
                  causas e soluções. Após a palestra, são ministrados{' '}
                  <span>passes espíritas</span> aos que desejem recebê-lo.
                </S.CardContent>
              }
              calendar={[
                { day: 'Terças-feiras', hour: '20:30h' },
                { day: 'Sábados', hour: '16:00h' }
              ]}
            />
            <CardAtivity
              ativity="Estudo Doutrinário"
              image="/img/estudos-de-pre-ciclo.png"
              altImage="Imagem Estudo de ciclo"
              content={
                <S.CardContent>
                  Estudo da Doutrina Espírita fundamentado, principalmente, na
                  obra básica <span>O Livro dos Espíritos</span>, a qual contém
                  os ensinamentos dos espíritos superiores acerca das diversas
                  questões da Vida, tais como: Deus, a imortalidade do ser,
                  reencarnação, relações e comunicabilidade entre os espíritos
                  encarnados e desencarnados, Leis Morais, entre outros.{' '}
                  <span>
                    A finalidade desses estudos é a formação de trabalhadores
                    espíritas, não se prestando à satisfação de curiosidades ou
                    de mero ganho cultural.
                  </span>
                </S.CardContent>
              }
              calendar={[{ day: 'Segundas-feiras', hour: '20:30h' }]}
            />
            <CardAtivity
              ativity="Infância e Juventude"
              image="/img/dij.png"
              altImage="Imagem Infância e juventude"
              content={
                <S.CardContent>
                  <p>
                    O Departamento de Infância e Juventude (DIJ) cuida do{' '}
                    <span>
                      estudo da Doutrina Espírita destinado à crianças e jovens
                    </span>
                    , procurando-se adequar os ensinamentos doutrinários às
                    respectivas faixas etárias, bem como às individualidades.
                    Compõe o DIJ 3 grupos assim organizados:
                  </p>
                  <ul>
                    <li>Pré-Dij – 4 a 7 anos</li>
                    <li>Infantil – 8 a 12 anos</li>
                    <li>Juvenil – 13 a 17 anos</li>
                  </ul>
                </S.CardContent>
              }
              calendar={[{ day: 'Sábados', hour: '14:00h' }]}
            />
          </S.Cards>
          <S.CardFooter>
            Agendamentos de outros horários,{' '}
            <span className="feature">
              <a
                href="https://api.whatsapp.com/send?phone=5553981118888"
                target="_blank"
                rel="noreferrer"
              >
                entre em contato
              </a>
            </span>
          </S.CardFooter>
          <div id="obras-basicas">
            <Books />
          </div>
          {/* <BannerSlider items={banners} /> */}
        </S.SectionBanner>
      </Container>
    </Base>
  )
}

export default Home
