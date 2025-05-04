import { useEffect ,useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorDetailThunk } from "../features/doctor/doctorThunk";
import { Buffer } from 'buffer';
export const useDoctorDetailViewModel = (doctorId) => {
  const dispatch = useDispatch();

  const {
    contentHTML,
    doctorDescription,
    doctorDetail: {
      loading,
      error,
      hasData,
      loaded,
      firstName,
      lastName,
      position,
      image,
    },
  } = useSelector((state) => state.doctor);

  useEffect(() => {
    if (doctorId) {
      dispatch(fetchDoctorDetailThunk(doctorId));
    }
  }, [doctorId, dispatch]);
  const doctorName = useMemo(() => {
    const fullName = `${firstName || ""} ${lastName || ""}`.trim();
    return `${position || ""} ${fullName}`.trim(); // 👈 kết hợp
  }, [firstName, lastName, position]);

 
    let imageBase64 = ''
    if(image){
   imageBase64 = Buffer.from(image, 'base64').toString('binary');

     
    }

  

  return {
    loading,
    error,
    hasData,
    loaded,
    description: doctorDescription,
    contentHTML,
    doctorName,
    imageBase64
  };
};
