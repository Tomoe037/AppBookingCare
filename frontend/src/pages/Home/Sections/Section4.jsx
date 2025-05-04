import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper.jsx";
import { useTopDoctors } from "../../../viewmodels/useHomeViewModel";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const { topDoctors, loadingTopDoctors } = useTopDoctors();
  const navigate = useNavigate();
  const groupItems = topDoctors.map((doctor) => ({
    id: doctor.id, 
    image: doctor.image,
    subtitle: `${doctor.positionData?.valueVi || ""} ${
      doctor.firstName || ""
    } ${doctor.lastName || ""}`.trim(),
    description: "Cơ xương khớp",
    hasDescription: true,
  }));
  const handleClickItem = (item) => {
    navigate(`/detail-doctor/${item.id}`); 
  };
  return (
    <div className="section4">
      <SectionWrapper
        title="Top Bác sĩ nổi bật"
        buttonText="Xem Thêm"
        isSlider={true}
        items={groupItems}
        loading={loadingTopDoctors}
        onClickItem={handleClickItem}
      />
    </div>
  );
};

export default Section4;
