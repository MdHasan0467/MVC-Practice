const UserModel = require("../models/user.Schema");


//! create a user
exports.createAUserServices = async (data) => {
    const result = await UserModel.create(data);
    return result;
};