import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

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
