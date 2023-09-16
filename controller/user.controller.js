const { createAUserServices } = require("../services/user.services");



// create a user -------
exports.createAUser = async (req, res, next) => {
    try {
        const result = await createAUserServices(req.body)

        res.status(200).json({
            status: 'success',
            massage: "User Data inserted Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};