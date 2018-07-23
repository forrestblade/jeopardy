import { expect } from 'code'
import { fetchCategories, fetchClues } from '../../services/'
import 'isomorphic-fetch'
import sinon from 'sinon'

describe('Given a JService', () => {
  let fetchStub

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('When the service is called', () => {
    it('should call fetch', () => {
      fetchStub.resolves({ json: sinon.spy() })
      fetchCategories()
      sinon.assert.calledOnce(fetchStub)
      sinon.assert.calledWithExactly(
        fetchStub,
        'http://jservice.io/api/categories?count=20'
      )
    })
  })

  describe('When the fetch is successful', () => {
    it('should return the mock data', () => {
      const mockData = [
        { name: 'value1' },
        { name: 'value2' },
        { name: 'value3' }
      ]
      fetchStub.resolves({ json: sinon.stub().returns(mockData) })
      fetchCategories()
        .then(data => expect(data).to.equal(mockData))
        .catch(e => expect(e).to.be.undefined())
    })
  })

  describe('When the fetch fails', () => {
    it('should return an error', () => {
      fetchStub.rejects({ json: 'bork bork' })
      fetchCategories()
        .then(data => expect(data).to.be.undefined())
        .catch(e => expect(e).to.not.equal(undefined))
    })
  })
})

describe('Given a JService Clues', () => {
  let fetchStub
  let mockId = 832678

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('When the service is called', () => {
    it('should call fetch', () => {
      fetchStub.resolves({ json: sinon.spy() })
      fetchClues(mockId)
      sinon.assert.calledOnce(fetchStub)
      sinon.assert.calledWithExactly(
        fetchStub,
        `http://jservice.io/api/clues?category=${mockId}`
      )
    })
  })

  describe('When the fetch is successful', () => {
    it('should return the mock data', () => {
      const mockData = [
        { name: 'value1' },
        { name: 'value2' },
        { name: 'value3' }
      ]
      fetchStub.resolves({ json: sinon.stub().returns(mockData) })
      fetchClues()
        .then(data => expect(data).to.equal(mockData))
        .catch(e => expect(e).to.be.undefined())
    })
  })

  describe('When the fetch fails', () => {
    it('should return an error', () => {
      fetchStub.rejects({ json: 'bork bork' })
      fetchClues()
        .then(data => expect(data).to.be.undefined())
        .catch(e => expect(e).to.not.equal(undefined))
    })
  })
})
