
import { useState } from "react";

const useUserManagerViewModel = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    gender: '',
    position: '',
    role: '',
    image: null,
    previewImgUrl: '',
  });

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

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      gender: '',
      position: '',
      role: '',
      image: null,
      previewImgUrl: '',
    });
  };

  return {
    formData,
    handleInputChange,
    handleImageChange,
    resetForm,
  };
};

export default useUserManagerViewModel;