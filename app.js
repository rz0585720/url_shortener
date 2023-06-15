const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000
// template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true })) // 要記得在調用路由前加入
app.use(express.static('public'))
app.use(routes)

// start server
app.listen(port, () => {
	console.log(`Express is running on http://localhost:${port}`)
})
