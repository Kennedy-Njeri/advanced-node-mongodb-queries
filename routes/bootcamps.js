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

router.get('/api/v1/bootcamps', async (req, res) => {

    try {

        const bootcamps = await Bootcamp.find()

        res.status(200).json({ success: true, data: bootcamps })

    } catch (e) {

        res.status(500).json({ success: false })
    }

})


router.get('/api/v1/bootcamps/:id', async (req, res) => {

    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: bootcamp })

    } catch (e) {

        res.status(400).json({ success: false })
    }

})


router.put('/api/v1/bootcamps/:id', async (req, res) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: bootcamp })

    } catch (e) {
        res.status(400).json({ success: false })
    }

    
})


router.delete('/api/v1/bootcamps/:id', async (req, res) => {

    try {

        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: bootcamp })

    } catch (e) {

        res.status(400).json({ success: false })

    }

})




module.exports = router
