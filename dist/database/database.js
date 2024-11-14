"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const API_KEY = process.env.DATABASE_URL.toString();
function connectToDatabase() {
    (0, mongoose_1.connect)(API_KEY)
        .then(() => {
        console.log("Connected with success");
    })
        .catch((error) => {
        console.log(error);
    });
}
exports.default = connectToDatabase;
