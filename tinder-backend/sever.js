import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from "./dbCards.js"


//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:XM5qOU04e6YFyzk2@cluster0.oiiprj8.mongodb.net/?retryWrites=true&w=majority'

//MiddleWares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    // userNewUrlParser :true,
    // useCreateIndex : true,
    // useUnifiedTopology : true,
})

//API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello React programmers"));

app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) =>{
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(201).send(data)
        }
    })
});

//for downloading data from database
app.get('/tinder/cards', (req,res) =>{
    Cards.find((err,data) =>{
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(200).send(data)
        }
    });   
});


//Listners
app.listen(port, () => console.log(`listening on localhost ${port}`));

