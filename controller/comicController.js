const ComicQueries = require('../queries/comicQueries');


module.exports.createComic = (req, res, next) => {
    ComicQueries.createComic(req.body)
    .then((comic) => {
        return res.json(comic)
    }).catch((err) => {
        return next(err);
    })
}

module.exports.getComic = (req, res, next) => {
    if (req.query.id) {
        ComicQueries.findComicById(req.query.id)
        .then((comic) => {
            return res.json(comic)
        }).catch((err) => {
            return next(err);
        })
    } else {
        ComicQueries.findAllComics()
        .then((comics) => {
            return res.json(comics)
        }).catch((err) => {
            return next(err);
        })
    }
    
}

module.exports.deleteComic = (req, res, next) => {
    ComicQueries.deleteComicById(req.params.id)
    .then(() => {
        return res.json({
            success: true,
            message: "successfully deleted comic"
        })
    }).catch((err)=> {
        return next(err)
    })
}

module.exports.deleteComicByName = (req, res, next) => {
    ComicQueries.deleteComicByNum(req.params.num)
    .then(() => {
        return res.json({
            success: true,
            message: "successfully deleted comic"
        })
    }).catch((err)=> {
        return next(err)
    })
}

module.exports.favoriteComicIds = (req, res, next) => {

    ComicQueries.favoriteComicIds()
    .then((comicIds)=>{
        console.log(comicIds)
        return res.send(comicIds)
    }).catch((err)=> {
        return next(err)
    })

}