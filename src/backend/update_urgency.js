const mysql = require("mysql2/promise");
require("dotenv").config();

async function updateSchema() {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        console.log("Updating requests urgency ENUM...");
        await pool.query("ALTER TABLE requests MODIFY COLUMN urgency ENUM('Low', 'Medium', 'High', 'Critical', 'Urgent', 'Normal') DEFAULT 'Medium'");
        console.log("Schema updated successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error updating schema:", err);
        process.exit(1);
    }
}

updateSchema();
