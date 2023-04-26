const mongoose = require('mongoose');

const { tacheS_APP_MONGODB_HOST, tacheS_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb+srv://hugob42480:UCTqJKJ63GCHVFSF@cluster0.ufp1jko.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('Db is connected'))
.catch(err => console.log(err));