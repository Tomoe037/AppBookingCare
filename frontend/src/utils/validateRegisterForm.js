
export const validateRegisterForm = (form) => {
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      return "Vui lòng điền đầy đủ thông tin!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Email không hợp lệ!";
    }
 
    if (form.password.length < 6) {
      return "Mật khẩu phải có ít nhất 6 ký tự!";
    }
  
    return null;
  };
  