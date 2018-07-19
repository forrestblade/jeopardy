import { Category } from '../../../components/Category'
import { clues, category } from '../../../data'
import { expect } from 'code'
import { shallow } from 'enzyme'
import React from 'react'
import sinon from 'sinon'

describe('Given Categories Component', () => {
  let setClues = sinon.spy()
  function requiredProps (overrides) {
    let props = {
      setClues,
      clues,
      category
    }

    return {
      ...props,
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<Category {...props} />)
  }

  it('should exist with a specifying className', () => {
    const component = renderComponent()

    expect(component.is('main.Category')).to.be.true()
  })

  it('should contain a h4 that has the text "home"', () => {
    const component = renderComponent()

    expect(component.find('h4').text()).to.equal('Home')
  })

  it('should contain a Link', () => {
    const component = renderComponent()

    expect(component.find('Link').length).to.equal(1)
  })

  it('should render clues when prop is given', () => {
    const component = renderComponent()

    expect(component.find('Connect(Clue)').exists()).to.be.true()
  })

  it('should render a span when no clues are passed', () => {
    const component = renderComponent(requiredProps({ clues: undefined }))

    expect(component.find('Connect(Clue)').exists()).to.not.be.true()
  })
})
