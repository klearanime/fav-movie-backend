var express = require('express');
var router = express.Router();

var { 
    createMovie,
    getAllMovies,
    deleteMovie,
    updateMovie,
} = require("./controller/movieController")

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/get-all-movies", getAllMovies)
router.post("/create-movie", createMovie)
router.delete("/delete-movie/:id", deleteMovie)
router.put("/update-movie/:id", updateMovie)

module.exports = router;