import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, travelDates, groupSize, preferences } =
      req.body;

    try {
      // Save booking to the database
      const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "loyani",
      });

      // Insert the booking details into the database
      await connection.execute(
        "INSERT INTO bookings (name, email, phone, travel_dates, group_size, preferences) VALUES (?, ?, ?, ?, ?, ?)",
        [name, email, phone, travelDates, groupSize, preferences]
      );
      await connection.end();

      // Send confirmation email to reservationist
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "your-email@gmail.com",
          pass: "your-email-password", // Make sure to use environment variables for sensitive data in production
        },
      });

      await transporter.sendMail({
        from: "your-email@gmail.com",
        to: "reservationist-email@loyani.com",
        subject: "New Safari Booking",
        text: `You have a new safari booking from ${name}.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTravel Dates: ${travelDates}\nGroup Size: ${groupSize}\nPreferences: ${preferences}`,
      });

      // Return success response
      res
        .status(200)
        .json({ message: "Booking submitted and email sent successfully" });
    } catch (error) {
      console.error("Booking submission error:", error);
      res.status(500).json({ message: "Error submitting booking" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
