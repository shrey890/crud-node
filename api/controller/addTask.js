import db from "../db.js";

export const addTask = (req, res) => {
    const sql = 'INSERT INTO tasks (task) VALUES (?)'; // Corrected SQL query
    const values = [req.body.task];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error adding task', details: err });
        }
        return res.status(200).json('Task added successfully');
    });
};
