import bcryptjs from 'bcryptjs';
import User from '../../../models/User'
import db from '../../../utils/db'

async function handler(req, res) {
    if (req.method !== 'POST') {
        return;
    }

    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 5
    ) {
        res.status(422).json({
            message: 'Validation error',
        });
        return;
    }

    await db.connect();

    const existingUser = await User.findOne({ $or: [{ email: email }, { username: username }] })

    if (existingUser) {
        res.status(422).json({ message: 'User exists already!' });
        await db.disconnect();
        return;
    }

    const newUser = new User({
        username,
        email,
        password: bcryptjs.hashSync(password),
    })

    const user = newUser.save();
    await db.disconnect();
    res.status(201).send({
        message: 'User saved successfully',
        _id: user._id,
        username: user.username,
        email: user.email,
    });
}

export default handler;