import { useState } from 'react'
import * as S from './styles'

export type TabsProps = {
  components: {
    title: string
    content: React.ReactNode
  }[]
}

const Tabs = ({ components }: TabsProps) => {
  const [activeTab, setActiveTab] = useState({ classname: 'tab-0', index: 0 })

  const handleTab = (classname: string, index: number) => {
    setActiveTab({ classname, index })
  }

  return (
    <S.Wrapper>
      <S.Nav>
        {components.map((component, index) => (
          <S.NavItem
            key={index}
            className={activeTab.classname === `tab-${index}` ? 'active' : ''}
            onClick={() => handleTab(`tab-${index}`, index)}
          >
            {component.title}
          </S.NavItem>
        ))}
      </S.Nav>

      <S.TabResult>{components[activeTab.index].content}</S.TabResult>
    </S.Wrapper>
  )
}

export default Tabs
