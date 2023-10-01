const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server started on Poprt 3000');
})

app.post('/getData', (req,res)=>{
    console.log('Data here', req.body.data);
    res.json('We have received the data on server');
})