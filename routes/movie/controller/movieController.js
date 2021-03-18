const Movie = require("../model/Movie.js")

module.exports = {
    createMovie: async (req, res) => {
        try {
            let newMovie = new Movie({
                movie: req.body.movie,
            })
            let savedMovieTitle = await newMovie.save()

            res.json({
                data: savedMovieTitle,
            })
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    },

    getAllMovies: async (req, res) => {
        try {
            let allMovies = await Movie.find({})

            res.json({
                data: allMovies,
            })
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    },

    deleteMovie: async (req, res) => {
        try {
            let deletedMovie = await Movie.findByIdAndDelete({ _id: req.params.id, })
            res.json({
                data: deletedMovie,
            })
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    },


    updateMovie: async (req, res) => {
        try {
            let updatedMovie = await Movie.findByIdAndUpdate(
                {
                    _id: req.params.id,
                },
                {
                    movie: req.body.movie,
                },
                {
                    new: true
                })
            res.json({
                data: updatedMovie,
            })
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    },
}