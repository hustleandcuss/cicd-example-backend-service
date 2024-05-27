const express = require('express')
const router = express.Router()

router.get('/healthcheck', (req, res) => {
  res
    .status(200)
    .type('application/json')
    .json({ status: 'OK' })
})

router.get('/courses', (req, res) => {
  res
    .status(200)
    .type('application/json')
    .json([
      { id: 1, title: 'Frontend Development - JS and React' },
      { id: 2, title: 'Backend Development - Java' },
      { id: 3, title: 'Backend Development - .NET' },
      { id: 4, title: 'Backend Developemnt - NODE.js' },
      { id: 5, title: 'DevOps' },
      { id: 6, title: 'Frontend Development - HTML and CSS' },
      { id: 7, title: 'CI/CD Processes' },
      { id: 8, title: 'Cloud Services - AWS' }
    ])
})

router.get('/students', (req, res) => {
  res
    .status(501)
    .type('application/json')
    .json([
      { name: 'THIS IS A BUG!' }
    ])

  //   TODO: Enable this when ready!
//  res
//    .type('application/json')
//    .status(200)
//    .json([
//      { id: 1, name: 'Jane Doe' },
//      { id: 2, name: 'Olivia Lennerö' },
//      { id: 3, name: 'John Doe' }
//    ])
})

module.exports = router
