import { useState } from "react";
import { fetchUserById } from "../features/admin/adminThunk.js";
import { useDispatch } from "react-redux";
import { getBase64 } from "../utils/readFileImage.js";
import { Buffer } from 'buffer';

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
    image: "",
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

  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const base64 = await getBase64(file);
      // console.log("check base64 ",base64)
      const objectUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        image: base64,
        previewImgUrl: objectUrl,
      }));
    }
  };

  const setForm = (user) => {
    let imageBase64 = ''
    if(user.image){
   imageBase64 = Buffer.from(user.image, 'base64').toString('binary');

     
    }
    setFormData({
    
      email: user.email || "",
      password: "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      address: user.address || "",
      gender: user.gender || "",
      positionId: user.positionId || "",
      roleId: user.roleId || "",
      image: user.image,
      previewImgUrl: imageBase64,
    });
    setIsEditMode(true);
    setEditUserId(user.id);
    console.log("Preview URL khi setForm:", imageBase64);
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
      image: "",
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
