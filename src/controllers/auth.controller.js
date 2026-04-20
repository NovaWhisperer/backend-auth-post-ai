const userModel = require("../models/user.models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function registerController(req, res) {
    const { username, password } = req.body

    const existingUser = await userModel.findOne({
        username
    })

    if (existingUser) {
        res.status(409).json({
            message: "Duplicate User can't be created"
        })
    }

    const user = await userModel.create({ username, password: await bcrypt.hash(password, 10) })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.cookie("token", token)


    res.status(201).json({
        message: "User register successfully",
        user
    })
}

async function loginController(req, res) {
    const { username, password } = req.body

    const user = await userModel.findOne({
        username
    })

    if (!user) {
        return res.json({
            message: "Invalid User"
        })
    }

    // const passwordValid = user.password === password

    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
        return res.json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(200).json({
        message: "User login successfully",
        id: user._id
    })

}

module.exports = { registerController, loginController }