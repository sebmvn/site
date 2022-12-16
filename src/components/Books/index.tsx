import Image from 'next/image'
import * as S from './styles'

const Books = () => (
  <S.Wrapper>
    <S.Title color="rgba(0,0,0,0.8)">Obras Básicas</S.Title>
    <S.BookFeatured>
      <a
        download
        href={
          'https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Livro-dos-Esp%C3%ADritos-Guillon-1.pdf'
        }
      >
        {' '}
        <Image
          src="/img/livro_dos_espiritos.jpg"
          alt="Capa- O livro dos espíritos"
          width={1200}
          height={600}
        />
        <S.Overlay>O Livro dos Espíritos</S.Overlay>
      </a>
    </S.BookFeatured>

    <S.Book>
      <a
        download
        href={
          'https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Livro-dos-Mediuns-Guillon-1.pdf'
        }
      >
        <Image
          src="/img/livro_dos_mediuns.jpg"
          alt="Capa- O livro dos mediuns"
          width={500}
          height={500}
        />
        <S.OverlayBook>O Livro dos Médiuns</S.OverlayBook>
      </a>
    </S.Book>

    <S.Book>
      <a href="https://www.febnet.org.br/portal/wp-content/uploads/2021/09/WEB-O-que-e-o-Espiritismo-Reformador.pdf">
        {' '}
        <Image
          src="/img/o_que_e_espiritismo.jpg"
          alt="Capa- O livro dos mediuns"
          width={500}
          height={500}
        />
        <S.OverlayBook>O que é o espiritismo</S.OverlayBook>
      </a>
    </S.Book>

    <S.Book>
      <a href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-O-Evangelho-segundo-o-Espiritismo-Guillon.pdf">
        <Image
          src="/img/o_evangelho_segundo_o_espiritismo.jpg"
          alt="Capa- O Evangelho Segundo o Espiritismo"
          width={500}
          height={500}
        />
        <S.OverlayBook>O Evangelho Segundo o Espiritismo</S.OverlayBook>
      </a>
    </S.Book>
    <S.Book>
      <a
        href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-O-Ceu-e-o-inferno-Guillon.pdf"
        download
      >
        <Image
          src="/img/o_ceu_e_o_inferno.jpg"
          alt="Capa- O Céu e o inferno"
          width={500}
          height={500}
        />
        <S.OverlayBook>O Céu e o inferno</S.OverlayBook>
      </a>
    </S.Book>
    <S.Book>
      <a href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-A-Genese-Guillon.pdf">
        <Image
          src="/img/a_genese.jpg"
          alt="Capa- A Gênese"
          width={500}
          height={500}
        />
        <S.OverlayBook>A Gênese</S.OverlayBook>
      </a>
    </S.Book>

    <S.Book>
      <a
        href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Obras-postumas-Guillon.pdf"
        download
      >
        <Image
          src="/img/obras_postumas.jpg"
          alt="Capa- Obras Póstumas"
          width={500}
          height={500}
        />
        <S.OverlayBook>Obras Póstumas</S.OverlayBook>
      </a>
    </S.Book>
  </S.Wrapper>
)

export default Books
