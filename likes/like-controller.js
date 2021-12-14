const likeDao = require('./like-dao');

module.exports = (app) => {

    const findAllLikes = (req, res) =>
        likeDao.findAllLikes()
            .then(likes => res.json(likes));

    const findLikesById = (req, res) =>
        likeDao.findLikesByProfileId(req.params.likeId)
            .then(like => res.json(like));

    const findLikesByProfileId = (req, res) =>
        likeDao.findLikesByProfileId(req.params.profileId)
            .then(likes => res.json(likes));

    const findLikesByImdbId = (req, res) =>
        likeDao.findByImdbId(req.params.imdbId)
            .then(likes => res.json(likes));

    const createLike = (req, res) => {
        const like = {
            imdbId: req.body.imdbId,
            profileId: req.body.profileId,
            profileName: req.body.profileName,
            dateCreated: Date.now()
        };
        likeDao.createLike(like).then(res.json(like));
    }

    const deleteLike = (req, res) =>
        likeDao.deleteLike(req.params.likeId)
            .then(status => res.send(status));

    const updateLike = (req, res) =>
        likeDao.updateLike(req.body)
            .then(status => res.send(status));


    app.put('/api/likes', updateLike);
    app.post('/api/likes', createLike);
    app.delete('/api/likes/:likeId', deleteLike);
    app.get('/api/Likes', findAllLikes);
    app.get('/api/Likes/:likeId', findLikesById);
    app.get('/api/movies/likes/:imdbId', findLikesByImdbId);
    app.get('/api/profiles/:profileId', findLikesByProfileId);
};