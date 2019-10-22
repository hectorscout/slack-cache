const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getProjects = (request, response) => {
  console.log('getting projects')
  pool.query('SELECT * FROM projects', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addProject = (request, response) => {
  const { name, description } = request.body

  pool.query('INSERT INTO projects (name, description) VALUES ($1, $2)', [name, descriptiong], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Project added.' })
  })
}

app
  .route('/projects')
  // GET endpoint
  .get(getProjects)
  // POST endpoint
  .post(addProject)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
