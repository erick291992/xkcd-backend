const Comic = require('../model/comic');

/***************
 Comic queries
 ***************/

/**
 * creates a new comic in collection.
 * @param {object} comicProps - An object with month, num, link, year, news, safe_title, transcript, alt, img, title, day, imgRetina
 * @return {promise} A promise that resolves with a comic
 */
module.exports.createComic = (comicProps) => {
    const comic = new Comic(comicProps)
    return comic.save()
};

/**
 * retrieves all comics in collection.
 * @return {promise} A promise that resolves with an array of comic
 */
module.exports.findAllComics = () => {
    return Comic.find({})
};

/**
 * retrieves a comic in collection.
 * @param {string} id - id of a comic
 * @return {promise} A promise that resolves with a comic
 */
module.exports.findComicById = (id) => {
    return Comic.findById(id)
};


/**
 * deletes a comic in collection.
 * @param {string} num - num of a comic to be removed
 * @return {promise} A promise that resolves with a comic
 */
module.exports.deleteComicByNum= (num) => {
    return Comic.findOneAndRemove({"num": num})
};

/**
 * retrieves favoriteComicIds in collection.
 * @return {promise} A promise that resolves with a dictionary of comics with key id and value true
 */
module.exports.favoriteComicIds = () => {

    return new Promise((resolve, reject) => {
        Comic.find({})
        .then((foundComics)=>{
            let comicsSet = []
            for (let i = 0; i < foundComics.length; i++) {
                let foundComic = foundComics[i]
                comicsSet.push(foundComic.num.toString())
            }
            resolve(comicsSet)
        }).catch((err)=>{
            reject(err)
        })
    })
};