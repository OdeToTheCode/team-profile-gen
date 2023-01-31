const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./Employee')

const engineerPrompts = [
  {
    type: 'prompt',
    name: 'name',
    message: 'What is the name of the employee?'
  },
  {
    type: 'prompt',
    name: 'id',
    message: 'What is the emplyee id numbeer?'
  },
  {
    type: 'prompt',
    name: 'email',
    message: 'What is the email of the employee?'
  },
  {
    type: 'prompt',
    name: 'github',
    message: 'What is the github username for the engineer?'
  }
]

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }

  getGithub() {
    return this.github
  }

  getRole() {
    return 'Engineer'
  }
}

function collectTeamInfo(info) {
  const engineer = new Engineer(info.name, info.id, info.email, info.github)
  return engineer
}

module.exports = {
  Engineer,
  collectTeamInfo,
  engineerPrompts
}