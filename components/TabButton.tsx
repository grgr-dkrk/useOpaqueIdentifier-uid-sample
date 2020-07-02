import * as React from 'react'

type Props = {
  tabId: string
  panelId: string
  selected?: boolean
  handleClick: (id: string) => void
}

export const TabButton: React.FC<Props> = (props) => {
  return (
    <button
      id={props.tabId}
      role="tab"
      aria-selected={props.selected}
      aria-controls={props.panelId}
      onClick={() => props.handleClick(props.tabId)}
    >
      {props.children}
    </button>
  )
}
