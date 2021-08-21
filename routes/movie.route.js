const router = require("express").Router();
const { route } = require("../app");
const MovieModel = require("../models/Movie.model");

/* GET home page */

router.get("/", (req, res, next) => res.render("index"));

router.get("/movies-list", (req, res, next) => {
  MovieModel.find()
    .then((allMoviesDB) => {
      console.log(allMoviesDB);
      res.render("movies-list", { movies: allMoviesDB });
    })
    .catch((error) => console.log("error", error));
});

router.get("/movies-detail/:movieId", (req, res, next) => {
  console.log(req.params.movieId);
  MovieModel.findById(req.params.movieId)
    .then((movieFromDB) => {
      console.log(movieFromDB);
      res.render("movie-detail", { movieDetail: movieFromDB });
    })
    .catch((error) => console.log("error", error));
});

module.exports = router;
