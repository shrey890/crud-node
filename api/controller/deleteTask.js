import db from "../db.js";
export const deleteTask = (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?'
    const { id } = req.params
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json('error deleting task ', err.message);
        return res.status(200).json('task deleted successfully ')
    })
}