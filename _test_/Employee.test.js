// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

const Employee = require('../lib/Employee')

describe('Employee class', () => {
    let test

    beforeEach(() => {
      test = new Employee('Bob Builder', '1212', 'BobBuilder@example.com')
    })

    describe('creates an employee object with the correct properties', () => {
        it('has correct name', () => {
            expect(test).toHaveProperty('name', 'Bob Builder')
        })
        it('has correct id', () => {
            expect(test).toHaveProperty('id', '1212')
        })
        it('has correct email', () => {
            expect(test).toHaveProperty('email', 'BobBuilder@example.com')
        })
    })

    describe('getName() method', () => {
        it('returns the correct name', () => {
            expect(test.getName()).toBe('Bob Builder')
        })
    })

    describe('getId() method', () => {
        it('returns the correct id', () => {
            expect(test.getId()).toBe('1212')
        })
    })

    describe('getEmail() method', () => {
        it('returns the correct email', () => {
            expect(test.getEmail()).toBe('BobBuilder@example.com')
        })
    })

    describe('getRole() method', () => {
        it('returns the correct role', () => {
            expect(test.getRole()).toBe('Employee')
        })
    })
})