const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamMembers = []
let complete = false

async function open() {
  const info = await inquirer.prompt(Manager.managerPrompts)
  teamMembers.push(Manager.collectTeamInfo(info))
  addTeamQuestion()
}

async function addTeamQuestion() {
  if(!complete) {
    const response = await inquirer.prompt([
      {
        type: 'list',
        message: 'What team member would you like to add?',
        choices: ['engineer', 'intern', 'team complete'],
        name: 'teamSelect'
      }
    ])
    switch(response.teamSelect) {
      case 'engineer':
        const engineerInfo = await inquirer.prompt(Engineer.engineerPrompts)
        teamMembers.push(Engineer.collectTeamInfo(engineerInfo))
        break
      case 'intern':
        const internInfo = await inquirer.prompt(Intern.internPrompts)
        teamMembers.push(Intern.collectTeamInfo(internInfo))
        break
      case 'team complete':
        complete = true
    }
    addTeamQuestion()
  } else {
    generateHTML()
  }
}

function generateHTML() {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
  </head>

  <body>

      <header class="container-fluid text-center text-light bg-danger py-5">
          <h1>My Team</h1>
       </header>

      <main class="container-fluid pt-5 d-flex justify-content-center flex-wrap">`

      teamMembers.forEach(member => {
        html += `
      <div class="card col-2 mx-2">
      <div class="card-header bg-primary text-light">
          <h4 class="card-title">${member.getName()}</h4>
          <h4 class="card-text">${member.getRole()}</h4>
      </div>

      <div class="card-body my-3">
          <ul class="list-group">
              <li class="list-group-item">ID: ${member.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
              <li class="list-group-item">`
      
      switch (member.getRole()) {
          case 'Manager':
              html += `Office Number: ${member.officeNumber}</li>`
              break
          case 'Engineer':
              html += `Github: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>`
              break
          case 'Intern':
              html += `School: ${member.school}</li>`
              break
      }
      html += `
              </ul>
          </div>
      </div>`
  })
  html += `
      </main>
  </body>
  </html>`

  fs.writeFile('./dist/index.html', html, err => err ? console.log(err) : console.log('Success'))

}

open()