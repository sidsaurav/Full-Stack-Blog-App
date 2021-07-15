const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);