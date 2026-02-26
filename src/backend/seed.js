const pool = require("./src/config/db");
const bcrypt = require("bcryptjs");

async function seed() {
    console.log("Starting database seeding...");

    try {
        const password = "Password123";
        const hashedPassword = await bcrypt.hash(password, 10);

        // 1. Clear existing data (optional, but good for a fresh start)
        // Order matters due to foreign keys if they exist (though not explicitly shown in schema)
        console.log("Clearing existing data...");
        await pool.query("DELETE FROM responses");
        await pool.query("DELETE FROM requests");
        await pool.query("DELETE FROM donors");
        await pool.query("DELETE FROM hospitals");

        // 2. Insert Hospitals
        console.log("Seeding hospitals...");
        const [hospitalResults] = await pool.query(
            "INSERT INTO hospitals (name, email, phone, city, password, address, verified) VALUES " +
            "(?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?)",
            [
                "Nobel Hospital", "nobel@hospital.com", "9801234567", "Dharan", hashedPassword, "Kanchanbari", 1,
                "Kathmandu Medical College", "kmc@hospital.com", "9807654321", "Kathmandu", hashedPassword, "Sinamangal", 1
            ]
        );
        const hospital1Id = hospitalResults.insertId;
        const hospital2Id = hospital1Id + 1;

        // 3. Insert Donors
        console.log("Seeding donors...");
        await pool.query(
            "INSERT INTO donors (name, email, phone, age, blood_type, city, password, health_declaration, available) VALUES " +
            "(?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                "Akriti Shrestha", "akriti@donor.com", "+9779800000001", 25, "O+", "Dharan", hashedPassword, JSON.stringify({ healthy: true }), 1,
                "Anmol Dhakal", "anmol@donor.com", "+9779800000002", 28, "AB+", "Dharan", hashedPassword, JSON.stringify({ healthy: true }), 1,
                "Shreya Khanal", "shreya@donor.com", "+9779800000003", 22, "B+", "Kathmandu", hashedPassword, JSON.stringify({ healthy: true }), 1
            ]
        );
        const [donorRows] = await pool.query("SELECT id FROM donors");
        const donor1Id = donorRows[0].id;
        const donor2Id = donorRows[1].id;
        const donor3Id = donorRows[2].id;

        // 4. Insert Requests
        console.log("Seeding requests...");
        const [requestResults] = await pool.query(
            "INSERT INTO requests (hospital_id, blood_type, quantity, urgency, city, patient_details, status) VALUES " +
            "(?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?)",
            [
                hospital1Id, "AB+", 2, "High", "Dharan", "Emergency surgery needed", "Open",
                hospital2Id, "B+", 1, "Medium", "Kathmandu", "Regular transfusion", "Open"
            ]
        );
        const request1Id = requestResults.insertId;
        const request2Id = request1Id + 1;

        // 5. Insert Responses
        console.log("Seeding responses...");
        await pool.query(
            "INSERT INTO responses (request_id, donor_id, status, estimated_arrival, message) VALUES " +
            "(?, ?, ?, ?, ?), (?, ?, ?, ?, ?), (?, ?, ?, ?, ?)",
            [
                request1Id, donor2Id, "Completed", "00:15:00", "I am coming in 15 mins",
                request1Id, donor1Id, "Coming", "00:30:00", "Will be there soon",
                request2Id, donor3Id, "Pending", null, "Can assist if needed"
            ]
        );

        console.log("Database seeded successfully!");
        console.log("Sample User Credentials:");
        console.log("Hospital: nobel@hospital.com / Password123");
        console.log("Donor: anmol@donor.com / Password123");

        process.exit(0);
    } catch (err) {
        console.error("Error during seeding:", err);
        process.exit(1);
    }
}

seed();
