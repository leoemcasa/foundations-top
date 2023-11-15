const express = require('express')
const router = express.Router()

router.get("/new", (req, res) => {
    res.render("users/new")
  })

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ name: req.body.firstName })
        res.redirect(`/users/${users.length -1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.id })
    }
})

router.get("/new", (req, res) => {
    res.render('users/new', { firstName: 'Test' })
})

router.get("/test", (req, res) => {
    res.render('users/test')
})

router.get("/usrtest", (req, res) => {
    res.render('test')
})

router
.route('/:id')
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get user id ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Updt User Id ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`delete user id ${res.params.id}`)
  })

const users = [{ name: 'Kyle' }, { name: 'Sally' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router