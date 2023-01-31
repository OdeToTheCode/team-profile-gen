const Engineer = require('../lib/Engineer')
const inquierer = require('inquirer')

describe('Engineer class', () => {
  let engineer

  beforeEach(() => {
      engineer = new Engineer('Bob Builder', '1212', 'BobBuilder@example.com', 'BobGithub')
  })

  describe('creates an employee object with the correct properties', () => {
      it('has correct name', () => {
          expect(engineer).toHaveProperty('name', 'Bob Builder')
      })
      it('has correct id', () => {
          expect(engineer).toHaveProperty('id', '1212')
      })
      it('has correct email', () => {
          expect(engineer).toHaveProperty('email', 'BobBuilder@example.com')
      })
      it('has correct github', () => {
        expect(engineer).toHaveProperty('github', 'BobGithub')
      })
  })

  describe('getName() method', () => {
      it('returns the correct name', () => {
          expect(engineer.getName()).toBe('Bob Builder')
      })
  })

  describe('getId() method', () => {
      it('returns the correct id', () => {
          expect(engineer.getId()).toBe('1212')
      })
  })

  describe('getEmail() method', () => {
      it('returns the correct email', () => {
          expect(engineer.getEmail()).toBe('BobBuilder@example.com')
      })
  })

  describe('getGithub() method', () =>{
    it('returns the correct github', () =>{
      expect(engineer.getGithub()).toBe('BobGithub')
    })
  })

  describe('getRole() method', () => {
      it('returns the correct role', () => {
          expect(engineer.getRole()).toBe('Engineer')
      })
  })
})