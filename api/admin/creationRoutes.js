import express, { Router } from 'express'
import { createTemplate } from '../../requests.js'

const router = express.Router()

router.post('/:userId/section/:sectionId/create/template', async(req, res) => {
    const response = await createTemplate({
        userId: req.params.userId,
        sectionId: req.params.sectionId,
        requestBody: "<html><head><title>Test</title></head><body><h1>Test</h1></body></html>"
    })

    res.send("Hello world")
})

export default router