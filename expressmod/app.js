const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./util/path')
const app = express();
app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});







app.listen(3000)