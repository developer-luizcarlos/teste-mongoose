"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const database_1 = __importDefault(require("./database/database"));
const port = Number(process.env.PORT || 5000);
const hostName = "127.0.0.1";
(0, database_1.default)();
server_1.default.listen(port, hostName, () => {
    console.log(`Server active on http://${hostName}:${port}`);
});
