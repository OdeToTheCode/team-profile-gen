const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')
const inquierer = require('inquirer')

describe('Intern class', () => {
  let intern

  beforeEach(() => {
      intern = new Employee('Bob Builder', '1212', 'BobBuilder@example.com', 'UofM')
  })

  describe('creates an employee object with the correct properties', () => {
      it('has correct name', () => {
          expect(intern).toHaveProperty('name', 'Bob Builder')
      })
      it('has correct id', () => {
          expect(intern).toHaveProperty('id', '1212')
      })
      it('has correct email', () => {
          expect(intern).toHaveProperty('email', 'BobBuilder@example.com')
      })
      it('has correct github', () => {
        expect(intern).toHaveProperty('school', 'UofM')
      })
  })

  describe('getName() method', () => {
      it('returns the correct name', () => {
          expect(intern.getName()).toBe('Bob Builder')
      })
  })

  describe('getId() method', () => {
      it('returns the correct id', () => {
          expect(intern.getId()).toBe('1212')
      })
  })

  describe('getEmail() method', () => {
      it('returns the correct email', () => {
          expect(intern.getEmail()).toBe('BobBuilder@example.com')
      })
  })

  describe('getGithub() method', () =>{
    it('returns the correct github', () =>{
      expect(intern.getSchool()).toBe('UofM')
    })
  })

  describe('getRole() method', () => {
      it('returns the correct role', () => {
          expect(intern.getRole()).toBe('Intern')
      })
  })
})