const express = require('express');
const router = express.Router();
const Register = require('../controllers/User/register');
const Login = require('../controllers/User/login');
const availableUsername = require('../controllers/User/availableUsername');
const availableEmail = require('../controllers/User/availableEmail');
const checkConfirmToken = require('../controllers/User/checkConfirmToken');
const sendResetEmail = require('../controllers/User/sendResetEmail');
const resetPassword = require('../controllers/User/resetPassword');
const getMovies = require('../controllers/Library/getMovies');
const getMovieData = require('../controllers/Library/getMovieData');
const streaming = require('../controllers/Library/streaming');
const getSimilarMovies = require('../controllers/Library/getSimilarMovies')

router.post('/login', Login);
router.post('/register', Register);
router.post('/availableEmail',availableEmail);
router.post('/availableUsername',availableUsername);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);
router.post('/getMovies', getMovies);
router.post('/getMovieData',getMovieData);
router.get('/streaming/:hash',streaming);
router.post('/getSimilarMovies',getSimilarMovies);

module.exports = router;