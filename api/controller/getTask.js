import db from "../db.js";
import util from 'util';

const queryAsync = util.promisify(db.query).bind(db);

export const getTasks = async (req, res) => {
    const sql = 'SELECT * FROM tasks';

    try {
        const data = await queryAsync(sql);
        res.status(200).json(data);
    } catch (err) {
        console.error('Error getting tasks:', err);
        res.status(500).json({ error: 'Error getting tasks', details: err });
    }
};
// export const getTasks =async (req,res)=>{
//     const sql  = 'SELECT * FROM tasks';
   
//    await db.query(sql, (err,data)=>{
//         if(err) return res.status(500).json('error getting tasks ',err);
//         return res.status(200).json('task getting successfully')
//     })
// }