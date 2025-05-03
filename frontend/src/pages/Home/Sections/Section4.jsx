import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper.jsx";
import { useTopDoctors } from "../../../viewmodels/useHomeViewModel";

const Section4 = () => {
  const { topDoctors, loadingTopDoctors } = useTopDoctors();

  const groupItems = topDoctors.map((doctor) => ({
    image: doctor.image,
    subtitle: `${doctor.positionData?.valueVi || ""} ${
      doctor.firstName || ""
    } ${doctor.lastName || ""}`.trim(),
    description: "Cơ xương khớp",
    hasDescription: true,
  }));

  return (
    <div className="section4">
      <SectionWrapper
        title="Top Bác sĩ nổi bật"
        buttonText="Xem Thêm"
        isSlider={true}
        items={groupItems}
        loading={loadingTopDoctors}
      />
    </div>
  );
};

export default Section4;
