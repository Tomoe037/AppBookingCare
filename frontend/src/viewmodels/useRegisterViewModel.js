import { useState } from "react";
import { registerAPI } from "../features/auth/authService.js";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import { validateRegisterForm } from "../utils/validateRegisterForm.js";
const useRegisterViewModel = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    // Lấy đối tượng input được người dùng chỉnh sửa
    const target = event.target;

    // Lấy tên trường dữ liệu từ thuộc tính 'name' của input
    const fieldName = target.name;

    // Lấy giá trị mới mà người dùng nhập
    const fieldValue = target.value;
    // console.log("check fiedvalue from usevm :",fieldValue )
    // Tạo một bản sao mới của form
    const updatedForm = {
      ...form, // giữ nguyên tất cả các giá trị cũ
      [fieldName]: fieldValue, 
    };
    console.log("check updatedFormfrom usevm :", updatedForm);
    setForm(updatedForm);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const error = validateRegisterForm(form);
    if (error) {
      alert(error);
      setLoading(false);
      return;
    }
    try {
      const res = await registerAPI(form);
      dispatch(setUser(res.data));
      console.log("check res from userVm", res.data);
      alert("Đăng ký thành công!");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Lỗi đăng ký");
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, handleChange, handleRegister };
};

export default useRegisterViewModel;
