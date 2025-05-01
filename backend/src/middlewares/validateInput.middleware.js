const validateCreateUser = (req, res, next) => {
    const {
      email,
      password,
      firstName,
      lastName,
      gender,
      position,
      role
    } = req.body;
  
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !gender ||
      !role
    ) {
      return res.status(400).json({
        errCode: 1,
        message: 'Vui lòng nhập đầy đủ thông tin bắt buộc.',
      });
    }

    if (role === 'R2' && !position) {
      return res.status(400).json({
        errCode: 2,
        message: 'Bác sĩ phải chọn chức vụ (position).',
      });
    }
  
 
    next();
  };

  export {
    validateCreateUser 
  }
  