-- BLOODHUB Database Seed Data Reference
-- Note: Passwords in this file are NOT hashed. Use seed.js for a functional database.

USE bloodhub;

-- Clear tables
DELETE FROM responses;
DELETE FROM requests;
DELETE FROM donors;
DELETE FROM hospitals;

-- Hospitals
INSERT INTO hospitals (name, email, phone, city, password, address, verified) VALUES 
('Nobel Hospital', 'nobel@hospital.com', '9801234567', 'Dharan', 'Password123', 'Kanchanbari', 1),
('Kathmandu Medical College', 'kmc@hospital.com', '9807654321', 'Kathmandu', 'Password123', 'Sinamangal', 1);

-- Donors
INSERT INTO donors (name, email, phone, age, blood_type, city, password, health_declaration, available) VALUES 
('Akriti Shrestha', 'akriti@donor.com', '+9779800000001', 25, 'O+', 'Dharan', 'Password123', '{"healthy": true}', 1),
('Anmol Dhakal', 'anmol@donor.com', '+9779800000002', 28, 'AB+', 'Dharan', 'Password123', '{"healthy": true}', 1),
('Shreya Khanal', 'shreya@donor.com', '+9779800000003', 22, 'B+', 'Kathmandu', 'Password123', '{"healthy": true}', 1);

-- Requests
INSERT INTO requests (hospital_id, blood_type, quantity, urgency, city, patient_details, status) VALUES 
(1, 'AB+', 2, 'High', 'Dharan', 'Emergency surgery needed', 'Open'),
(2, 'B+', 1, 'Medium', 'Kathmandu', 'Regular transfusion', 'Open');

-- Responses
INSERT INTO responses (request_id, donor_id, status, estimated_arrival, message) VALUES 
(1, 2, 'Completed', '00:15:00', 'I am coming in 15 mins'),
(1, 1, 'Coming', '00:30:00', 'Will be there soon'),
(2, 3, 'Pending', NULL, 'Can assist if needed');
