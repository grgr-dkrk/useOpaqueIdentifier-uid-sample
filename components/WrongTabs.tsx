import * as React from 'react'
import { TabButton } from './TabButton'
import { TabPanel } from './TabPanel'
import { v4 } from 'uuid'
import { generateId } from '../functions/counter'

export const WrongTabs: React.FC = () => {
  const tabOneId = React.useMemo(() => v4(), [])
  const panelOneId = React.useMemo(() => generateId(), [])
  const tabTwoId = v4()
  const panelTwoId = generateId()

  const [current, setCurrent] = React.useState<string>(tabTwoId)

  React.useEffect(() => {
    setCurrent(tabOneId)
  }, [tabOneId])

  return (
    <div>
      <h2>Wrong Tabs</h2>
      <div role="tablist" aria-label="uid sample tabs">
        <TabButton
          tabId={tabOneId}
          panelId={panelOneId}
          selected={current === tabOneId}
          handleClick={setCurrent}
        >
          Tab1
        </TabButton>
        <TabButton
          tabId={tabTwoId}
          panelId={panelTwoId}
          selected={current === tabTwoId}
          handleClick={setCurrent}
        >
          Tab2
        </TabButton>
      </div>
      <TabPanel
        id={panelOneId}
        labelledBy={tabOneId}
        selected={current === tabOneId}
      >
        Content1
      </TabPanel>
      <TabPanel
        id={panelTwoId}
        labelledBy={tabTwoId}
        selected={current === tabTwoId}
      >
        Content2
      </TabPanel>
    </div>
  )
}
