const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

async function checkTable() {
    try {
        const [rows] = await pool.query("DESCRIBE responses");
        console.log("Responses Table Schema:");
        console.table(rows);
        process.exit(0);
    } catch (err) {
        console.error("Error describing table:", err);
        process.exit(1);
    }
}

checkTable();
