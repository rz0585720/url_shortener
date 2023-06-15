const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  Url.find()
    .lean()
    .then(urls => res.render('detail', { urls }))
    .catch(error => console.error(error))
})

module.exports = router