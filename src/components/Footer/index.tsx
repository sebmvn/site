import Logo from 'components/Logo'
import Button from 'components/Button'

import * as S from './styles'

import { useTheme } from 'styled-components'

import { Instagram as InstagramIcon } from '@styled-icons/feather/Instagram'
import { Facebook as FacebookIcon } from '@styled-icons/feather/Facebook'
import { Youtube as YoutubeIcon } from '@styled-icons/feather/Youtube'
import { Container } from 'components/Container'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const theme = useTheme()

  return (
    <S.Wrapper id="contato">
      <Container>
        <Logo color="primary" size="large" />
        <S.Content>
          <S.Info>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="1080"
                  height="540"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=vice%20almirante%20abreu,568%20&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </div>

            <p>
              Rua Vice Almirante Abreu, 568 - Centro, Rio Grande-RS CEP
              96200-270
            </p>
          </S.Info>
          <S.SocialMedia>
            <a
              href="https://www.instagram.com/sebmvnoficial/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/sebmvn.org"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              <FacebookIcon fill={theme.colors.footerBg} />
            </a>
            <a
              href="https://www.youtube.com/c/SEBMVN"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              <YoutubeIcon />
            </a>
          </S.SocialMedia>

          <S.ContactButton
            href="https://api.whatsapp.com/send?phone=5553981118888"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="medium">Fale conosco</Button>
          </S.ContactButton>

          {/* <S.Column aria-labelledby="resources" data-testid="resources">
            <MenuNav>
              <MenuLink href="/#sobre">Sobre Nós</MenuLink>
              <MenuLink href="/#atividades">Atividades</MenuLink>
              <MenuLink href="/#psicografias">Psicografias</MenuLink>
              <MenuLink href="/#obras-basicas">Obras Básicas</MenuLink>
              <MenuLink href="/#contato">Contato</MenuLink>
            </MenuNav>
          </S.Column> */}
          {/* <ArrowUpCircle onClick={() => scroll('inicio')} width={30} /> */}
        </S.Content>
      </Container>

      <S.Copyright>
        <Container>
          Copyright © {currentYear} | Desenvolvido com{' '}
          <svg
            width="10"
            height="10"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0291 4.80001C10.5737 3.26737 8.6575 2.44211 7.75629 2.14737C7.75629 2.14737 5.63532 1.81228 4.48349 2.58947C3.3564 3.34998 2.49136 4.3698 2.20676 5.38948C1.85052 6.6659 1.96048 7.71672 2.49136 8.9263C3.20282 10.5474 6.47563 12.9053 6.47563 12.9053C6.47563 12.9053 9.362 14.849 11.0291 16C13.4742 14.2159 14.8422 13.5522 17.1478 11.5789L17.2099 11.5258C18.1473 10.7238 18.7938 10.1707 19.4245 9.07367C20.0937 7.9098 20.0954 6.42106 19.8514 5.53685C19.5668 4.50527 18.9633 3.63122 18.0016 2.88421C16.8632 2 15.3928 2.09825 14.4442 2C12.0536 2.70737 11.2188 4.11229 11.0291 4.80001Z"
              stroke="#0D2538"
              strokeOpacity="0.8"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>{' '}
          pelo setor de mídia da SEBMVN.
        </Container>
      </S.Copyright>
    </S.Wrapper>
  )
}
export default Footer
