const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb" 
});

connection.connect((err) => {
    if (err) throw err;

//var sql = "INSERT INTO customers (name, address) VALUES ('Amy', 'Apple st 662')";
/*var values =[
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 662'],
    ['Hannah', 'Mountain 21'],
    ['Micheal', 'Valley 345'],
    ['Sandy', 'Ocean blvd']
];*/
    connection.query("SELECT name, address FROM customers", (err, result, _fields) => {
        if (err) throw err;
        console.log(_fields);
    });
}); 

