
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index.js'; // import default từ index.js Sequelize

import { registerUser } from '../services/auth.service.js';

export const register = async (req, res) => {
  try {
    const result = await registerUser(req.body);

    if (result.errCode !== 0) {
      return res.status(400).json(result); 
    }

    return res.status(201).json(result);
  } catch (error) {
    console.error('❌ Lỗi ở register controller:', error);
    return res.status(500).json({
      errCode: -1,
      errMessage: 'Lỗi server.',
    });
  }
};


// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await db.User.findOne({ where: { email } });
//     if (!user) return res.status(404).json({ error: 'Không tìm thấy người dùng' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: 'Sai mật khẩu' });

//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.json({ token, user: { id: user.id, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
