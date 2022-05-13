import express, { Router } from 'express'
import { getUsers } from '../../requests.js'

const router = express.Router()

router.get('/retrieve-users', (req, res) => {
    getUsers()
        .then(response => res.json(response.value))
        .catch(err => res.json({error: JSON.stringify(err)}))
})

export default router