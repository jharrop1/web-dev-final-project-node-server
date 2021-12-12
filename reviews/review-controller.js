const reviewDao = require('./review-dao');

module.exports = (app) => {

    const findAllReviews = (req, res) =>
        reviewDao.findAllReviews()
            .then(reviews => res.json(reviews));

    const findReviewById = (req, res) =>
        reviewDao.findReviewById(req.params.reviewId)
            .then(review => res.json(review));

    const findReviewsByProfileId = (req, res) =>
        reviewDao.findReviewsByProfileId(req.params.profileId)
            .then(reviews => res.json(reviews));

    const findReviewsByImdbId = (req, res) =>
        reviewDao.findByImdbId(req.params.imdbId)
            .then(reviews => res.json(reviews));

    const createReview = (req, res) => {
        const review = {
            imdbId: req.body.imdbId,
            profileId: req.body.profileId,
            profileName: req.body.profileName,
            review: req.body.newReview,
            dateCreated: Date.now()
        };
        reviewDao.createReview(review).then(res.json(review));
    }

    const deleteReview = (req, res) =>
        reviewDao.deleteReview(req.params.reviewId)
            .then(status => res.send(status));

    const updateReview = (req, res) =>
        reviewDao.updateReview(req.body)
            .then(status => res.send(status));


    app.put('/api/reviews', updateReview);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
    app.get('/api/reviews', findAllReviews);
    app.get('/api/reviews/:reviewId', findReviewById);
    app.get('/api/movies/reviews/:imdbId', findReviewsByImdbId);
    app.get('/api/profiles/:profileId', findReviewsByProfileId);
};