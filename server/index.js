const express = require('express');
const db = require('./utils/db');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const cloudinary = require('cloudinary');

app.use(express.json());
app.use('/', require('./routes'));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const upload = async () => {
    const uploadResult = await cloudinary.uploader
    .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
            public_id: 'shoes',
        }
    )
    .catch((error) => {
        console.log(error);
    });

    console.log(uploadResult);
}
//upload() //test cloudinary connection

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});