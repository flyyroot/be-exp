const express = require('express')
const {getTrack,setTrack,updateTrack,deleteTrack} = require('../controller/trackController')
const router = express.Router()

router.get('/',getTrack)

router.post('/',setTrack)

router.delete('/:id',deleteTrack)

router.put('/:id',updateTrack)

module.exports = router