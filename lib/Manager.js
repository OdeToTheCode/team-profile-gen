const Employee = require('./Employee')
const inquirer = require('inquirer')
const managerPrompts = [
  {
    type: 'prompt',
    name: 'name',
    message: 'What is the name of the manager?'
  },
  {
    type: 'prompt',
    name: 'id',
    message: 'What is the manager id numbeer?'
  },
  {
    type: 'prompt',
    name: 'email',
    message: 'What is the email of the manager?'
  },
  {
    type: 'prompt',
    name: 'office',
    message: 'What is the office number for the manager?'
  }
]

class Manager extends Employee{
  constructor(name, id, email, office) {
    super (name, id, email)
    console.log(office)
    this.officeNumber = office
  }

  getOfficeNumber() {
    return this.officeNumber
  }

  getRole() {
    return 'Manager'
  }
}

function collectTeamInfo(info) {
  const manager = new Manager(info.name, info.id, info.email, info.office)
  return manager
}

module.exports = {
  Manager,
  collectTeamInfo,
  managerPrompts
}