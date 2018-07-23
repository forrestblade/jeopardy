import App from '../../components/'
import { categories } from '../../testData'
import { expect } from 'code'
import { shallow } from 'enzyme'
import React from 'react'
import sinon from 'sinon'

const setCategories = sinon.spy()
const pickCategory = sinon.spy()

describe('Given App', () => {
  function requiredProps (overrides) {
    let props = {
      setCategories,
      pickCategory,
      categories
    }

    return {
      ...props,
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<App {...props} />)
  }

  it('should exists with a specifying className', () => {
    const component = renderComponent()

    expect(component.is('main.App')).to.be.true()
  })

  it('should contain a title', () => {
    const component = renderComponent()

    expect(component.find('h2').text()).to.equal('Jeopardy!')
  })

  it('should create the correct number of links', () => {
    const component = renderComponent()

    expect(component.find('Link').length).to.equal(categories.length)
  })

  it('should title the links according to their names', () => {
    const component = renderComponent()

    component.find('Link h4').forEach((linkTitle, index) => {
      expect(linkTitle.text()).to.equal(categories[index].title)
    })
  })

  it('should call pickCategory when a Link is clicked', () => {
    const component = renderComponent()

    component
      .find('Link')
      .first()
      .simulate('click')
    sinon.assert.calledOnce(pickCategory)
  })
})
