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
  const [error, setError] = useState("");
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
      ...form,
      [fieldName]: fieldValue,
    };
    console.log("check updatedFormfrom usevm :", updatedForm);
    setForm(updatedForm);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const validationError = validateRegisterForm(form);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }
    try {
      const res = await registerAPI(form);

      if (res.data && res.data.errCode !== 0) {
        setError(res.data.errMessage || "Đăng ký thất bại!");
      } else {
        dispatch(setUser(res.data.user));
        alert("Đăng ký thành công!");
        navigate("/home");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); 
      } else if (err.message === "Network Error") {
        setError("Không có kết nối đến máy chủ.");
      } else {
        setError("Lỗi hệ thống, vui lòng thử lại sau.");
      }
      console.log("Lỗi hệ thống : ", err);
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, error, handleChange, handleRegister };
};

export default useRegisterViewModel;
