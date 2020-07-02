import * as React from 'react'
import { v4 } from 'uuid'

export const ButtonAndText: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false)
  const uid = React.useMemo(() => v4(), [])
  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>Click</button>
      {isActive && (
        <section>
          <h2 id={uid}>Bar</h2>
          <div aria-describedby={uid}>Foo</div>
        </section>
      )}
    </>
  )
}
