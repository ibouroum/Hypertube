const  unirest = require('unirest')
getMovieData = (req, res) => {
    const imdb = req.body.imdb;
    const url =  unirest('GET','https://movie-database-imdb-alternative.p.rapidapi.com/')
    return new Promise((resolve, reject) => (
    url.query({
        "i": imdb,
        "r": "json"
    }),
    url.headers({
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "db3470b86dmsh44414db70092568p12b435jsnd73f9b17a0d9"
    }),
    url.end((response) => {
        //console.table(response.body)
                res.send(response.body);
        })
    ))
    
}
module.exports = getMovieData;