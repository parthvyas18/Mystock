const mongoose = require("mongoose");

const DB = 'mongodb+srv://parthvyas:adityaparth@cluster0.tzu5m.mongodb.net/stocks?retryWrites=true&w=majority';


mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(()=>{
    console.log("conection succses");
}).catch((err)=>{
    console.log(err);
});
