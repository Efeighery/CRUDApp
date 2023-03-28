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

    const statement = "INSERT INTO users "+(id, firstname, surname, email, password)+" VALUES";

    console.log(statement);
});
connection.end((error) =>{
});
