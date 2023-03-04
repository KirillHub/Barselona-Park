"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// import {
// } from './controllers/index.js';
mongoose_1.default
    .connect(`mongodb+srv://${process.env.MONGO}@cluster0.g2dffl4.mongodb.net/blog?retryWrites=true&w=majority`)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '1mb' }), (0, cors_1.default)());
app.listen(process.env.PORT || 4444, () => {
    console.log('Server OK');
});
app.on('error', (e) => console.error('Error', e));
