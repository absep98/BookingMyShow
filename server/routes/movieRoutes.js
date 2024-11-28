const express = require('express');
const router = express.Router();
const Movie = require('../model/movieModel');

router.post('/add-movie', async(req, res) => {
    try {
        const newMovie = await Movie(req.body);
        await newMovie.save();
        console.log(newMovie);
        res.send({
            success: true,
            message: 'New Movie has been added..!'
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});

router.get('/get-all-movies', async(req, res) => {
    try {
        const allMovies = await Movie.find();
        res.send({
            success: true,
            message: 'All movies have been fetched..',
            data: allMovies
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});

router.get('/movie/:id', async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.send({
            success: true,
            message: 'Movie fetched successfully...',
            data: movie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});


router.put('update-movie', async(req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.body.movieId);
        res.send({
            success: true,
            message: 'Movie has been updated..!'
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

router.put('/delete-movie', async(req, res) => {
    try {
        await Movie.findByIdAndDelete(req.body.movieId);
        res.send({
            success: true,
            message: 'Movie has been deleted..!'
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;