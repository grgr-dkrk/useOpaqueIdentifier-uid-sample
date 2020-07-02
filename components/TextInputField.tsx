import * as React from 'react'

type Props = {
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// TODO: useOpaqueIdentifier on `htmlFor` is not supported on current build.
export const TextInputField: React.FC<Props> = (props) => {
  // @ts-ignore
  const uid = React.unstable_useOpaqueIdentifier()
  return (
    <>
      <label htmlFor={uid}>{props.label}</label>
      <input id={uid} name={props.name} onChange={props.onChange} type="text" />
    </>
  )
}
