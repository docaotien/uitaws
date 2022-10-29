"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`Welcome, we are GROUP II,
    Our Member:
    Name & S_ID: Đỗ Cao Tiến - 19522333
                 Khương Viết Tài - 19522151
                 Nguyễn Ngọc Hoàn - 19521452`);
});
app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});
