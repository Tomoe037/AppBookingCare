import db from '../models/index.js';

 const checkUserAlreadyExists = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await db.User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(409).json({ message: 'Email đã được sử dụng.' });
  }

  next();
};

export default checkUserAlreadyExists;
