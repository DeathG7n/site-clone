const express =  require('express')
const serverless = require('serverless-http')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv')
const cors = require('cors')
const Users = require('./models/Users')

const app = express();
const router = express.Router()
dotenv.config()


//Connection 
const database = module.exports = () =>{
    const connectionParams = {
        useUnifiedTopology: true,
    }
    try{
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URL, connectionParams)
        console.log('Database Connected')
    } catch(err){
        console.log(err)
        console.log('Database not connected')
    }
}
database()

//Authentications
//register
router.post('/auth/register', async (req, res)=>{
    const newUser = new Users({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        country: req.body.country,
        mobile: req.body.mobile,
        password: req.body.password
    })
    const existingUser = await Users.findOne({user_name: req.body.user_name})

    if(existingUser){
        res.status(500).json("User already exists")
    } else{
        try{
        const user = await newUser.save()
        res.status(200).json('User account created')
        } catch(err){
            res.status(500).json(err)
        }
    }
    
}) 

//login
router.post('/auth/login', async(req, res)=>{
    try{
        const user = await Users.findOne({user_name: req.body.user_name})
        !user && res.status(404).json("user not found") 

        const validPassword = req.body.password === user.password
        !validPassword && res.status(400).json('wrong password')

        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
    } catch(err){
        res.status(500).json(err)
    }
})

//Dashboard
//get a user
router.get('/user/:id', async(req, res)=>{
    try{
        const user = await Users.findById(req.params.id)
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
    } catch(err){
        res.status(500).json(err)
    }
})
//delete user
router.delete('/user/:id', async(req, res)=>{
    if(req.body.userId === req.params.id){
        try{
            const user = await Users.findByIdAndDelete(req.params.id)
            res.status(200).json('Account has been deleted')
        } catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("Can only delete your account")
    }
})
//update user
router.put('/user/:id', async(req, res)=>{
    if(req.body.userId === req.params.id){
        try{
            const user = await Users.findByIdAndUpdate(req.params.id, {
                $set : req.body,
            })
            res.status(200).json('Account has been updated')
        } catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("Can only update your account")
    }
})

//middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/.netlify/functions/api', router)



module.exports.handler= serverless(app) 