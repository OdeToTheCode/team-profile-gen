const {Engineer} = require('../lib/Engineer')

describe('Engineer', () => {
    describe('getGithub() method', () => {
        it('github username', () => {
            const engineer = new Engineer('name', 'id', 'email', 'github')
            expect(typeof engineer.getGithub()).toMatch('string')
        })
    })

    describe('getRole() method', () => {
        it('should return the role of the engineer', () => {
            const engineer = new Engineer('name', 'id', 'email', 'github')
            expect(engineer.getRole()).toBe('Engineer')
        })
    })
})