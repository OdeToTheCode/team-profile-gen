const inquierer = require('inquirer')
const fs = require('fs')
const teamGen = require('../teamGen')
const Employee = require('./Employee')

const internPrompts = [
  {
    type: 'prompt',
    name: 'name',
    message: 'What is the name of the intern?'
  },
  {
    type: 'prompt',
    name: 'id',
    message: 'What is the intern id numbeer?'
  },
  {
    type: 'prompt',
    name: 'email',
    message: 'What is the email of the intern?'
  },
  {
    type: 'prompt',
    name: 'school',
    message: 'What is the school of the intern?'
  }
]

class Intern extends Employee {
  constructor(name, id, email, school) {
    super (name, id, email)
    this.school = school
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return 'Intern'
  }
}

function collectTeamInfo(info) {
  const intern = new Intern(info.name, info.id, info.email, info.school)
  return intern
}

module.exports = {
  Intern,
  collectTeamInfo,
  internPrompts
}