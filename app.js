const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

// template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// routes settings
app.get('/', (req, res) => {
	res.render('index')
})

// start server
app.listen(port, () => {
	console.log(`Express is running on http://localhost:${port}`)
})