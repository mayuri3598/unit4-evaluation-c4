const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://mayuri123@cluster0.gpozx.mongodb.net/TODOS?retryWrites=true&w=majority");
};




