import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import PixelShifter from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders a div with a suitable transform style', () => {
    let element = <PixelShifter x={1} y={2} reason="Testing">
      <h1>Test</h1>
    </PixelShifter>

    render(element, node, () => {
      let div = node.querySelector('div')
      expect(div.style.transform).toEqual('translate(1px, 2px)')
    })
  })
})
