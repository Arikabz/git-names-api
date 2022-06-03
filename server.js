const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage':{
        'age': 29,
        'birthname':'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'},
    'chance the rapper':{
        'age': 29,
        'birthname':'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'},
    'dylon':{
        'age': 29,
        'birthname':'Dylan',
        'birthLocation': 'Dylan'}
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    
});

app.get('/api/:rapperName', (req,res)=>{
    let name = req.params.rapperName.toLowerCase();
    if(rappers[name]){
        res.json(rappers[name])
    }
    else{
        res.json(rappers['dylon'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}, better go catch it! ...`)
})