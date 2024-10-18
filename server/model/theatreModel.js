const mongoose = require('mongoose');
const theatreSchema = new mongoose.Schema({
    theatreName: {


        type: String,
        required: true
    },
    theatreAddress: {
        type: String,
        required: true
    },

    theatreCity: {
        type: String,
        required: true
    },
    theatreState: {
        type: String,
        required: true
    },
    theatreZip: {
        type: String,
        required: true
    },
    theatrePhone: {
        type: String,
        required: true
    },
    theatreEmail: {
        type: String,
        required: true
    },
    theatreImage: {
        type: String,
        required: true
    },
    theatreDescription: {
        type: String,
        required: true
    },

    theatreRating: {
        type: String,
        required: true
    },
    theatreCapacity: {
        type: String,
        required: true
    },
    theatreScreen: {
        type: String,
        required: true
    },
    theatreShow: {
        type: String,
        required: true
    },


    theatrePrice: {
        type: String,
        required: true
    },
    theatreDate: {
        type: String,
        required: true
    },
    theatreTime: {
        type: String,
        required: true
    },
    theatreStatus: {
        type: String,
        required: true
    },
    theatreType: {
        type: String,
        required: true
    },

    theatreSeat: {
        type: String,
        required: true
    },
    