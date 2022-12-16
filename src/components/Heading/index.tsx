import * as S from './styles'

export type LineColor = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColor
  size?: 'small' | 'medium' | 'large'
}

const Heading = ({
  children,
  color = 'primary',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'secondary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
