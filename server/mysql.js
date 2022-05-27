const mysql = require('mysql2');
const express = require('express')
const app = express()
const porta = 3010;

app.use(express.json())

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
     port: 3306,
    database: "login_data",
    password: '',
});

function select(){
    return "Select * from usuarios";
}
app.get('/', function(req, res){
    app.get('/register', function(req, res){
        conection.query(select(), function(err, result){
            if (err) throw err
            const matricula = req.body.matricula;
            const nome = req.body.nome
            res.status(200).json(result)
        })
    })
    
    conection.query(select(), function(err, result){
        if (err) throw err
        res.status(200).json(result)
    })
})

app.listen(porta, () => {
    console.log('Servidor em operação')
});