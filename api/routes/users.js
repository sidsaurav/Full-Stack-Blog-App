const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post")
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body, //this sets found user to everything we sent by json...
            }, { new: true }); // send the updated user not the old one...
            res.status(200).json(updatedUser);

        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("You can update only your account!")
    }
});

//DELETE -> find all posts by user and delete it then delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted successfully");

            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.send(404).json("User not found!")
        }
    } else {
        res.status(401).json("You can delete only your account!")
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others);
    } catch (err) {

    }
})

module.exports = router;