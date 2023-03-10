import * as S from './styles'
import { Calendar } from '@styled-icons/feather'

export type CardAtivity = {
  ativity: string
  image?: string
  altImage?: string
  content: React.ReactNode
  calendar: { day: string; hour: string }[]
}

const CardAtivity = ({
  ativity,
  // image,
  // altImage,
  content,
  calendar
}: CardAtivity) => (
  <S.Card>
    <S.Title>{ativity}</S.Title>
    <S.BoxImage>
      {/* <Image src={image} alt={altImage} width={100} height={100} /> */}
    </S.BoxImage>
    <S.Content>{content}</S.Content>

    <S.BoxCalendarGroup>
      {calendar &&
        calendar.map((ativity) => {
          return (
            <>
              <S.BoxCalendar key={ativity.day + ativity.hour}>
                <Calendar width={30} />
                {ativity.day} às {ativity.hour}
              </S.BoxCalendar>
            </>
          )
        })}
    </S.BoxCalendarGroup>
  </S.Card>
)

export default CardAtivity
