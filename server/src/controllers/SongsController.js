const {Song} = require('../models')

module.exports = {
    async index (req,res) {
        try{
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        }
        catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to fetch the songs'
            })
        }
    },
    async post (req,res) {
        try{
            const songs = await Song.create(req.body)
            res.send(songs)
        }
        catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to save     the songs'
            })
        }
    },
    async show (req,res) {
        try{
            const song = await Song.findById(req.params.songId)
            res.send(song)
        }
        catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to fetch the songs'
            })
        }
    },
    async put (req,res) {
        try{
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to update the songs'
            })
        }
    }
}