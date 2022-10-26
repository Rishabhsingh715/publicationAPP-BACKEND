// const mysql2 = require('mysql2');
import mysql2 from 'mysql2';

export const db =  mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlpassword123',
    database: 'hrithik_base'
})