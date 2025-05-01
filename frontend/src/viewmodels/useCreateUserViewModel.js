import { useState } from "react";
import { fetchUserById } from "../features/admin/adminThunk.js";
import { useDispatch } from "react-redux";
const useCreateUserViewModel = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    gender: "",
    positionId: "",
    roleId: "",
    image: null,
    previewImgUrl: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`Đang nhập: ${name} = ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const objectUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        image: file,
        previewImgUrl: objectUrl,
      }));
    }
  };

  const setForm = (user) => {
    setFormData({
      email: user.email || "",
      password: "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      address: user.address || "",
      gender: user.gender || "",
      positionId: user.positionId || '',
      roleId: user.roleId || '',
      image: null,
      previewImgUrl: "",
    });
    setIsEditMode(true);
    setEditUserId(user.id);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      positionId: "",
      roleId: "",
      image: null,
      previewImgUrl: "",
    });
    setIsEditMode(false);
    setEditUserId(null);
  };

  const dispatch = useDispatch();
  const handleEditUser = async (userId) => {
    const res = await dispatch(fetchUserById(userId));
    if (res.meta.requestStatus === "fulfilled") {
      setForm(res.payload);
    }
  };

  return {
    formData,
    handleInputChange,
    handleImageChange,
    resetForm,
    setForm,
    isEditMode,
    setIsEditMode,
    editUserId,
    setEditUserId,
    handleEditUser,
  };
};

export { useCreateUserViewModel };
