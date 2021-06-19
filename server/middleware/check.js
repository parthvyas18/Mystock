const jwt = require("jsonwebtoken");
const Data = require("../data/appdata");


const check = async (req,res,next) =>{

    try{

      
        console.log("hiii");
        var token = req.headers.cookie;
        console.log(token)
        console.log("cheking 2")
        token = token.substr(24,token.length)
        console.log(token)
        console.log("Verification is doing")
        const veriyfytoken = jwt.verify(token,process.env.SECRET_KEY);
        console.log('Verification done')
        console.log(veriyfytoken)
        console.log("cheking 3")

        const rootdata = await Data.findOne({_id:veriyfytoken._id,"Tokens.token":token});
        
        if(!rootdata){ throw new Error("user not find")}

        req.token =token;
        req.rootdata=rootdata;
        req.userId=rootdata._id;
        next();
    }catch(err) {
        res.status(401).send("unathorised");
        console.log(err);
    }
}

module.exports = check;