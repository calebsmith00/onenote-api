import express, { Router } from 'express'

const router = express.Router()

router.get('/test', (req, res) => {
    res.send("Hello tester.")
})

export default router