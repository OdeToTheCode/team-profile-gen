const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamMembers = []
let complete = false

async function start() {
  // Ask the user for Manager information and wait for the response
  const managerData = await inquirer.prompt(Manager.managerPrompts)

  // Store the Manager information
  teamMembers.push(Manager.collectTeamInfo(managerData))

  // Start adding more team members
  await addTeamMember()
}

async function addTeamMember() {
  // Keep asking the user to add team members until they choose "team complete"
  if (!complete) {
    // Ask the user to choose a team member type
    const teamType = await inquirer.prompt([{
      type: 'list',
      name: 'teamSelect',
      choices: ['engineer', 'intern', 'team complete'],
      message: 'Which type of team member would you like to add?'
    }])

    switch (teamType.teamSelect) {
      case 'engineer':
        // Ask for Engineer information and store it
        const engineerData = await inquirer.prompt(Engineer.engineerPrompts)
        teamMembers.push(Engineer.collectTeamInfo(engineerData))
        break

      case 'intern':
        // Ask for Intern information and store it
        const internData = await inquirer.prompt(Intern.internPrompts)
        teamMembers.push(Intern.collectTeamInfo(internData))
        break

      case 'team complete':
        // Set the complete flag and stop asking for more team members
        complete = true
    }

    // Keep asking for more team members
    await addTeamMember()
  } else {
    // Generate the HTML once all team members have been added
    generateHTML()
  }
}

function generateHTML() {
  let html = ` <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
  </head>
  <body>
      <header class="text-center text-light bg-danger py-5">
          <div class="container-fluid">
              <h1>My Team</h1>
          </div>
      </header>
      <main class="d-flex justify-content-center flex-wrap pt-5">`

  teamMembers.forEach(member => {
    html += `
      <div class="card mx-2 col-2">
        <div class="card-header bg-primary text-light">
            <h4 class="card-title">${member.getName()}</h4>
            <h4 class="card-text">${member.getRole()}</h4>
        </div>
        <div class="card-body my-3">
            <ul class="list-group">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: 
                    <a href="mailto:${member.getEmail()}">
                      ${member.getEmail()}
                    </a>
                </li>`
    switch (member.getRole()) {
      case 'Manager':
        html += `<li class="list-group-item">Office Number: ${member.officeNumber}</li>`
        break
      case 'Engineer':
        html += `<li class="list-group-item">Github: 
                  <a href="https://github.com/${member.github}" target="_blank">
                    ${member.github}
                  </a>
                </li>`
        break
      case 'Intern':
        html += `<li class="list-group-item">School: ${member.school}</li>`
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

  fs.writeFile('./dist/index.html', html, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Team page created successfully!')
    }
  })
}

start()