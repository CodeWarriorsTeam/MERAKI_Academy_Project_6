const connection = require("../database/db");
const createNewBooking = (req, res) => {
  const { booking_day, date_booking, booking_time, Payment } = req.body;
  const query = `INSERT INTO booking (booking_day, date_booking, booking_time, Payment) VALUES (?,?,?,?)`;
  const data = [booking_day, date_booking, booking_time, Payment];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    return res.status(201).json({
      success: true,
      message: `Booking Created`,
      result: result,
    });
  });
};

const getAllBooking = (req, res) => {
  const query = `SELECT * FROM booking WHERE booking.is_deleted = 0`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    if (!result[0]) {
      return res.status(200).json({
        success: false,
        message: `no booking yet`,
      });
    }
    return res.status(201).json({
      success: true,
      message: `All Booking`,
      result: result,
    });
  });
};
module.exports = { createNewBooking, getAllBooking };