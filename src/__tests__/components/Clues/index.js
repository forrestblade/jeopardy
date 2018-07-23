import Clue from '../../../components/Clue'
import { clue, category } from '../../../testData'
import { expect } from 'code'
import { shallow } from 'enzyme'
import React from 'react'
import sinon from 'sinon'

describe('Given Clues Component', () => {
  let toggleReveal = sinon.spy()

  function requiredProps (overrides) {
    let props = {
      toggleReveal,
      clue,
      category,
      reveal: 0
    }

    return {
      ...props,
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<Clue {...props} />)
  }

  it('should exist with a specifying className', () => {
    const component = renderComponent()

    expect(component.is('main.clue')).to.be.true()
  })

  it('should call toggleReveal when a Link is clicked', () => {
    const component = renderComponent()

    component.find('main').simulate('click')
    sinon.assert.calledOnce(toggleReveal)
  })

  it('should contain an h4 with text', () => {
    const component = renderComponent()
    expect(component.find('h4').text()).to.equal(clue.value.toString())
  })

  it('should contain an h5 with text', () => {
    const component = renderComponent()

    expect(
      component
        .find('h5')
        .first()
        .text()
    ).to.equal(clue.question.toString())
  })

  it('should return "unknown" when no clues.value is given', () => {
    const component = renderComponent(requiredProps({clue: undefined}))

    expect(component.find('h4').text()).to.equal('unknown')
  })


  it('should contain an h6 with an answer when revealed', () => {
    const component = renderComponent()

    expect(component.find('h6').text()).to.equal(clue.answer.toString())
  })

  it('should contain an span when not revealed', () => {
    const component = renderComponent(requiredProps({ reveal: undefined }))

    expect(component.find('span').exists()).to.be.true()
  })
})
