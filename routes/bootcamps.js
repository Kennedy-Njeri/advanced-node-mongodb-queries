const express = require('express')
const router = new express.Router()
const Bootcamp = require('../models/Bootcamp')


router.post('/api/v1/bootcamps', async (req, res) => {
    //console.log(req.body)
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({ success: true, data: bootcamp })
    } catch (e) {
        res.status(400).json({ success: false })
    }

})

router.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'})
})


router.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show all bootcamps ${req.params.id}`})
})


router.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`})
})


router.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`})
})




module.exports = router
