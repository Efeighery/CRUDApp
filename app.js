// Establishing connections with the mysql database
const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'roottrial',
});

// If the connection has an error, it will show an error message
// If not then the statement needed to create the database table is triggered to save registered users
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
