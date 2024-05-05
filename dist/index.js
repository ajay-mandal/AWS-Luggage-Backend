"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API that returns random geocoordinates of Bangalore with 6 decimal places
app.get("/coordinates", (req, res) => {
    const lat = 12.9716 + Math.random() / 10;
    const lng = 77.5946 + Math.random() / 10;
    res.json({ lat, lng });
});
app.get('/random-coordinates', (req, res) => {
    const minLat = 12.91;
    const maxLat = 13.04;
    const minLon = 77.54;
    const maxLon = 77.67;
    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lon = Math.random() * (maxLon - minLon) + minLon;
    res.json({
        lat: lat.toFixed(6),
        lng: lon.toFixed(6)
    });
});
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
