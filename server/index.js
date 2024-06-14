const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
// main().catch(err => console.log(err));

// async function main() {
//     try {
//         await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// main();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        const PORT = process.env.PORT || 8080;
        server.listen(PORT, () => {
            console.log(`Connected to db & Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })


const userSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', userSchema);

const server = express();
server.use(cors())
server.use(bodyParser.json())

server.post('/contact', async (req, res) => {
    // Add validation logic here
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }
    // If validation passes, proceed with saving the data
    try {
        const user = new User(req.body);
        const savedDoc = await user.save();
        console.log(savedDoc);
        res.json(savedDoc);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

server.get('/contact', async (req, res) => {
    try {
        const docs = await User.find({});
        res.json(docs);
    } catch (error) {
        console.error('Error retrieving documents:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});
