 const validateRegisterInput = (req, res, next) => {
    const { firstName, lastName,email, password } = req.body;
  
    if (!firstName|| !lastName || !email || !password ) {
      return res.status(400).json({ message: 'Thiếu thông tin đăng ký.' });
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email không hợp lệ.' });
    }
  
    if (password.length < 6) {
      return res.status(400).json({ message: 'Mật khẩu phải từ 6 ký tự.' });
    }
  
    next();
  };

  export default validateRegisterInput;
  