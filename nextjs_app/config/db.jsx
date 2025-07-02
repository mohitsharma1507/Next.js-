import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mohit@13",
  database: "hospital_db",
});

try {
  const connection = await db.getConnection();
  console.log("DataBase connected Sucessfully.");
  connection.release(); //important to release back to pool
} catch (error) {
  console.error("Database connection failed:", error);
  process.exit(1);
}
