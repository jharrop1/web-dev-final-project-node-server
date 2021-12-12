const reviewModel = require('./review-model');

const findAllReviews = () =>
    reviewModel.find();

const findReviewsByProfileId = (profileId) =>
    reviewModel.find({profileId});

const findReviewById = (reviewId) =>
    reviewModel.findById(reviewId);

const findByImdbId = (id) =>
    reviewModel.find({imdbId: id});

const createReview = (review) =>
    reviewModel.create(review);

const updateReview = (review) =>
    reviewModel.updateOne({_id: review._id}, {
            $set: review
        },
    );

const deleteReview = (reviewId) =>
    reviewModel.deleteOne({_id: reviewId});

module.exports = {
    findAllReviews, findReviewsByProfileId, findReviewById,
    findByImdbId, updateReview, createReview, deleteReview
};