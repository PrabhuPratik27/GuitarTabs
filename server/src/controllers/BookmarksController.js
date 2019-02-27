const {Bookmark} = require('../models')

module.exports = {
    async index (req,res) {
        try{
            const {songId,userId} = req.query
            
            var bookmark = await Bookmark.findAll({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })

            bookmark = bookmark[1]

            console.log(bookmark);
            

            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to fetch the bookmarks'
            })
        }
    },
    async post (req,res) {
        try{
        const {songId,userId} = req.body

        console.log(songId,userId)    

        var bookmark = await Bookmark.findAll({
            where: {
              SongId: songId,
              UserId: userId
            }
        })

        //bookmark = bookmark[1]

        console.log(bookmark)

        if (bookmark) {
            return res.status(400).send({
                'error' : 'The bookmark already exists'
            })
        }
            
        const newBookmark = await Bookmark.create(req.body)
        res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to create the bookmark'
        })
    }
    },
    async delete (req,res) {
        try{
            const {bookmarkId} = req.params
            
            const bookmark = await Bookmark.findById(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error : 'An error has occured trying to delete the bookmarks'
            })
        }
    }
}