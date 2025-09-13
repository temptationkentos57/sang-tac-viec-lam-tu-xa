const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chào mừng đến với Sang Tác Việc Làm Từ Xa!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});