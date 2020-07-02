import * as React from 'react'

type Props = {
  id: string
  labelledBy: string
  selected: boolean
}

export const TabPanel: React.FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      role="tablist"
      aria-labelledby={props.labelledBy}
      tabIndex={0}
      hidden={!props.selected}
    >
      {props.children}
    </div>
  )
}
