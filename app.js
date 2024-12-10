
const express = require('express');
const mongoose = require('mongoose');
const companyRoutes = require('./src/routes/companyRoutes');

const app = express();

app.use(express.json());
app.use('/api', companyRoutes);

// ...existing code...

mongoose.connect('mongodb://localhost:27017/donilabapi', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// ...existing code...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});