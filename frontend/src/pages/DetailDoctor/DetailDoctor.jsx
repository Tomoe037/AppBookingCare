import React from "react";
import { useParams } from "react-router-dom";
import "./DetailDoctor.scss";
import { useDoctorDetailViewModel } from "../../viewmodels/useDoctorDetailViewModel";
const DetailDoctor = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    hasData,
    description,
    contentHTML,
    doctorName,
    imageBase64,
  } = useDoctorDetailViewModel(id);
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;
  if (!hasData) return <p>Không có dữ liệu bác sĩ.</p>;
 

  return (
    <div className="doctor-detail-container">
      <div className="intro-doctor">
        <div className="intro-content-left">
            <div className="image">
            <img 
         className="image-doctor"
         src={imageBase64 || "/default-avatar.jpg"}
         alt={doctorName || "Bác sĩ"}
        
          />
            </div>
       
        </div>
        <div className="intro-content-rigth">
        <div className="name-doctor"
       style={{
        fontWeight: 600,
        textTransform: "capitalize",
        fontSize: "35px"
      }}
        >{doctorName}</div>
        <div className="bio-doctor">{description}</div>
        </div>
      </div>
      <div className="schedule-doctor"></div>
      {contentHTML && (
        <div
          className="detail-info-doctor"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        />
      )}
      <div className="comment-doctor"></div>
    </div>
  );
};

export default DetailDoctor;
