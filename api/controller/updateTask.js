import db from "../db.js"
export const updateTask = (req, res) => {
    const q = 'UPDATE tasks SET task = ? WHERE id= ?';
    const { id} = req.params; 
    const {task}=req.body
    db.query(q, [task, id], (err, data) => {
        if (err) return res.status(500).json('error updating task ', err);
        return res.status(200).json('task updated successfully');
    });
};
