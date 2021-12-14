const likeModel = require('./like-model');

const findAllLikes = () =>
    likeModel.find();

const findLikesByProfileId = (profileId) =>
    likeModel.find({profileId});

const findLikeById = (likeId) =>
    likeModel.findById(likeId);

const findByImdbId = (id) =>
    likeModel.find({imdbId: id});

const createLike = (like) =>
    likeModel.create(like);

const updateLike = (review) =>
    likeModel.updateOne({_id: review._id}, {
            $set: review
        },
    );

const deleteLike = (likeId) =>
    likeModel.deleteOne({_id: likeId});

module.exports = {
    findAllLikes, findLikesByProfileId, findLikeById,
    findByImdbId, updateLike, createLike, deleteLike
};