const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'roottrial',
});

connection.connect((error) =>{
    if(error){
        console.log('Error connection to MYSQL');
    }
    console.log('Connection has been established');
});
connection.end((error) =>{
});