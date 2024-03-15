import db from "../db.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const register = (req, res) => {
    const q = 'SELECT * FROM users WHERE email =? OR username = ?'
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json('user already exists')
        // ! hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const iq = 'INSERT INTO users (`username`,`email`,`password`) VALUES (?,?,?)'
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(iq, values, (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json('user has been created')
        })
    })
}
export const login = (req, res) => {
    const q = 'SELECT * FROM users WHERE email = ?'
    db.query(q, [req.body.username], (err, data) => {
        if (err) console.log(err)
        if (data.length === 0) return console.log('user not found')
        const isPasswordCorr = bcrypt.compareSync(req.body.password, data[0].password)
        if (!isPasswordCorr) {
            console.log('Wrong username or password');
            return res.status(404).send('Wrong username or password');
        }
        const token = jwt.sign({ id: data[0].id }, 'jwtkey')
        const { password, ...other } = data[0]
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json(other)
    })
}
export const logout = (req, res) => {
}