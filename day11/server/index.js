let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
//----------------------------------------
let app = express();
// Middleware
    app.use(express.json());
    app.use(cors());
//----------------------------------------
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Contact = mongoose.model("Contact", new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    city : String,
    power : Number
}));
//----------------------------------------
let handleError = function(error){
    console.log("Error : ", error);
}
//----------------------------------------
let datauri = "mongodb://127.0.0.1:27017/onlinefriendsDB";
mongoose.connect(datauri,{ useNewUrlParser : true, useUnifiedTopology : true })
.then(()=>{
    console.log("DB connection success");
})
.catch((error)=>{
    handleError(error);
});
//----------------------------------------
// READ
app.get("/data", function(req, res){
    Contact.find(function(error, contact){
        if(error){
            handleError(error);
        }else{
            res.json(contact);
        }
    })
});
// CREATE
app.post("/data", function(req, res){
    let contact = new Contact(req.body);
    contact.save().then(()=>{
        res.status(200).send("Contact was added to Database");
    }).catch((error)=>{
        handleError(error);
        res.status(400).send("Adding Contact Failed");
    })
})
// REQUEST FOR AN EDIT
app.get("/edit/:id", function(req, res){
    Contact.findById(req.params.id, function(error, contact){
        if(error){
            handleError(error);
        }else{
            res.json(contact)
        }
    })
});
// UPDATE
app.post("/edit/:id", function(req, res){
    Contact.findById(req.params.id, function(error, contact){
        if(error){
            handleError(error);
        }else{
            contact.firstname = req.body.firstname;
            contact.lastname = req.body.lastname;
            contact.city = req.body.city;
            contact.power = req.body.power;
            contact.save().then(()=>{
                res.status(200).send(contact);
            }).catch(()=>{
                res.status(400).send("Unable to update the contact");
            });
        }
    })
});
// DELETE
app.delete("/delete/:id", function(req, res){
    Contact.findByIdAndDelete({ _id: req.params.id }, function(error, contact){
        if(error){
            handleError(error);
        }else{
            res.send("Contact was Deleted")
        }
    })
})
//----------------------------------------
app.listen(3030, "localhost", function(error){
    if(error){
        handleError(error);
    }else{
        console.log("server is now running on localhost:3030");
    }
});