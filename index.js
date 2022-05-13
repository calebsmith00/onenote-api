import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3001
import adminRetrieve from './api/admin/retrievalRoutes.js'
import userRetrieve from './api/user/userRetrieve.js'
import creationRoutes from './api/admin/creationRoutes.js'

app.use(cors({
    origin: "http://localhost:3001" 
}))

app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', (req, res) => {
    res.send("Hello! You've reached the OneNote API. Wait! You're not supposed to be here...")
})

// API routes
app.use('/api/admin', adminRetrieve)
app.use('/api/admin', creationRoutes)
app.use('/api/user', userRetrieve)


app.listen(port, () => {
    console.log(`Sample server running on port ${port}`)
})