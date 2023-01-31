const {Intern} = require('../lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {
        it('new intern with school', () => {
            const intern = new Intern('name', 'id', 'email', 'school')
            expect(typeof intern.school).toMatch('string')
            expect(typeof intern.school).not.toMatch('undefined')
        })
        describe('getSchool() method', () => {
            it('github username', () => {
                const intern = new Intern('name', 'id', 'email', 'github')
                expect(typeof intern.getSchool()).toMatch('string')
            })
        })
    })
})