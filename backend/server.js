import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000
app.use(express.static('dist'))
app.use(cors());

app.get('/' , (req , res) => {
    res.send("BaseOps is live!")
})

app.get('/api/github' , (req , res) => {
    const APIData = [
        {
            id : 1,
            'name' : 'Baljeet Singh' , 
            'content' : 'His Age is 17 yo'
        } ,
        {
            id : 2,
            'name' : 'Yash Anand' , 
            "content" : 'His Age is 14 yo'
        } ,
        {
            id : 3,
            'name' : 'Yashika Anand' , 
            "content" : 'Her Age is 11 yo'
        } ,
        {
            id : 4,
            'name' : 'Diljeet Singh' , 
            "content" : 'His Age is 11 yo'
        } ,
        {
            id : 5,
            'name' : 'Balraj Singh  Bhatia' , 
            "content" : 'His Age is 17 yo'
        } ,
       
    ]

    res.json(APIData)
})

app.listen(port , () => {

    console.log(`Server is being hosted at http://localhost:${port}`);
    
})