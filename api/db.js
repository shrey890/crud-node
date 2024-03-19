import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

db.connect((err, res) => {
    if (err) return console.log('db connection error: ' + err);
    console.log('connected to:', db.config.database);
});

export default db;
