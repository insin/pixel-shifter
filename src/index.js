import React from 'react'
import t from 'prop-types'

const PixelShifter = ({ x = 0, y = 0, reason, children }) => (
  <div
    style={{
      transform: `translate(${x}px, ${y}px)`
    }}
  >
    {children}
  </div>
)

PixelShifter.propTypes = {
  x: t.number,
  y: t.number,
  reason: t.string.isRequired,
  children: t.node.isRequired,
}

export default PixelShifter
