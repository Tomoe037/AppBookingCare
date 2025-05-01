

const validateUserFields = (checkPassword = true) => {
  return (req, res, next) => {
    const {
      email,
      password,
      firstName,
      lastName,
      gender,
      positionId,
      roleId,
    } = req.body;

    if (
      !email ||
      (checkPassword && !password) ||
      !firstName ||
      !lastName ||
      !gender ||
      !roleId
    ) {
      return res.status(400).json({
        errCode: 1,
        message: 'Vui lòng nhập đầy đủ thông tin bắt buộc.',
      });
    }

    if (roleId === 'R2' && !positionId) {
      return res.status(400).json({
        errCode: 2,
        message: 'Bác sĩ phải chọn chức vụ (positionId).',
      });
    }
    next();
  };
};

export const validateCreateUser = validateUserFields(true);  
export const validateUpdateUser = validateUserFields(false); 