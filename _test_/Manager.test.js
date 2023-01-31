const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')

describe('Manager', () => {
  let manager

  beforeEach(() => {
      manager = new Manager('Bob Builder', '1212', 'BobBuilder@example.com', '001')
  })

  describe('creates an employee object with the correct properties', () => {
      it('has correct name', () => {
          expect(manager).toHaveProperty('name', 'Bob Builder')
      })
      it('has correct id', () => {
          expect(manager).toHaveProperty('id', '1212')
      })
      it('has correct email', () => {
          expect(manager).toHaveProperty('email', 'BobBuilder@example.com')
      })
      it('has correct github', () => {
        expect(manager).toHaveProperty('officeNumber', '001')
      })
  })

  describe('getName() method', () => {
      it('returns the correct name', () => {
          expect(manager.getName()).toBe('Bob Builder')
      })
  })

  describe('getId() method', () => {
      it('returns the correct id', () => {
          expect(manager.getId()).toBe('1212')
      })
  })

  describe('getEmail() method', () => {
      it('returns the correct email', () => {
          expect(manager.getEmail()).toBe('BobBuilder@example.com')
      })
  })

  describe('getGithub() method', () =>{
    it('returns the correct github', () =>{
      expect(manager.getOfficeNumber()).toBe('001')
    })
  })

  describe('getRole() method', () => {
      it('returns the correct role', () => {
          expect(manager.getRole()).toBe('Manager')
      })
  })
})
