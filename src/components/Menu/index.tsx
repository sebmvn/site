import * as S from './styles'
import { useState } from 'react'

import { Menu as MenuIcon } from '@styled-icons/feather/Menu'
import { X as CloseIcon } from '@styled-icons/feather/X'

import { Container } from 'components/Container'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const scroll = (locale: string) => {
    const section = document.querySelector(`#${locale}`)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <S.Wrapper id="inicio">
      <Container>
        <S.NavBelt>
          <MediaMatch lessThan="medium">
            <S.IconWrapper onClick={() => setIsOpen(true)}>
              <MenuIcon aria-label="Open Mobile Menu" />
            </S.IconWrapper>
          </MediaMatch>

          <S.LogoWrapper>
            <Logo hideTextOnMobile size="large" aria-label="SEBMVN" />
          </S.LogoWrapper>

          <S.NavMain>
            <Container>
              <MediaMatch greaterThan="medium">
                <S.MenuNav>
                  <S.MenuLink onClick={() => scroll('sobre')}>
                    Sobre Nós
                  </S.MenuLink>
                  <S.MenuLink onClick={() => scroll('atividades')}>
                    Atividades
                  </S.MenuLink>
                  {/* <S.MenuLink onClick={() => scroll('psicografias')}>
                    Psicografias
                  </S.MenuLink> */}
                  <S.MenuLink onClick={() => scroll('obras-basicas')}>
                    Obras Básicas
                  </S.MenuLink>
                  <S.MenuLink onClick={() => scroll('contato')}>
                    Contato
                  </S.MenuLink>
                </S.MenuNav>
              </MediaMatch>
            </Container>
          </S.NavMain>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />

            <S.MenuNav>
              <S.MenuLink onClick={() => scroll('sobre')}>Sobre Nós</S.MenuLink>
              <S.MenuLink onClick={() => scroll('atividades')}>
                Atividades
              </S.MenuLink>
              {/* <S.MenuLink onClick={() => scroll('psicografias')}>
                    Psicografias
                  </S.MenuLink> */}
              <S.MenuLink onClick={() => scroll('obras-basicas')}>
                Obras Básicas
              </S.MenuLink>
              <S.MenuLink onClick={() => scroll('contato')}>Contato</S.MenuLink>
            </S.MenuNav>

            {!username && (
              <MediaMatch lessThan="medium">
                <S.MenuContactBox>
                  <Button fullWidth size="large">
                    Fale Conosco
                  </Button>
                </S.MenuContactBox>
              </MediaMatch>
            )}
          </S.MenuFull>

          <S.MenuGroup>
            <>
              <MediaMatch greaterThan="medium">
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5553981118888"
                  target="_blank"
                >
                  Fale Conosco
                </Button>
              </MediaMatch>
            </>
          </S.MenuGroup>
        </S.NavBelt>
      </Container>
    </S.Wrapper>
  )
}

export default Menu
