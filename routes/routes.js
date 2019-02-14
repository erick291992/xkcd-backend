var router = require('express').Router();

var comicController = require('../controller/comicController');

// comic routes
router.get('/favoriteComics', comicController.getComic);
router.get('/favoriteComicIds', comicController.favoriteComicIds);
router.post('/addFavorite', comicController.createComic);
// router.delete('/deleteComic/:id', comicController.deleteComic);
router.delete('/deleteComic/:num', comicController.deleteComicByName);

module.exports = router;

