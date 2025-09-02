
import { neon } from '@netlify/neon';

export default async (req, res) => {
  const sql = neon();
  const { duration, intensity, speed } = req.body;

  try {
    await sql`
      INSERT INTO sessions (duration, intensity, speed, timestamp)
      VALUES (${duration}, ${intensity}, ${speed}, NOW())
    `;
    return res.status(200).json({ message: "Session saved successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
