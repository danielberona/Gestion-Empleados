const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv://sena:vB6LMmHMRcn5BRz9@cluster0.d88do.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 