const asyncHandler = require('express-async-handler')
const mytrack = require('../models/mytrack')

const getTrack = asyncHandler(async(req,res)=>{
    const cariIsi = await mytrack.find()
    res.status(200).json(cariIsi)
    console.log(cariIsi)
})

const setTrack = asyncHandler(async(req,res)=>{
    const isikan = await mytrack.create({
        judul_lagu : req.body.judul_lagu,
        penyanyi : req.body.penyanyi,
        penerbit : req.body.penerbit
    })
    res.status(200).json(isikan)
    console.log(isikan)
})

const updateTrack = asyncHandler(async(req,res)=>{
    const find_id = await mytrack.findById(req.params.id)
    if(!find_id){
        res.status(400).json({message:'ID TIDAK DITEMUKAN'})
    } 
    const update = await mytrack.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json(update)
})

const deleteTrack =  asyncHandler(async(req,res)=>{
    const find_id = await mytrack.findById(req.params.id)
    if(!find_id){
        res.status(400).json({message:'ID TIDAK DITEMUKAN'})
    } 
    find_id.remove()
    res.status(200).json(find_id)
    // delete all
    // const find_id = await mytrack.remove({})
    // res.status(200).json(find_id)
})

module.exports = {
    getTrack,
    setTrack,
    updateTrack,
    deleteTrack
}