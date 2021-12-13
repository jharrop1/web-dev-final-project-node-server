const userModel = require('./user-model');

const findAllUsers = () =>
    userModel.find();

const findUserById = (userId) =>
    userModel.findById(userId);

const findByUsernameAndPassword = ({username, password}) =>
    userModel.findOne({username, password});

const findByUsername = (name) =>
    userModel.findOne({username: name});

const findByUsername2 = ({username}) =>
    userModel.findOne({username});

const createUser = (user) =>
    userModel.create(user);

const updateUser = (user) =>
    userModel.updateOne({_id: user._id}, {
        $set: user
    },
        );

const updateUser2 = (user) =>
    userModel.updateOne({_id: user._id}, {
        $set: user
    });


const deleteUser = (userId) =>
    userModel.deleteOne({_id: userId});

module.exports = {
    findByUsername, findAllUsers, findUserById,
    findByUsernameAndPassword,
    createUser, updateUser, deleteUser, findByUsername2, updateUser2
};