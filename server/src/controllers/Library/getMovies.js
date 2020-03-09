const getAllMovies = require('./getAllMovies');
const getFilteredMovies = require('./getFilteredMovies');
const getMoviesByName = require('./getMoviesByName');
const tools = require('../../tools/index');

getMovies = async (req, res) => {
    const filter = req.body.filter;
    if(tools.isSort(filter.sortBy) && tools.isCategory(filter.category) && tools.isTitle(filter.title) && tools.isPage(filter.page)){
        if(filter.title !== null)
        {
            const data = await getMoviesByName(filter);
            res.send(data);
        }
        else
        {
            if(filter.category === null && filter.sortBy === null){
                const data = await getAllMovies(filter);
                res.send(data);
            }
            else{
                const data = await getFilteredMovies(filter);
                res.send(data);
            }
        }
    }
    else{
        res.send([]);
    }
        
}
module.exports = getMovies;