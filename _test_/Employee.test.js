// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

const Employee = require('../lib/Employee')

describe('Employee class', () => {
    let employee

    beforeEach(() => {
      employee = new Employee('Bob Builder', '1212', 'BobBuilder@example.com')
    })

    describe('creates an employee object with the correct properties', () => {
        it('has correct name', () => {
            expect(employee).toHaveProperty('name', 'Bob Builder')
        })
        it('has correct id', () => {
            expect(employee).toHaveProperty('id', '1212')
        })
        it('has correct email', () => {
            expect(employee).toHaveProperty('email', 'BobBuilder@example.com')
        })
    })

    describe('getName() method', () => {
        it('returns the correct name', () => {
            expect(employee.getName()).toBe('Bob Builder')
        })
    })

    describe('getId() method', () => {
        it('returns the correct id', () => {
            expect(employee.getId()).toBe('1212')
        })
    })

    describe('getEmail() method', () => {
        it('returns the correct email', () => {
            expect(employee.getEmail()).toBe('BobBuilder@example.com')
        })
    })

    describe('getRole() method', () => {
        it('returns the correct role', () => {
            expect(employee.getRole()).toBe('Employee')
        })
    })
})