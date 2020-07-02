import * as React from 'react'
import { TabButton } from './TabButton'
import { TabPanel } from './TabPanel'

export const Tabs: React.FC = () => {
  // @ts-ignore
  const tabOneId = React.unstable_useOpaqueIdentifier()
  // @ts-ignore
  const panelOneId = React.unstable_useOpaqueIdentifier()
  // @ts-ignore
  const tabTwoId = React.unstable_useOpaqueIdentifier()
  // @ts-ignore
  const panelTwoId = React.unstable_useOpaqueIdentifier()

  const [current, setCurrent] = React.useState<string>(tabTwoId)

  React.useEffect(() => {
    setCurrent(tabOneId)
  }, [tabOneId])

  return (
    <div>
      <h2>Tabs</h2>
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
