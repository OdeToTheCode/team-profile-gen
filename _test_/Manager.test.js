const {Manager} = require('../lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('getOfficeNumber() method', () => {
            const manager = new Manager('name', 'id', 'email', 'officeNumber')
            expect(typeof manager.getOfficeNumber()).toMatch('string')
        })
    })

    describe('getRole() method', () => {
        it('should return "Manager"', () => {
            const manager = new Manager('name', 'id', 'email', 'officeNumber')
            expect(manager.getRole()).toMatch('Manager')
        })
    })
})